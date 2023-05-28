const { createStore, bindActionCreators, combineReducers } = require("redux");

// const createStore = redux.createStore;
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICE_CREAM_ORDERED = "ICE_CREAM_ORDERED";
const ICE_CREAM_RESTOCKED = "ICE_CREAM_RESTOCKED";

const orderCake = (payload = 1) => {
  return {
    type: CAKE_ORDERED,
    payload: payload,
  };
};

const restockCake = (payload = 1) => {
  return {
    type: CAKE_RESTOCKED,
    payload: payload,
  };
};

const orderIceCream = (payload = 1) => {
  return {
    type: ICE_CREAM_ORDERED,
    payload: payload,
  };
};

const restockIceCream = (payload = 1) => {
  return {
    type: ICE_CREAM_RESTOCKED,
    payload: payload,
  };
};

const cakeInitialState = {
  numOfCakes: 10,
};

const iceCreamInitialState = {
  numOfIceCreams: 20,
};

const cakeReducer = (state = cakeInitialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = iceCreamInitialState, action) => {
  switch (action.type) {
    case ICE_CREAM_ORDERED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - action.payload,
      };
    case ICE_CREAM_RESTOCKED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + action.payload,
      };

    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    iceCream: iceCreamReducer,
    cake: cakeReducer,
  })
);
// console.log("Initial state", store.getState());
store.subscribe(() => console.log("updated state", store.getState()));
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(4));

const action = bindActionCreators(
  { orderCake, restockCake, orderIceCream, restockIceCream },
  store.dispatch
);
action.orderCake(4);
action.restockCake(2);
action.orderIceCream(3);
action.restockIceCream(2);
