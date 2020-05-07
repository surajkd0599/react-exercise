import React, { Component } from "react";
import Aux from "../../../hoc/Aux/aux";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {

  componentDidUpdate(){
    console.log('[OrderSummary] DidUpdate')
  }

  render(){
    const ingredientSummary = Object.keys(this.props.ingredients).map((igKey) => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
          {this.props.ingredients[igKey]}
        </li>
      );
    });
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>
          <strong>Total price is: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>A delicious burger with following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>Continue to checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </Aux>
    );
  };
  }
  

export default OrderSummary;
