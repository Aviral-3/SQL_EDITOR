
import { createSlice } from '@reduxjs/toolkit';

export const someFeatureSlice = createSlice({
  name: 'someFeature',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = someFeatureSlice.actions;

export default someFeatureSlice.reducer;
