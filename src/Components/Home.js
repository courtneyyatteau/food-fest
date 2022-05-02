import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Jumbotron,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "animate.css";

const home = () => {
  return (
    <React.Fragment>
      <Jumbotron className="jumbotron1" fluid>
        <div className="container">
          <div className="row">
            <div className="col content-holder">
              <h1 className="animate__animated animate__backInDown home-header">
                Indulgent Fest
              </h1>
              <h3 className="home-h3">Extravagent Food and Drink Festival</h3>
            </div>
          </div>
        </div>
      </Jumbotron>
      <div>
        <h2>Eat.Drink.Shop.Relax.</h2>
        <p>
          Grab your friends and come indulge in some of the best foods from
          around the country.
        </p>
      </div>
      <div className="row">
        <Card className="col-md-4 first-image animate__animated animate__fadeInUp">
          <CardBody>
            <CardImg className="cardImage"></CardImg>
            <Link to="/about">
              <Button className="cardBtn">
                <CardText>About</CardText>
              </Button>
            </Link>
          </CardBody>
        </Card>
        <Card className="col-md-4 second-image animate__animated animate__fadeInUp">
          <CardBody>
            <CardImg className="cardImage2"></CardImg>
            <Link to="/tickets">
              <Button className="cardBtn">
                <CardText>Buy Tickets</CardText>
              </Button>
            </Link>
          </CardBody>
        </Card>
        <Card className="col-md-4 third-image animate__animated animate__fadeInUp">
          <CardBody>
            <CardImg className="cardImage3"></CardImg>
            <Link to="/faq">
              <Button className="cardBtn">
                <CardText>FAQ</CardText>
              </Button>
            </Link>
          </CardBody>
        </Card>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default home;
