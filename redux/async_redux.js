const { createStore, applyMiddleware } = require("redux");

const thunk = require("redux-thunk").default;
const axios = require("axios");

const FETCH_USER_REQUESTED = "FETCH_USER_REQUESTED";
const FETCH_USER_SUCCEED = "FETCH_USER_SUCCEED";
const FETCH_USER_ERROR = "FETCH_USER_ERROR";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const fetchUserRequest = () => {
  return {
    type: "FETCH_USER_REQUESTED",
  };
};
const fetchUserSuccess = (payload) => {
  return {
    type: FETCH_USER_SUCCEED,
    payload: payload,
  };
};

const fetchUserError = (payload) => {
  return {
    type: FETCH_USER_ERROR,
    payload: payload,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCEED:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };

    case FETCH_USER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

const fetchUser = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const users = res.data.map((user) => user.id);
        dispatch(fetchUserSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUserError(error.message));
      });
  };
};

const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchUser());
