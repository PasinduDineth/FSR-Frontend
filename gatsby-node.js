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
  const articlesResult = await graphql(
    `
  {
    allStrapiArticle {
      edges {
        node {
          id
          slug
        }
      }
    }
  }
    `
  )
  const categoryResult = await graphql(
    `
  {
    allStrapiCategory {
      edges {
        node {
          slug
          name
        }
      }
    }
  }
    `
  )

  const tagsResult = await graphql(
    `{
    allStrapiArticle {
      edges {
        node {
          SeoTags
        }
      }
    }
  }
    `
  )
  
  if (articlesResult.errors || categoryResult.errors || tagsResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  const blogPostTemplate = path.resolve(`src/templates/article.js`)
  articlesResult.data.allStrapiArticle.edges.forEach(({ node }) => {
    createPage({
      path: `/review/${node.slug}`,
      component: blogPostTemplate,
      context: {
        slug: node.slug,
      },
    })
  })
  const categoryTemplate = path.resolve(`src/templates/category.js`)
  categoryResult.data.allStrapiCategory.edges.forEach(({ node }) => {
    createPage({
      path: `/category/${node.slug}`,
      component: categoryTemplate,
      context: {
        slug: node.slug,
      },
    })
  })
  const tagTemplate = path.resolve(`src/templates/tag.js`)
  let tags = []
  tagsResult.data.allStrapiArticle.edges.forEach(({ node }) => {
    node.SeoTags && node.SeoTags.split(',').map(el=> {
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
  