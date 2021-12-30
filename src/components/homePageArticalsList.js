import React from "react";
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Badge } from 'reactstrap';
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import "../styles/main.scss";
import 'bootstrap/dist/css/bootstrap.min.css';


const HomePageArticalsList = ({ articles }) => {
  return (
    <div className="container mt-3">
        {articles.map((article, i) => {
              return (
                <div className="item">
                  <Card className="card">
                    <GatsbyImage
                      className="cardImage"
                      alt={article.node.title}
                      image={article.node.image.childImageSharp.gatsbyImageData}
                    />
                    {article.node.OfferText &&
                      <div class="card-img-overlay specialOfferContainer">
                          <Badge className="tag specialOffer m-1 animate__animated animate__bounceIn">{article.node.OfferText}</Badge>
                      </div>
                    }
                    <CardBody>
                      <CardTitle tag="h5" className="cardTitle">{article.node.title}</CardTitle>
                      <CardSubtitle tag="h6" className="cardSubTitle">{article.node.category.name}</CardSubtitle>
                      <CardText className="cardDescription mb-2 limitLinesDescription">{article.node.description}</CardText>
                      <Link to={`/review/${article.node.slug}`} className="uk-link-reset"><button className="moreButton">VIEW MORE</button></Link>
                    </CardBody>
                  </Card>
                </div>
              );
            })}
    </div>
  );
};

export default HomePageArticalsList;
