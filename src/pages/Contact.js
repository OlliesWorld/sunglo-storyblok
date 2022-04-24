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
          <div className="md:ml-40">
            <ContactForm />
          </div>
          <h1>{ story.content.title }</h1>
          <div className="flex ">

            { components }
          </div>

          </SbEditable>
        
            {/* <div className="lg:flex mx-auto">
              <div className="text-center md:w-56 md:mr-8 mx-auto">
                <StaticImage src="../images/building-img.jpg" layout="constrained" alt="office building with reflective window tint"
                        fit="contain"
                        width={270} height={150}
                        placeholder="blurred"/>
                        <h3>About us</h3>
                        <p>Our first priority is to enhance life by improving the windows in our community. SunGlo is designed to provide benefits that will increase one’s standard of living today, and continue to produce benefits into the future.</p>
                  </div>
                  <div className="text-center md:w-56">
                  <StaticImage src="../images/about-pic.jpg" layout="constrained"
                          fit="contain"
                          width={270} height={150}
                          placeholder="blurred" alt="looking up at2 men installing Sunglo Window film "/>
                          <h3>Home Window Tint</h3>
                          <p>We pride ourselves on high quality home window tint products and elite customer service. Your SunGlo Window Film Expert will exceed your expectations at every turn! We serve in all major areas of Colorado </p>
                </div>
            </div>
          
          
        </div>
            <h2 className="text-center text-primary">Commercial and residential window tinting in Durango and all surrounding areas.</h2> */}
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

