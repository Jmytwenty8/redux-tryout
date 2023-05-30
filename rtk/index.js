const store = require("./app/store");
const { cakeActions } = require("./features/cake/cakeSlice");

store.subscribe(() => console.log(store.getState()));
store.dispatch(cakeActions.ordered(5));
store.dispatch(cakeActions.restocked(20));
