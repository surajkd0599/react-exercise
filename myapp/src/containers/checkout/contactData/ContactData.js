import React, { Component } from "react";
import classes from "./ContactData.module.css";
import Button from "../../../components/UI/Button/Button";
import axios from "../../../axios-burger";
import { withRouter } from "react-router-dom";
import Spinner from "../../../components/UI/Spinner/Spinner";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = { 
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "ABC",
        mobile: "0000000000",
        address: {
          street: "XYZ",
        },
      },
      deliveryType: "fastest",
    };

    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
      <form>
        <input
          className={classes.Input}
          type="text"
          name="name"
          placeholder="Enter your Name"
        />
        <br />
        <input
          className={classes.Input}
          type="email"
          name="email"
          placeholder="Enter your Email"
        />
        <br />
        <input
          className={classes.Input}
          type="text"
          name="street"
          placeholder="Enter your Street"
        />
        <br />
        <input
          className={classes.Input}
          type="text"
          name="postalCode"
          placeholder="Enter your PostalCode"
        />
        <br />
        <Button btnType="Success" clicked={this.orderHandler}>
          Order
        </Button>
      </form>
    );

    if (this.state.loading) {
      form = <Spinner />;
    }

    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default withRouter(ContactData);
