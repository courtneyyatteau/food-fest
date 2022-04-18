import React, { Component, useEffect } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Button,
  Card,
  CardBody,
} from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import { cleanup, render } from "@testing-library/react";
import { connect } from "react-redux";
import { getNumbers } from "./actions/getAction";

function Navigation(props) {
  useEffect(() => {
    getNumbers();
  }, []);

  return (
    <React.Fragment>
      <Nav navbar className="navItems">
        <Navbar expand="lg" dark sticky="top" variant="light">
          <div className="container">
            <NavbarBrand className="navPic1">
              <Card>
                <CardBody className="navPic2"></CardBody>
              </Card>
            </NavbarBrand>
            <NavbarToggler />
            <NavItem>
              <Link className="navLink" to="/">
                Home{" "}
              </Link>
            </NavItem>
            <NavItem>
              <Link className="navLink" to="/about">
                About
              </Link>
            </NavItem>
            <NavItem>
              <Link className="navLink" to="/tickets">
                Tickets
              </Link>
            </NavItem>
            <NavItem>
              <Link className="navLink" to="/faq">
                FAQ
              </Link>
            </NavItem>
            <NavItem>
              <Link className="navLink">
                <i className="fa fa-shopping-cart">
                  {" "}
                  Cart <span>({props.basketProps.basketNumbers})</span>
                </i>
              </Link>
            </NavItem>
          </div>
        </Navbar>
      </Nav>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps, { getNumbers })(Navigation);
