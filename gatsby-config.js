require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  
  siteMetadata: {
    title: `Sunglo Window Film Durango`,
    description: `SunGlo Window Films is Durango's best Commercial and Residential service`,
    author: `Roni`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sunglo Window Film Durango`,
        short_name: `Sunglo Durango`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/sunglo_favicon.png`, // This path is relative to the root of the site.
      },
    },
  
    {
      resolve: 'gatsby-source-storyblok',
      options: {
        
         accessToken: process.env.STORYBLOK_PUBLIC_TOKEN,
         version: 'published',
         localAssets: true,
       
      
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-responsive-iframe`,
          `gatsby-remark-embed-video`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/*': [  
            // 'Access-Control-Allow-Origin: *',
            'Content-Security-Policy: frame-ancestors https://app.storyblok.com/',
            // 'X-Frame-Options: allow-from https://sunglo-storyblok.netlify.app/',
            // 'X-XSS-Protection: 0',
          ],
        },
      },
    },
    
    
  ],
}