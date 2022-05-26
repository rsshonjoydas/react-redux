const redux = require("redux");
const createStore = redux.createStore;

const CAKE_ORDER = "CAKE_ORDER";

function orderCake() {
  return {
    type: CAKE_ORDER,
    quantity: 1,
  };
}

const initialState = {
  numberOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDER:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("update state", store.getState())
);

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

unsubscribe();
