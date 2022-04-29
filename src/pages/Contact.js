import * as React from "react"
import { graphql } from 'gatsby'
import SbEditable from 'storyblok-react'

import Seo from "../components/seo"
import Layout from '../components/layout'
import DynamicComponent from "../components/DynamicComponent"
import useStoryblok from "../lib/storyblok"

import Nav from '../components/Navigation'
import ContactForm from '../components/Form'
// import { StaticImage } from 'gatsby-plugin-image'
import Footer from '../components/Footer'

const ContactPage = ({ data, location }) => {
  let story = data.storyblokEntry
  story = useStoryblok(story, location)
 
  const components = story.content.body.map(blok => {
    return (<DynamicComponent blok={blok} key={blok._uid} />)
  })

  return (
    <Layout location={location}>
      <Seo title="Window Tinting in Durango | Locally Owned &amp; Operated | (970) 335-9600"/>
     
      <Nav />
        <div className="container mt-8 flex flex-col md:flex-row lg:justify-center mx-auto " >
          <SbEditable content={story.content}>
          <h1>{ story.content.title }</h1>
          <div className="md:ml-40">
            <ContactForm />
          </div>
          <div className="flex ">

            { components }
          </div>

          </SbEditable>
        
          
      </div>
    <Footer />
  </Layout>
  )
}
export default ContactPage

export const query = graphql`
  query ContactQuery {
    storyblokEntry(full_slug: {eq: "contact"}) {
      content
      name
    }
  }
`

