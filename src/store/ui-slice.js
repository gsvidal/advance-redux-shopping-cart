import { createSlice } from '@reduxjs/toolkit';

const initialUIState = {
  isCartOpen: true,
  notification: null,
  isInitialLoading: true,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialUIState,
  reducers: {
    toggleCart(state) {
      state.isCartOpen = !state.isCartOpen;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    setInitialValue(state) {
      state.isInitialLoading = false;
    },
  },
});

export default uiSlice.reducer;

export const uiActions = uiSlice.actions;
