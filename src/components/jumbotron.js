import React from "react";
import { Jumbotron, Container } from 'reactstrap';
import Swal from "sweetalert2";
import addToMailchimp from 'gatsby-plugin-mailchimp'

const onClickNewsletter = () => {
  Swal.fire({
    title: 'NEWSLETTER',  
      type: 'success',  
      text: 'Enter your email to join with our newsletter.',
      input: 'email',
      confirmButtonText: "Add to list",
      confirmButtonClass: 'buyAmazon'
  }).then(email => {
    if(email.isConfirmed) {
      addToMailchimp(email.value) // listFields are optional if you are only capturing the email address.
      .then(data => {
        console.log(data)
        Swal.fire({
        title: data.result.toUpperCase(),
        type: data.result,
        html: data.msg
        })
      })
      .catch(() => {
        Swal.fire({
          title: "Oops..",
          type: "error",
          text: "Something went wrong! Please try again later.",
        })
      })
    }})
}
const JumbotronSection = ({ data }) => {
  return (
    <Jumbotron fluid className="jumbotronMain">
        <Container fluid className="jumboContainer pt-2 pb-4">
          <h1 className="headerText">FIND SOME REVIEWS</h1>
          <h4 className="headerSubText">WWW.FINDSOMEREVIEWS.COM</h4>
          <button className="button" onClick={onClickNewsletter}>NEWSLETTER</button>
        </Container>
    </Jumbotron>
  );
};

export default JumbotronSection;

