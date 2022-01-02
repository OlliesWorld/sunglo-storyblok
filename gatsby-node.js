const path = require('path')

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

exports.onCreateWebpackConfig = ({ actions, stage, plugins }) => {
  if (stage === 'build-javascript' || stage === 'develop') {
    actions.setWebpackConfig({
      plugins: [
        plugins.provide({ process: 'process/browser' })
      ]
    })
  }
  actions.setWebpackConfig({
    resolve: {
             alias: {
                path: require.resolve("path-browserify")
             },
             fallback: {
               fs: false,
             }
          }
        })
      }

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
      const storyblokEntry = path.resolve('src/templates/page.js')
  
      resolve(
        graphql(
          `{
            stories: allStoryblokEntry(filter: {field_component: {eq: "page"}}) {
              edges {
                node {
                  id
                  name
                  slug
                  field_component
                  full_slug
                  content
                }
              }
            }
          }`
        ).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }
  
          const entries = result.data.stories.edges
  
          entries.forEach((entry) => {
              if(entry.slug !== "home") {
                  const page = {
                      path: `/${entry.node.full_slug}`,
                      component: storyblokEntry,
                      context: {
                          story: entry.node
                      }
                  }
                  createPage(page)
              }
          })
        })
      )
    })
}