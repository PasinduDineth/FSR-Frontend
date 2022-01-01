import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout";
import JumbotronCategoryPage from "../components/jumbotronCategoryPage";
import Sidebar from "../components/sidebar";
import ArticlesComponent from "../components/homePageArticalsList";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss'

export default function CategoryPage({ data, pageContext }) {
    return (
        <Layout seo={data}>
            <div>
                <JumbotronCategoryPage data={pageContext.name.replace(/[^a-zA-Z,.!?\d\s:]/gi, '')} />
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
  query TagQuery($name: String!) {
    allWpArticle(filter: {article: {seoTags: {regex: $name}}}) {
        nodes {
          title
          article {
            description
            fieldGroupName
            isArticleContainSingleProduct
            postSlug
            offerText
            seoTags
            articleImage {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
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
          content
          slug
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
