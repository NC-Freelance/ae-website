module.exports = {
  siteMetadata: {
    title: "AeWebsite",
  },
  plugins: [
    "gatsby-plugin-netlify-cms", 
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/Pages`,
      },
    },
    `gatsby-transformer-remark`,  
  ],
};
