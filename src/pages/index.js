import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import ArticlesComponent from "../components/homePageArticalsList";
import JumbotronSection from "../components/jumbotron";
import Sidebar from "../components/sidebar";
import "../styles/main.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

// @Todo Categories, Tags, Images, Multiple products, sidebar

const IndexPage = () => {
  const data = useStaticQuery(query);
  return (
    <Layout seo={data}>
        <div>
          <JumbotronSection/>
          <div className="articalMain">
              <div className="articalSection">
                <ArticlesComponent articles={data.wordPress.articles} />
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
  wordPress {
    pages {
      edges {
        node {
          basicSettings {
            fieldGroupName
            siteTitle
            heroTitle
            siteMetaDescription
            favicon {
              link
            }
          }
        }
      }
    }
    articles {
      nodes {
        title
        articleCategories {
          nodes {
            articleCategoryId
            name
          }
        }
        id
        slug
        articleId
        content
        date
        status
        uri
        article {
          description
          offerText
          articleImage {
            id
            link
          }
          fieldGroupName
          isArticleContainSingleProduct
          postSlug
          products {
            ... on WordPress_Product {
              id
              content
              date
              slug
              title
              productId
              products {
                adSlot
                buttonLink
                fieldGroupName
                productImage
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
            }
          }
          publishDate
          seoTags
        }
      }
    }
  }
}
  
`;

export default IndexPage;
