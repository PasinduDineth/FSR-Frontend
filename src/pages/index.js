import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import ArticlesComponent from "../components/homePageArticalsList";
import JumbotronSection from "../components/jumbotron";
import Sidebar from "../components/sidebar";
import "../styles/main.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

// @Todo Multiple products

const IndexPage = () => {
  const data = useStaticQuery(query);
  return (
    <Layout seo={data}>
        <div>
          <JumbotronSection/>
          <div className="articalMain">
              <div className="articalSection">
                <ArticlesComponent articles={data.allWpArticle.nodes} page="HOME" />
              </div>
              <div className="sidebarSection">
                <Sidebar />
              </div>
          </div>
        </div>
    </Layout>
  );
};

const query = graphql`
query {
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
  allWpArticle {
    nodes {
      title
      article {
        description
        fieldGroupName
        isArticleContainSingleProduct
        offerText
        postSlug
        products {
          ... on WpProduct {
            id
            content
            link
            slug
            title
            products {
              adSlot
              buttonLink
              cons {
                conContent
                fieldGroupName
              }
              features {
                fieldGroupName
                feature {
                  featureData
                  featureName
                  fieldGroupName
                }
              }
              fieldGroupName
              productImage
              pros {
                fieldGroupName
                proContent
              }
              questionsList {
                fieldGroupName
                question {
                  answer
                  fieldGroupName
                  questionText
                }
              }
              specifications {
                fieldGroupName
                specification
              }
            }
            status
          }
        }
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
          id
          name
          slug
        }
      }
      id
      link
      slug
      content
    }
  }
}
  
`;

export default IndexPage;
