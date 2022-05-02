import React from "react";
import { Button, Jumbotron } from "reactstrap";
import Footer from "./Footer";
import { Accordion, Card } from "react-bootstrap";

const Faq = (props) => {
  return (
    <React.Fragment>
      <Jumbotron className="jumbotron3" fluid>
        <div className="container">
          <div className="row">
            <div className="col content-holder">
              <h1 className="about-header animate__animated animate__backInDown ">
                FAQ
              </h1>
            </div>
          </div>
        </div>
      </Jumbotron>
      <h3>Frequently Asked Questions</h3>
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle
              className="first-image animate__animated animate__fadeInUp"
              as={Button}
              variant="link"
              eventKey="0"
            >
              When and where is this event?
            </Accordion.Toggle>
          </Card.Header>

          <Accordion.Collapse
            className="first-image animate__animated animate__fadeIn"
            eventKey="0"
          >
            <Card.Body>
              This event takes place in Fake City, Fake State at the Fake Plaza
              on Fake Street. The event will be on Saturday, FakeMonth 10th from
              noon-6pm.
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle
              className="second-image animate__animated animate__fadeInUp"
              as={Button}
              variant="link"
              eventKey="1"
            >
              What do I get for the price of admission?
            </Accordion.Toggle>
          </Card.Header>

          <Accordion.Collapse
            className="first-image animate__animated animate__fadeIn"
            eventKey="1"
          >
            <Card.Body>
              Admission gets you entrance into our indulgent marketplace, where
              you will have access to various samples, foods, and beverages,
              plus you will be able to purchase a wonderful selection of
              products from our 50+ vendors.
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle
              className="third-image animate__animated animate__fadeInUp"
              as={Button}
              variant="link"
              eventKey="2"
            >
              Is there parking available at the event?
            </Accordion.Toggle>
          </Card.Header>

          <Accordion.Collapse
            className="first-image animate__animated animate__fadeIn"
            eventKey="2"
          >
            <Card.Body>
              Yes! There are two parking garages withing 0.2 miles from Fake
              Plaza. One is just off of Faker Street and the other is just off
              of West Fake Drive.
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle
              className="fourth-image animate__animated animate__fadeInUp"
              as={Button}
              variant="link"
              eventKey="3"
            >
              Will tickets be sold at the door?
            </Accordion.Toggle>
          </Card.Header>

          <Accordion.Collapse
            className="first-image animate__animated animate__fadeIn"
            eventKey="3"
          >
            <Card.Body>
              Yes, but they will be on a limited first come first serve basis.
              There is a limited amount of tickets sold day-of to make the
              experience pleasurable for all attendees. It's recommended you
              purchase tickets ahead of time online.
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle
              className="fifth-image animate__animated animate__fadeInUp"
              as={Button}
              variant="link"
              eventKey="4"
            >
              Are children welcome to this event?
            </Accordion.Toggle>
          </Card.Header>

          <Accordion.Collapse
            className="first-image animate__animated animate__fadeIn"
            eventKey="4"
          >
            <Card.Body>Yes. Children under the age of 10 are free!</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <Footer />
    </React.Fragment>
  );
};

export default Faq;
