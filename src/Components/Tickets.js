import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import { Jumbotron, UncontrolledCollapse, Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';
import Footer from './Footer';
import { connect } from 'react-redux';
import { addBasket } from '../Components/actions/addAction'


const Tickets = (props) => {
    console.log(props);
    return (
      <React.Fragment>
        <Jumbotron className="TicketJumbo">
          <div>
            <Card>
              <CardTitle className="ticket-head">Ticket Options</CardTitle>
            </Card>
          </div>
          <br />
          <div className="row">
            <div className="col-md-6">
            <Card>
              <CardTitle className="TicketsTitle">General Admission</CardTitle>
              <CardBody>
                <ul>
                  <li>
                     This ticket gives you access to the Indulgent Fest on either Saturday or Sunday starting at noon.
                  </li>
                </ul>
              </CardBody>
            </Card>
            </div>
            <div className="col-md-6">
            <Card>
              <CardTitle className="TicketsTitle">VIP Admission</CardTitle>
              <ul>
                <li>
                  This ticket includes first access to the Indulgent Fest starting at 10am on either Saturday or Sunday.
                </li>
                <li>
                  The special VIP hour from 10-11AM includes samples, cocktail sips, and a gift bag for shopping that is already filled with a few fun food treats.
                </li>
                <li>
                  VIP is limited to 800 people in that exclusive hour, meaning shorter lines, smaller crowds, and more time for you and your friends to INDULGE!
                </li>
              </ul>
              <CardBody></CardBody>
            </Card>
            </div>
          </div>
          <div className="TicketContainer">
            <Card className="TicketCard">
              <h3>General <br />Admission</h3>
              <h3>$50</h3>
              <a onClick = {props.addBasket} className="addToCart cart1" href="#">Add to Cart</a>
            </Card>
            <Card className="TicketCard">
              <h3>VIP<br />Admission</h3>
              <h3>$80</h3>
              <a onClick = {props.addBasket} className="addToCart cart2" href="#">Add to Cart</a>
            </Card>
          </div>
        </Jumbotron>
        <Footer />
      </React.Fragment>
    );
}

export default connect(null, { addBasket })(Tickets);