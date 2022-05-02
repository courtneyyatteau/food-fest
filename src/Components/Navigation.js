import React, { useEffect } from "react";
import { Navbar, Nav, OverlayTrigger, Button, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { getNumbers } from "./actions/getAction";
import { getGaNumbers } from "./actions/getGaAction";
import { getVipNumbers } from "./actions/getVipAction";

function Navigation(props) {
  useEffect(() => {
    getNumbers();
    getGaNumbers();
    getVipNumbers();
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
        <Navbar.Brand href="#home" className="navPic1">
          <Nav.Link as={Link} to="/">
            <div className="navPic2"></div>
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
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
            <Link>
              <Nav.Link
                as={Link}
                className="navLink-cart"
                to="/cart"
                href="/cart"
              >
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={
                    <Tooltip id="button-tooltip" {...props}>
                      <div>GA Tickets: {props.gaProps.gaNumbers}</div>
                      <div>VIP Tickets: {props.vipProps.vipNumbers}</div>
                      <div>
                        Total Tickets: {props.basketProps.basketNumbers}
                      </div>
                    </Tooltip>
                  }
                >
                  <i className="fa fa-shopping-cart">
                    Cart <span>({props.basketProps.basketNumbers})</span>
                  </i>
                </OverlayTrigger>
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
  gaProps: state.gaState,
  vipProps: state.vipState,
});

export default connect(mapStateToProps, {
  getNumbers,
  getGaNumbers,
  getVipNumbers,
})(Navigation);
