import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby'
import SbEditable from 'storyblok-react'
 
import Layout from "../components/layout"
import Seo from "../components/seo"
import DynamicComponent from "../components/DynamicComponent"
import useStoryblok from "../lib/storyblok"


 
const IndexPage = ({ data, location }) => { 
  let story = data.storyblokEntry
  story = useStoryblok(story, location)
 
  const components = story.content.body.map(blok => {
    return (<DynamicComponent blok={blok} key={blok._uid} />)
  })
 
  return (
  <Layout location={location}>
    <SbEditable content={story.content}>
    <Seo title="Window Tinting in Durango | Locally Owned &amp; Operated | (970) 335-9600"/>
      <h1>{ story.content.title }</h1>

      { components }
      
    </SbEditable>
  </Layout>
)}
 
export default IndexPage
 
export const query = graphql`
  query HomeQuery {
    storyblokEntry(full_slug: {eq: "home"}) {
      content
      name
    }
  }
`