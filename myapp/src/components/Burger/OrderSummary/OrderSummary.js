import React, {  useEffect } from "react";
import Aux from "../../../hoc/Aux/aux";
import Button from "../../UI/Button/Button";

const OrderSummary = props => {

  useEffect(() => {
    console.log('[OrderSummary] DidUpdate')
  },[])

    const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
          {props.ingredients[igKey]}
        </li>
      );
    });
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>
          <strong>Total price is: {props.price.toFixed(2)}</strong>
        </p>
        <p>A delicious burger with following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>Continue to checkout?</p>
        <Button btnType="Danger" clicked={props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={props.purchaseContinued}>
          CONTINUE
        </Button>
      </Aux>
    );
  };

export default OrderSummary;
