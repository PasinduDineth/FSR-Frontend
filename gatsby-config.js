module.exports = {
  siteMetadata: {
    siteUrl: `https://www.findsomereviews.com`,
  },
    plugins: [
        // {
        //     resolve: "gatsby-source-strapi",
        //     options: {
        //       apiURL: process.env.API_URL || "http://localhost:1337",
        //       contentTypes: ["article", "category", "writer"],
        //       singleTypes: [`homepage`, `global`],
        //       queryLimit: 1000,
        //     },
        //   },
        // {
        //   resolve: "gatsby-source-graphql",
        //   options: {
        //     // Arbitrary name for the remote schema Query type
        //     typeName: "WordPress",
        //     // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        //     fieldName: "wordPress",
        //     // Url to query from
        //     url: "https://strapi.findsomereviews.com/graphql",
        //   }
        // }
        {
          /**
           * First up is the WordPress source plugin that connects Gatsby
           * to your WordPress site.
           *
           * visit the plugin docs to learn more
           * https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/README.md
           *
           */
          resolve: `gatsby-source-wordpress`,
          options: {
            // the only required plugin option for WordPress is the GraphQL url.
            url:
              process.env.WPGRAPHQL_URL ||
              `https://strapi.findsomereviews.com/graphql`,
          },
        },
          "gatsby-plugin-image",
          "gatsby-transformer-sharp",
          "gatsby-plugin-sharp",
          "gatsby-plugin-sass",
          "gatsby-plugin-sitemap",
          "gatsby-plugin-react-helmet",
          "gatsby-plugin-htaccess",
          {
            resolve: 'gatsby-plugin-htaccess',
            options: {
              https: true
            }
          },
          {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
              host: 'https://www.findsomereviews.com',
              sitemap: 'https://www.findsomereviews.com/sitemap/sitemap-index.xml',
              policy: [{ userAgent: '*', allow: '/' }]
            }
          },
          {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
              // You can add multiple tracking ids and a pageview event will be fired for all of them.
              trackingIds: [
                "G-XTEPE04D0M", // Google Analytics / GA
              ],
              // This object is used for configuration specific to this plugin
              pluginConfig: {
                // Puts tracking script in the head instead of the body
                head: true
              },
            },
          },
          {
            resolve: 'gatsby-plugin-mailchimp',
            options: {
                endpoint: 'https://findsomereviews.us6.list-manage.com/subscribe/post?u=c211477d0d2d318cf0fa1bb0d&amp;id=1d8b0df253', // string; add your MC list endpoint here; see instructions below
                timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
            }
          },
          {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `images`,
              path: `${__dirname}/src/images`,
            },
          }
    ]
}