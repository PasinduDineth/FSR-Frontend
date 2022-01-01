import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout";
import JumbotronArtical from "../components/jumbotronArticlePage";
import Sidebar from "../components/sidebar";
import ArticleContent from "../components/articleContent";
import SingleArticleContent from "../components/singleArticleContent";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss'

export default function BlogPost({ data }) {
    const { allWpArticle } = data;
    const { nodes } = allWpArticle;
    const seo = {
        metaTitle: nodes.title,
        metaDescription: nodes.description,
        shareImage: nodes[0].article.articleImage.sourceUrl,
        article: true,
    };
    return (
        <Layout seo={seo}>
            <div>
                <JumbotronArtical data="Test"/>
                <div className="articalMain">
                    <div className="articalSection">
                        {nodes[0].article.isArticleContainSingleProduct ? <SingleArticleContent article={nodes[0]}/> :<ArticleContent article={nodes[0]} />}
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
  query ArticleQuery($slug: String!) {
        allWpArticle(filter: {slug: {eq: $slug}}) {
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
`
