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
        <Layout>
            <div>
                <JumbotronCategoryPage data={pageContext.name.replace(/[^a-zA-Z,.!?\d\s:]/gi, '')} />
                <div className="articalMain">
                    <div className="articalSection">
                        <ArticlesComponent articles={data.allStrapiArticle.edges} />
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
    allStrapiArticle(filter: {SeoTags: {regex: $name}}) {
        edges {
          node {
            strapiId
            slug
            title
            description
            category {
              name
            }
            image {
              childImageSharp {
                gatsbyImageData(width: 800, height: 500)
              }
            }
            author {
              name
              picture {
                childImageSharp {
                  gatsbyImageData(width: 30, height: 30)
                }
              }
            }
          }
        }
      }
  }
`
