require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `nullui`,
    titleTemplate: `nullui - Frontend Developer and Designer`,
    description: `Doing my part to make the web a more beautiful and inclusive place for everyone.`,
    author: `Sam Tancharoensuksavai`,
    url: "https://www.nullui.co",
    image: "/images/thumbnail@2x.png",
    twitterUsername: "@null_ui",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
  ],
}
