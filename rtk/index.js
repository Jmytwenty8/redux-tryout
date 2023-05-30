const store = require("./app/store");
const { cakeActions } = require("./features/cake/cakeSlice");
const { iceCreamActions } = require("./features/iceCream/iceCreamSlice");

// store.subscribe(() => console.log(store.getState()));
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(20));

store.dispatch(iceCreamActions.restocked(2));
store.dispatch(iceCreamActions.ordered());
