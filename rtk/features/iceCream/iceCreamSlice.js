const { createSlice } = require("@reduxjs/toolkit");

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState: {
    numOfIceCreams: 10,
  },
  reducers: {
    ordered: (state, action = 1) => {
      state.numOfIceCreams -= action.payload;
    },
    restocked: (state, action = 1) => {
      state.numOfIceCreams += action.payload;
    },
  },
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
