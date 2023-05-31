import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  numOfCakes: number;
};

const initialState: initialStateType = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,

  reducers: {
    ordered: (state, action: PayloadAction<number>) => {
      const payload = Number(action.payload) || 1;
      state.numOfCakes -= payload;
    },

    restocked: (state, action: PayloadAction<number>) => {
      const payload = Number(action.payload) || 1;
      state.numOfCakes = state.numOfCakes + payload;
    },
  },
});

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
