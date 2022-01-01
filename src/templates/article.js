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
    const { wordPress } = data;
    const { articleBy } = wordPress;
    const seo = {
        metaTitle: articleBy.title,
        metaDescription: articleBy.description,
        shareImage: articleBy.article.articleImage.sourceUrl,
        article: true,
    };
    return (
        <Layout seo={seo}>
            <div>
                <JumbotronArtical data="Test"/>
                <div className="articalMain">
                    <div className="articalSection">
                        {articleBy.article.isArticleContainSingleProduct ? <SingleArticleContent article={articleBy}/> :<ArticleContent article={articleBy} />}
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
    wordPress {
        articleBy(slug: $slug) {
            articleCategories {
                nodes {
                  articleCategoryId
                  name
                }
              }
            articleId
            content
            date
            link
            id
            article {
              description
              fieldGroupName
              isArticleContainSingleProduct
              offerText
              postSlug
              products {
                ... on WordPress_Product {
                  id
                  content
                  productId
                  title
                  slug
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
                      feature {
                        featureData
                        featureName
                        fieldGroupName
                      }
                      fieldGroupName
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
              articleImage {
                altText
                authorId
                description
                id
                link
                sourceUrl
              }
              publishDate
              seoTags
            }
            title
        }
      }
  }
`
