import React from "react";
import Markdown from "react-markdown";
import Moment from "react-moment";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { Badge } from 'reactstrap';
const _ = require('lodash');

const ArticalContent = ({ article }) => {
  const { name } = article.articleCategories.nodes[0]
  console.log("single", article)
  return (
    <div className="articalReadSectionMain p-4">
        <div>
            <p className="articalCategory">{name}</p>
            <h1 className="articalNameHeaderText">{article.title}</h1>
            <p className="articalDate"><Moment format="MMM Do YYYY">{article.published_at}</Moment></p>
            <GatsbyImage
                      className="articalImage"
                      image={article.article.articleImage.localFile.childImageSharp.gatsbyImageData}
                      alt={article.title}
                    />
        </div>
        {
          article.article.products.map((prod,i) => {
            return (
              <>
              {
                prod.products.productImage &&
                <div className="mt-4" dangerouslySetInnerHTML={{__html: prod.products.productImage}}></div>
              }
              <Markdown source={prod.content} escapeHtml={false} />
              <hr/>
              <div className="prosconsMain">
                {prod.products.pros.length !== 0 &&
                  <div className="propsSection">
                    <h4 className="prosTitle mb-2">Pros</h4>
                    {prod.products.pros.map(pro => {
                      return (
                        <p className="proconItem"><span uk-icon="icon: triangle-right" className="proListIcon"></span> {pro.proContent}</p>
                      )})
                    }
                  </div>
                }
                {prod.products.cons.length !== 0 &&
                  <div className="consSection">
                    <h4 className="consTitle mb-2">Cons</h4>
                    {prod.products.cons.map(con => {
                      return (
                        <p className="proconItem"><span uk-icon="icon: triangle-right" className="icon"></span> {con.conContent}</p>
                      )})
                    }
                  </div>
                }
              </div>
              <hr/>
              <div className="questionMain mt-2">
                {prod.products.features.length !== 0 &&
                    <div className="consSection">
                      <h4 className="consTitle mb-3">Features</h4>
                      {prod.products.features.map(q => {
                        return (
                          <>
                          <p className="proconItem"><b>{q.feature.featureName}</b></p>
                          <p className="answerText mt-0">{q.feature.featureData}</p>
                          </>
                        )})
                      }
                    </div>
                  }
              </div>
              <hr/>
              <div className="questionMain mt-2">
                {prod.products.questionsList.length !== 0 &&
                    <div className="consSection">
                      <h4 className="consTitle mb-3">FAQ</h4>
                      {prod.products.questionsList.map(qa => {
                        return (
                          <div className="specificationListMain">
                            <div className="SpecNameWrapper">
                              <p className="SpecName">{qa.question.questionText}</p>
                            </div>
                            <div className="specificationDataWrapper">
                              <p className="specData">{qa.question.answer}</p>
                            </div>
                          </div>
                        )})
                      }
                    </div>
                  }
              </div>
              {
                prod.products.adSlot &&
                  <div className="iframe">
                    <iframe frameborder="0"
                        width="100%"
                        marginheight="0"
                        marginwidth="0"
                        scrolling="no"
                        srcdoc= {'<html> <head>'+ prod.products.adSlot + '</head></html>'}></iframe>
                  </div>
              }
              <hr/>
              {
                prod.products.buttonLink &&
                <>
                <a href={prod.products.buttonLink} class="btn buyAmazon mt-3">BUY ON AMAZON</a>
                {/* <hr style={{color:"#313131", height:2}}/> */}
                </>
              }
              </>
            )
          })
        }
        <Markdown source={article.content} escapeHtml={false} />
        {article.article.seoTags !== null &&
          <>
            <hr className="mt-0 mb-0 mt-3"/>
            <h3 className="extraTags mt-3">Extra Tags</h3>
            <div className="mt-2">
              {article.article.seoTags.split(',').map(el=> {
                return (<Link to={`/tag/${_.kebabCase(el)}`}><Badge className="tag m-1">{el}</Badge></Link>)
              })}
            </div>
          </>
        }
    </div>
  );
};

export default ArticalContent;

