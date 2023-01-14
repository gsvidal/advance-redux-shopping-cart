import { createSlice } from '@reduxjs/toolkit';

const initialUIState = { isCartOpen: true };

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialUIState,
  reducers: {
    toggleCart(state) {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export default uiSlice.reducer;

export const uiActions = uiSlice.actions;
