import React, { useEffect } from "react";
import { Navbar, Container, Nav, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { getNumbers } from "./actions/getAction";

function Navigation(props) {
  useEffect(() => {
    getNumbers();
  }, []);

  return (
    <React.Fragment>
      <Navbar
        bg="dark"
        variant="light"
        fixed="top"
        expand="lg"
        collapseOnSelect
        className="navbar-dark"
      >
        <Container className="container">
          <Navbar.Brand href="#home" className="navPic1">
            <Card>
              <Nav.Link to="/">
                <div className="navPic2"></div>
              </Nav.Link>
            </Card>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} className="navLink" to="/" href="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} className="navLink" to="/about" href="/about">
                About
              </Nav.Link>
              <Nav.Link
                as={Link}
                className="navLink"
                to="/tickets"
                href="/tickets"
              >
                Tickets
              </Nav.Link>
              <Nav.Link as={Link} className="navLink" to="/faq" href="/faq">
                FAQ
              </Nav.Link>
              <Nav.Link className="navLink" to="/cart" href="/cart">
                <i className="fa fa-shopping-cart">
                  Cart <span>({props.basketProps.basketNumbers})</span>
                </i>
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
