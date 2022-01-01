const _ = require('lodash');
const path = require("path")

exports.onCreateWebpackConfig = ({
    actions,
    plugins,
    stage
  }) => {
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
    if (stage === 'build-javascript' || stage === 'develop') {
      actions.setWebpackConfig({
        plugins: [
          plugins.provide({ process: 'process/browser' })
        ]
      })
    }
  }

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // fetching articles from WP
  const articlesResult = await graphql(
    `
    {
      allWpArticle {
        nodes {
          title
          id
          link
          slug
        }
      }
    }
    `
  )
  // fetching category from WP
  const categoryResult = await graphql(
    `
    query MyQuery {
      allWpArticleCategory {
        nodes {
          name
          slug
          id
        }
      }
    }
    `
  )

  // fetching tags from WP
  const tagsResult = await graphql(
    `{
      allWpArticle {
        nodes {
          article {
            seoTags
          }
        }
      }
  }
    `
  )
  
  // // checking erros
  // if (articlesResult.errors || categoryResult.errors || tagsResult.errors) {
  //   reporter.panicOnBuild(`Error while running GraphQL query.`)
  //   return
  // }

  // creating article pages
  const blogPostTemplate = path.resolve(`src/templates/article.js`)
  articlesResult.data.allWpArticle.nodes.forEach(( node ) => {
    createPage({
      path: `/review/${node.slug}`,
      component: blogPostTemplate,
      context: {
        slug: node.slug,
      },
    })
  })

  // creating category pages
  const categoryTemplate = path.resolve(`src/templates/category.js`)
  categoryResult.data.allWpArticleCategory.nodes.forEach((node ) => {
    createPage({
      path: `/category/${node.slug}`,
      component: categoryTemplate,
      context: {
        slug: node.slug,
      },
    })
  })

  // creating custom tag pages
  const tagTemplate = path.resolve(`src/templates/tag.js`)
  let tags = []
  tagsResult.data.allWpArticle.nodes.forEach(({ article }) => {
    article.seoTags && article.seoTags.split(',').map(el=> {
      tags.push(el.trim())
    })
  })
  _.uniq(tags).forEach((tag) => {
    createPage({
      path: `/tag/${_.kebabCase(tag)}`,
      component: tagTemplate,
      context: {
        name: "\/".concat(tag).concat("\/"),
      },
    })
  })
}
  