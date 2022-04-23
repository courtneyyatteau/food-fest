import React, { useEffect } from "react";
import { Navbar, NavDropdown, Container, Nav, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { getNumbers } from "./actions/getAction";

function Navigation(props) {
  useEffect(() => {
    getNumbers();
  }, []);

  return (
    <React.Fragment>
      <Navbar bg="light" sticky="top" expand="lg" className="navbar-dark">
        <Container className="container">
          <Navbar.Brand href="#home" className="navPic1">
            <Card>
              <div className="navPic2"></div>
            </Card>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link className="navLink" to="/">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="navLink" to="/about">
                  About
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="navLink" to="/tickets">
                  Tickets
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="navLink" to="/faq">
                  FAQ
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="navLink">
                  <i className="fa fa-shopping-cart">
                    Cart <span>({props.basketProps.basketNumbers})</span>
                  </i>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps, { getNumbers })(Navigation);
