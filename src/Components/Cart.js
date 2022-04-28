import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getNumbers } from "./actions/getAction";
import { getGaNumbers } from "./actions/getGaAction";
import { getVipNumbers } from "./actions/getVipAction";
import { emptyBasket } from "./actions/emptyBasketAction";
import { emptyGaBasket } from "./actions/emptyGaBasket";
import { emptyVipBasket } from "./actions/emptyVipBasket";

import { Card, CardText, CardTitle, Button } from "reactstrap";

function Cart(props) {
  useEffect(() => {
    getNumbers();
    getGaNumbers();
    getVipNumbers();
  }, []);

  const handleClick = () => {
    props.emptyBasket();
    props.emptyGaBasket();
    props.emptyVipBasket();
  };

  return (
    <Card body className="cartStuff">
      <h1 className="cart-header">Shopping Cart</h1>
      <br />
      <CardText>Total Tickets: {props.basketProps.basketNumbers} </CardText>
      <CardText>GA Tickets: {props.gaProps.gaNumbers}</CardText>
      <CardText>VIP Tickets: {props.vipProps.vipNumbers}</CardText>
      <Button className="cartButton" onClick={handleClick}>
        Empty Cart
      </Button>
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
  emptyBasket,
  emptyGaBasket,
  emptyVipBasket,
})(Cart);
