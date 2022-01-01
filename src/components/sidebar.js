import React, { Component } from 'react';
import {
    ListGroup, ListGroupItem
} from 'reactstrap';
import { graphql, StaticQuery, Link } from "gatsby";

class Sidebar extends React.Component {
    render() {
        const { categoryData } = this.props;
    return (
        <div className="sidebarItems">
            <div className="p-3 noticeArea">
                <h5 className="cardTitle mb-0 pb-2">NOTICE</h5>
                <hr className="hr mb-2"/>
                <p className="cardDescription">www.findsomereviews.com is a site which will provide you  reviews of various type of products. Before writing a product review, We are doing a research. By purchasing products using the links and the ads provided by our website may earn the owner of this website some kind of a affiliate commission. But It will never effect to your price.</p>
            </div>
            <div className="categoriesArea mt-2 p-3">
                <h5 className="cardTitle mb-0 pb-2">CATEGORIES</h5>
                <hr className="hr"/>
                <ListGroup className="categoryMain">
                {categoryData.wordPress.articleCategories.nodes.map((category, i) => (
                    <ListGroupItem className="categoryItem" tag="button" action><span uk-icon="icon: triangle-right" className="icon"></span><Link to={`/category/${category.slug}`}> {category.name}</Link></ListGroupItem>
                  ))}
                </ListGroup>
            </div>
        </div>
    );
  }
}


export default props => (
    <StaticQuery
        query={graphql
          `
          query {
            wordPress {
                articleCategories {
                  nodes {
                    articleCategoryId
                    name
                    slug
                  }
                }
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
              }
          }
        `    
        }
        render={( data ) => <Sidebar categoryData={data} {...props} />}
    />
);