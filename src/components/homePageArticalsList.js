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
        {articles.nodes.map((article, i) => {
              return (
                <div className="item" key={article.id}>
                  <Card className="card">
                    <GatsbyImage
                      className="cardImage"
                      alt={article.title}
                      image={article.article.articleImage}
                    />
                    {article.article.offerText &&
                      <div className="card-img-overlay specialOfferContainer">
                          <Badge className="tag specialOffer m-1 animate__animated animate__bounceIn">{article.article.offerText}</Badge>
                      </div>
                    }
                    <CardBody>
                      <CardTitle tag="h5" className="cardTitle">{article.title}</CardTitle>
                      <CardSubtitle tag="h6" className="cardSubTitle">{article.articleCategories.nodes[0].name}</CardSubtitle>
                      <CardText className="cardDescription mb-2 limitLinesDescription">{article.article.description}</CardText>
                      <Link to={`/review/${article.slug}`} className="uk-link-reset"><button className="moreButton">VIEW MORE</button></Link>
                    </CardBody>
                  </Card>
                </div>
              );
            })}
    </div>
  );
};

export default HomePageArticalsList;
