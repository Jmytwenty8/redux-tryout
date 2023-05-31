import { createSlice } from "@reduxjs/toolkit";
// import { ordered as cakeOrdered } from "../cake/cakeSlice";

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
  //   extraReducers: {
  //     ["cake/ordered"]: (state) => {
  //       state.numOfIceCreams--;
  //     },
  //   },
  // extraReducers: (builder) => {
  //   builder.addCase(cakeOrdered, (state) => {
  //     state.numOfIceCreams--;
  //   });
  // },
});

export default iceCreamSlice.reducer;
export const { ordered, restocked } = iceCreamSlice.actions;
