const { createSlice } = require("@reduxjs/toolkit");

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState: {
    numOfIceCreams: 10,
  },
  reducers: {
    ordered: (state, action) => {
      const payload = action.payload || 1;
      state.numOfIceCreams -= payload;
    },
    restocked: (state, action) => {
      const payload = action.payload || 1;
      state.numOfIceCreams += payload;
    },
  },
  extraReducers: {
    ["cake/ordered"]: (state) => {
      state.numOfIceCreams--;
    },
  },
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
