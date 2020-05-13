import * as actionTypes from "./actionTypes";
import axios from "../../axios-burger";

export const orderSuccess = (id, orderData) => {
  return {
    type: actionTypes.ORDER_PURCHASE_SUCCCESS,
    orderId: id,
    orderData: orderData,
  };
};

export const orderFailed = (orderData) => {
  return {
    type: actionTypes.ORDER_PURCHASE_FAILED,
    orderData: orderData,
  };
};

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    };
};

export const orderStart = (orderData) => {
  return (dispatch) => {
    dispatch( purchaseBurgerStart() );
    axios
      .post("/orders.json", orderData)
      .then((response) => {
        dispatch(orderSuccess(response.data.name, orderData));
      })
      .catch((error) => {
        dispatch(orderFailed(error));
      });
  };
};

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    };
};

export const fetchOrdersSuccess = ( orders ) => {
  return {
      type: actionTypes.FETCH_ORDERS_SUCCESS,
      orders: orders
  };
};

export const fetchOrdersFail = ( error ) => {
  return {
      type: actionTypes.FETCH_ORDERS_FAIL,
      error: error
  };
};

export const fetchOrdersStart = () => {
  return {
      type: actionTypes.FETCH_ORDERS_START
  };
};

export const fetchOrders = () => {
  return dispatch => {
      dispatch(fetchOrdersStart());
      axios.get( '/orders.json' )
          .then( res => {
              const fetchedOrders = [];
              for ( let key in res.data ) {
                  fetchedOrders.push( {
                      ...res.data[key],
                      id: key
                  } );
              }
              dispatch(fetchOrdersSuccess(fetchedOrders));
          } )
          .catch( err => {
              dispatch(fetchOrdersFail(err));
          } );
  };
};
