import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getNumbers } from "./actions/getAction";
import { getGaNumbers } from "./actions/getGaAction";
import { getVipNumbers } from "./actions/getVipAction";
import { Card, CardText, CardTitle, Button } from "reactstrap";

function Cart(props) {
  useEffect(() => {
    getNumbers();
    getGaNumbers();
    getVipNumbers();
  }, []);
  return (
    <Card body className="cartStuff">
      <CardTitle>Shopping Cart</CardTitle>
      <CardText>Total Tickets: {props.basketProps.basketNumbers} </CardText>
      <CardText>GA Tickets: {props.gaProps.gaNumbers}</CardText>
      <CardText>VIP Tickets: {props.vipProps.vipNumbers}</CardText>
      <Button className="cartButton">Empty Cart</Button>
    </Card>
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
})(Cart);
