import React, { useState, useEffect } from "react";
import Aux from "../../hoc/Aux/aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-burger";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

export const BurgerBuilder = (props) => {
  const [purchasing, setPurchasing] = useState(false);

  const updatePurchasable = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, ele) => {
        return sum + ele;
      }, 0);

    return sum > 0;
  };

  const purchaseHandler = () => {
    if (props.isAuthenticated) {
      setPurchasing(true);
    } else {
      props.onAuthRedirect("/checkout");
      props.history.push("/auth");
    }
  };

  const cancelPurchaseHandler = () => {
    setPurchasing(false);
  };

  const purchaseContinued = () => {
    //alert("You continued!");
    props.onInitPurchase();
    props.history.push("/checkout");
  };

  const { onInitIngredients } = props;

  useEffect(() => {
    console.log("[Burger Builder Mount]");
    onInitIngredients();
  }, [onInitIngredients]);

  const disabledInfo = {
    ...props.ingredients,
  };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }

  let orderSummary = null;

  let burger = props.error ? <p>Ingredients can't be loaded</p> : <Spinner />;

  if (props.ingredients) {
    burger = (
      <Aux>
        <Burger ingredients={props.ingredients} />
        <div>
          <BuildControls
            ingredientAdded={props.onIngredientAdded}
            ingredientRemoved={props.onIngredientRemoved}
            disabled={disabledInfo}
            purchasable={updatePurchasable(props.ingredients)}
            price={props.totalPrice}
            isAuth={props.isAuthenticated}
            ordered={purchaseHandler}
          />
        </div>
      </Aux>
    );

    orderSummary = (
      <OrderSummary
        ingredients={props.ingredients}
        purchaseCancelled={cancelPurchaseHandler}
        purchaseContinued={purchaseContinued}
        price={props.totalPrice}
      />
    );
  }

  return (
    <Aux>
      <Modal show={purchasing} modalClosed={cancelPurchaseHandler}>
        {orderSummary}
      </Modal>
      {burger}
    </Aux>
  );
};

const mapStateToProps = (state) => {
  return {
    ingredients: state.burger.ingredients,
    totalPrice: state.burger.totalPrice,
    error: state.burger.error,
    isAuthenticated: state.auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientAdded: (ingredientName) =>
      dispatch(actions.addIngredient(ingredientName)),
    onIngredientRemoved: (ingredientName) =>
      dispatch(actions.removeIngredient(ingredientName)),
    onInitIngredients: () => dispatch(actions.initIngredients()),
    onInitPurchase: () => dispatch(actions.purchaseInit()),
    onAuthRedirect: (path) => dispatch(actions.authRedirect(path)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
