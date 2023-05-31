import { createSlice } from "@reduxjs/toolkit";

const cakeSlice = createSlice({
  name: "cake",
  initialState: {
    numOfCakes: 10,
  },
  reducers: {
    ordered: (state, action) => {
      const payload = parseInt(action.payload) || 1;
      state.numOfCakes -= payload;
    },
    restocked: (state, action) => {
      const payload = parseInt(action.payload) || 1;
      state.numOfCakes += payload;
    },
  },
});

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
