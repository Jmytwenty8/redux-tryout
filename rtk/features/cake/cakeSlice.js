const { createSlice } = require("@reduxjs/toolkit");

const cakeSlice = createSlice({
  name: "cake",
  initialState: {
    numOfCakes: 10,
  },
  reducers: {
    ordered: (state, action) => {
      const payload = action.payload || 1;
      state.numOfCakes -= payload;
    },
    restocked: (state, action) => {
      const payload = action.payload || 1;
      state.numOfCakes += payload;
    },
  },
});

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
