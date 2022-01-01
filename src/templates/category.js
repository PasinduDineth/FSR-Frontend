import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout";
import JumbotronCategoryPage from "../components/jumbotronCategoryPage";
import Sidebar from "../components/sidebar";
import ArticlesComponent from "../components/homePageArticalsList";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss'

export default function CategoryPage({data}) {
    return (
        <Layout seo={data}>
            <div>
                <JumbotronCategoryPage data={data.allWpArticle.nodes[0].articleCategories.nodes[0].name} />
                <div className="articalMain">
                    <div className="articalSection">
                        <ArticlesComponent articles={data.allWpArticle.nodes} />
                    </div>
                    <div className="sidebarSection">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </Layout>
    );
  }
  export const query = graphql`
  query Category($slug: String!) {
    allWpArticle(
      filter: {articleCategories: {nodes: {elemMatch: {slug: {eq: $slug}}}}}
    ) {
      nodes {
        title
        slug
        article {
          description
          fieldGroupName
          isArticleContainSingleProduct
          offerText
          postSlug
          publishDate
          seoTags
          articleImage {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
            altText
            description
            id
            slug
            title
          }
        }
        articleCategories {
          nodes {
            name
            slug
          }
        }
      }
    }
    allWpPage {
        nodes {
          basicSettings {
            fieldGroupName
            heroTitle
            siteMetaDescription
            siteTitle
            favicon {
              link
            }
          }
        }
      }
  }
`
