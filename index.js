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
