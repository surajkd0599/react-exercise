import React, { useState, useEffect } from "react";
import Aux from "../../hoc/Aux/aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-burger";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { connect, useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions/index";

export const BurgerBuilder = (props) => {
  const [purchasing, setPurchasing] = useState(false);

  const dispatch = useDispatch();

  const ingredients = useSelector((state) => state.burger.ingredients);
  const totalPrice = useSelector((state) => state.burger.totalPrice);
  const error = useSelector((state) => state.burger.error);
  const isAuthenticated = useSelector((state) => state.auth.token !== null);

  const onIngredientAdded = (ingredientName) =>
    dispatch(actions.addIngredient(ingredientName));
  const onIngredientRemoved = (ingredientName) =>
    dispatch(actions.removeIngredient(ingredientName));
  const onInitIngredients = () => dispatch(actions.initIngredients());
  const onInitPurchase = () => dispatch(actions.purchaseInit());
  const onAuthRedirect = (path) => dispatch(actions.authRedirect(path));

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
    if (isAuthenticated) {
      setPurchasing(true);
    } else {
      onAuthRedirect("/checkout");
      props.history.push("/auth");
    }
  };

  const cancelPurchaseHandler = () => {
    setPurchasing(false);
  };

  const purchaseContinued = () => {
    //alert("You continued!");
    onInitPurchase();
    props.history.push("/checkout");
  };

  useEffect(() => {
    console.log("[Burger Builder Mount]");
    onInitIngredients();
  }, [onInitIngredients]);

  const disabledInfo = {
    ...ingredients,
  };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }

  let orderSummary = null;

  let burger = error ? <p>Ingredients can't be loaded</p> : <Spinner />;

  if (ingredients) {
    burger = (
      <Aux>
        <Burger ingredients={ingredients} />
        <div>
          <BuildControls
            ingredientAdded={onIngredientAdded}
            ingredientRemoved={onIngredientRemoved}
            disabled={disabledInfo}
            purchasable={updatePurchasable(ingredients)}
            price={totalPrice}
            isAuth={isAuthenticated}
            ordered={purchaseHandler}
          />
        </div>
      </Aux>
    );

    orderSummary = (
      <OrderSummary
        ingredients={ingredients}
        purchaseCancelled={cancelPurchaseHandler}
        purchaseContinued={purchaseContinued}
        price={totalPrice}
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

export default withErrorHandler(BurgerBuilder, axios);
