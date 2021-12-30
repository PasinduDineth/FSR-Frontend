import React from "react";
import { Jumbotron, Container } from 'reactstrap';
const JumbotronSection = ({ data }) => {
  return (
    <Jumbotron fluid className="jumbotronArticalMain">
        <Container fluid className="jumboContainer pt-2 pb-1">
          <h2 className="articalHeaderText">FIND SOME REVIEWS</h2>
          <h4 className="headerSubText">WWW.FINDSOMEREVIEWS.COM</h4>
        </Container>
    </Jumbotron>
  );
};

export default JumbotronSection;

