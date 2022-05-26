const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;

const CAKE_ORDER = "CAKE_ORDER";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICE_CREAM_ORDER = "ICE_CREAM_ORDER";
const ICE_CREAM_RESTOCKED = "ICE_CREAM_RESTOCKED";

function orderCake() {
  return {
    type: CAKE_ORDER,
    payload: 1,
  };
}

function restockCake(quantity = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: quantity,
  };
}

function orderIceCream(quantity = 1) {
  return {
    type: ICE_CREAM_ORDER,
    payload: quantity,
  };
}

function restockIceCream(quantity = 1) {
  return {
    type: ICE_CREAM_RESTOCKED,
    payload: quantity,
  };
}

// const initialState = {
//   numberOfCakes: 10,
//   numberOfIceCreams: 20,
// };

const initialCakeState = {
  numberOfCakes: 10,
};

const initialIceCreamState = {
  numberOfIceCreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDER:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICE_CREAM_ORDER:
      return {
        ...state,
        numberOfIceCream: state.numberOfIceCreams - 1,
      };
    case ICE_CREAM_RESTOCKED:
      return {
        ...state,
        numberOfIceCream: state.numberOfIceCreams + action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer);
console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("update state", store.getState())
);

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restoreCake(3));

const actions = bindActionCreators(
  { orderCake, restockCake, orderIceCream, restockIceCream },
  store.dispatch
);

actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(3);
actions.orderIceCream();
actions.orderIceCream();
actions.restockIceCream(2);

unsubscribe();
