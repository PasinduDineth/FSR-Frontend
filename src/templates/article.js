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
    const article = data.strapiArticle;
    const seo = {
        metaTitle: article.title,
        metaDescription: article.description,
        shareImage: article.image,
        article: true,
    };
    return (
        <Layout seo={seo}>
            <div>
                <JumbotronArtical data="Test"/>
                <div className="articalMain">
                    <div className="articalSection">
                        {article.SingleProduct ? <SingleArticleContent article={article}/> :<ArticleContent article={article} />}
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
    strapiArticle(slug: { eq: $slug }, status: { eq: "published" }) {
      strapiId
      title
      description
      content
      publishedAt
      SingleProduct
      SeoTags
      products {
        Description
        Name
        productImage
        ButtonLink
        id
        Features {
          id
          FeatureName
          FeatureData
        }
        Cons {
          Cons
          id
        }
        Pros {
          Pros
          id
        }
        AdSlot
        Question {
          QuestionText
          Answer
          id
        }
      }
      image {
        publicURL
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
        }
      }
      category {
        name
      }
      author {
        name
        picture {
          childImageSharp {
            gatsbyImageData(width: 30)
          }
        }
      }
    }
  }
`
