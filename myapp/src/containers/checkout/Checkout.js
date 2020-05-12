import React, { Component } from "react";
import CheckoutSummary from "../../components/order/checkoutSummary/CheckoutSummary";
import { Route } from "react-router-dom";
import ContactData from "./contactData/ContactData";
import { connect } from "react-redux";

class Checkout extends Component {
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.props.ingredients}
          cancelled={this.checkoutCancelledHandler}
          continued={this.checkoutContinuedHandler}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          component={ContactData}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
  };
};

export default connect(mapStateToProps)(Checkout);
