import React from "react";
import Markdown from "react-markdown";
import Moment from "react-moment";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { Badge } from 'reactstrap';
const _ = require('lodash');

const ArticalContent = ({ article }) => {
  return (
    <div className="articalReadSectionMain p-4">
        <div>
            <p className="articalCategory">{article.category.name}</p>
            <h1 className="articalNameHeaderText">{article.title}</h1>
            <p className="articalDate"><Moment format="MMM Do YYYY">{article.published_at}</Moment></p>
            <GatsbyImage
                      className="articalImage"
                      image={article.image.childImageSharp.gatsbyImageData}
                      alt={article.title}
                    />
        </div>
        {
          article.products.map((prod,i) => {
            return (
              <>
              <h3 className="prodcutName mt-3">{i+1}. {prod.Name}</h3>
              {
                prod.productImage &&
                <div className="mt-4" dangerouslySetInnerHTML={{__html: prod.productImage}}></div>
              }
              <Markdown source={prod.Description} escapeHtml={false} />
              <div className="prosconsMain">
                {prod.Pros.length !== 0 &&
                  <div className="propsSection">
                    <h4 className="prosTitle mb-2">Pros</h4>
                    {prod.Pros.map(pro => {
                      return (
                        <p className="proconItem"><span uk-icon="icon: triangle-right" className="proListIcon"></span> {pro.Pros}</p>
                      )})
                    }
                  </div>
                }
                {prod.Cons.length !== 0 &&
                  <div className="consSection">
                    <h4 className="consTitle mb-2">Cons</h4>
                    {prod.Cons.map(con => {
                      return (
                        <p className="proconItem"><span uk-icon="icon: triangle-right" className="icon"></span> {con.Cons}</p>
                      )})
                    }
                  </div>
                }
              </div>
              {/* <div className="questionMain mt-4">
              {prod.Question.length !== 0 &&
                  <div className="consSection">
                    <h4 className="consTitle mb-2">Questions & Answers</h4>
                    {prod.Question.map(q => {
                      return (
                        <>
                        <p className="proconItem"><span uk-icon="icon: triangle-right" className="icon"></span><b>{q.QuestionText}</b></p>
                        <p className="answerText mt-0"><span uk-icon="icon: triangle-right" className="iconAnswer"></span>{q.Answer}</p>
                        </>
                      )})
                    }
                  </div>
                }
              </div> */}
              {
                prod.AdSlot &&
                  <div className="iframe">
                    <iframe frameborder="0"
                        width="100%"
                        marginheight="0"
                        marginwidth="0"
                        scrolling="no"
                        // srcdoc= {'<html> <head>'+ '<script type="text/javascript">amzn_assoc_tracking_id = "pasivlogs-20";amzn_assoc_ad_mode = "manual";amzn_assoc_ad_type = "smart";amzn_assoc_marketplace = "amazon";amzn_assoc_region = "US";amzn_assoc_design = "enhanced_links";amzn_assoc_asins = "B01FHQVY8I";amzn_assoc_placement = "adunit";amzn_assoc_linkid = "a78fec0687e87ab0784d3471affe96a4";</script><script src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US"></script>' + '</head></html>'}></iframe>
                        srcdoc= {'<html> <head>'+ prod.AdSlot + '</head></html>'}></iframe>
                  </div>
              }
              {
                prod.ButtonLink &&
                <>
                <a href={prod.ButtonLink} class="btn buyAmazon mt-2">BUY ON AMAZON</a>
                <hr style={{color:"#313131", height:2}}/>
                </>
              }
              </>
            )
          })
        }
        <Markdown source={article.content} escapeHtml={false} />
        {article.SeoTags !== null &&
          <>
            <hr className="mt-0 mb-0"/>
            <h3 className="extraTags">Extra Tags</h3>
            <div className="mt-2">
              {article.SeoTags.split(',').map(el=> {
                return (<Link to={`/tag/${_.kebabCase(el)}`}><Badge className="tag m-1">{el}</Badge></Link>)
              })}
            </div>
          </>
        }
    </div>
  );
};

export default ArticalContent;

