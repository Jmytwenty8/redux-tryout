const { createSlice } = require("@reduxjs/toolkit");

const cakeSlice = createSlice({
  name: "cake",
  initialState: {
    numOfCakes: 10,
  },
  reducers: {
    ordered: (state, action = 1) => {
      state.numOfCakes -= action.payload;
    },
    restocked: (state, action = 1) => {
      state.numOfCakes += action.payload;
    },
  },
});

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
