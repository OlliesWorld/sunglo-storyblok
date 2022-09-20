import React from 'react';
import Layout from '../components/layout';
import ContactForm from '../components/Form';
import { graphql } from 'gatsby'
import DynamicComponent from "../components/DynamicComponent"
import useStoryblok from "../lib/storyblok"
import Nav from '../components/Navigation';
import Seo from '../components/seo';
import Footer from '../components/Footer';

const ContactPage = ({ data, location }) => {
  let story = data.storyblokEntry
  story = useStoryblok(story, location)
 
  const components = story.content.body.map(blok => {
    return (<DynamicComponent blok={blok} key={blok._uid} />)
  })
  return (
  <Layout location={location} activeLink="contact">
    <Seo title="Window Tinting in Durango | Locally Owned &amp; Operated | (970) 335-9600"/>
        <Nav/>
        
        <div className="lg:flex justify-center w-5/6 mt-8 mb-20 mx-auto" >
          
            <div className='mx-auto mt-12'>
                <ContactForm />
              </div>
                            
          <div className='lg:w-3/5 mx-auto'>

          { components }
          </div>
          </div>
    <Footer />
   
  </Layout >
)
  };

export default ContactPage;

export const query = graphql`
  query ContactQuery {
    storyblokEntry(full_slug: {eq: "contact"}) {
      content
      name
    }
  }
`