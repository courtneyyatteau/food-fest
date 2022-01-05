import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Jumbotron, Button } from 'reactstrap';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import Footer from './Footer';
 
const home = () => {
    return (
        <React.Fragment>
            <Jumbotron className="jumbotron1" fluid>
                <div className="container">
                    <div className="row">
                        <div className="col content-holder">
                            <h1>Indulgent Fest</h1>
                            <h3>Extravagent Food and Drink Festival</h3>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            <div>
                <h2>Eat.Drink.Shop.Relax.</h2>
                <p>Grab your friends and come indulge in some of the best foods from around the country.</p>
            </div>
            <div className="row">
                <Card className="col-md-4">
                    <CardBody className>
                        <CardImg className="cardImage"></CardImg>
                        <Link to="/about"><Button className="cardBtn"><CardText>About</CardText></Button></Link>
                    </CardBody>
                </Card>
                <Card className="col-md-4">
                    <CardBody>
                        <CardImg className="cardImage2"></CardImg>
                        <Link to="/tickets"><Button className="cardBtn"><CardText>Buy Tickets</CardText></Button></Link>
                    </CardBody>
                </Card>
                <Card className="col-md-4">
                    <CardBody>
                        <CardImg className="cardImage3"></CardImg>
                        <Link to="/faq"><Button className="cardBtn"><CardText>FAQ</CardText></Button></Link>
                    </CardBody>
                </Card>
            </div>
            <Footer />
        </React.Fragment>
    );
}
 
export default home;