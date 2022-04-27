import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getNumbers } from "./actions/getAction";

function Cart(props) {
  useEffect(() => {
    getNumbers();
  }, []);
  return (
    <div>
      <p>Total Tickets: {props.basketProps.basketNumbers} </p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps, { getNumbers })(Cart);
