import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import ArticlesComponent from "../components/homePageArticalsList";
import JumbotronSection from "../components/jumbotron";
import Sidebar from "../components/sidebar";
import "../styles/main.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => {
  const data = useStaticQuery(query);
  return (
    <Layout seo={data.strapiHomepage.seo}>
        <div>
          <JumbotronSection data={data.strapiHomepage.hero.title}/>
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
};

const query = graphql`
  query {
    strapiHomepage {
      hero {
        title
      }
      seo {
        metaTitle
        metaDescription
        shareImage {
          publicURL
        }
      }
    }
    allStrapiArticle(filter: { status: { eq: "published" } }) {
      edges {
        node {
          strapiId
          slug
          title
          description
          OfferText
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
`;

export default IndexPage;
