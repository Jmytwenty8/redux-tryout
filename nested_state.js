const { createStore } = require("redux");
const { produce } = require("immer");
const nested_state = {
  name: "Rick and Morty",
  address: {
    street: "lubalubalubdub",
    city: "Council of Rick",
    state: "Georgia",
  },
};

const STREET_UPDATED = "STREET_UPDATED";

const updateStreet = (payload) => {
  return {
    type: STREET_UPDATED,
    payload: payload,
  };
};

const reducer = (state = nested_state, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      //   return {
      //     ...state,
      //     address: {
      //       ...state.address,
      //       street: action.payload,
      //     },
      //   };

      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default: {
      return state;
    }
  }
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log("Updated State ", store.getState());
});

store.dispatch(updateStreet("North Carolina"));
