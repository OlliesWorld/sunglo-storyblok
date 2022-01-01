import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
// import { graphql } from 'gatsby'
 
import Layout from "../components/layout"
import Seo from "../components/seo"
import DynamicComponent from "../components/DynamicComponent"
import useStoryblok from "../lib/storyblok"
// import Navigation from '../components/Navigation'
 
const Page = ({ pageContext, location }) => { 
  let story = pageContext.story
  story = useStoryblok(story, location)
 
  const components = story.content.body.map(blok => {
    return (<DynamicComponent blok={blok} key={blok._uid} />)
  })
 
  return (
  <Layout location={location} >
    <div className="bg-pattern">
    <Seo title="Window Tinting in Durango | Locally Owned &amp; Operated | (970) 335-9600"/>
  
    { components }
    </div>
  </Layout>
)}
 
export default Page