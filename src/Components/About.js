import React from "react";
import { Jumbotron, Button, Form } from "reactstrap";
import Footer from "./Footer";
import { Modal } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Newsletter Signup
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="form-group">
            <label for="exampleInputName1">Full Name</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputName1"
              aria-describedby="emailHelp"
              placeholder="Enter first and last name"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={props.onHide}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const About = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <React.Fragment>
      <Jumbotron className="jumbotron2" fluid>
        <div className="container">
          <div className="row">
            <div className="col content-holder">
              <h1 className="about-header animate__animated animate__backInDown ">
                About Us
              </h1>
            </div>
          </div>
        </div>
      </Jumbotron>
      <Jumbotron className="jumboAbout" fluid>
        <div className="divAbout">
          <h2 className="animate__animated animate__bounce">
            Indulge Your Senses
          </h2>
          <div className="animate__animated animate__bounce">
            Indulgent Fest was created to showcase chefs and food creators to
            the public. People who love to eat have the opportunity to engage
            with creative food curators, sample food and drinks, and purchase
            items. People who come to Indulgent Fest have come to expect
            absolute bliss from our wildly impressive chefs from all over the
            country.
          </div>
        </div>
        <br />
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Newsletter Signup
        </Button>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Jumbotron>

      <Footer />
    </React.Fragment>
  );
};

export default About;
