import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addItem(state, action) {
      // state.items.push(action.payload);
      // state.totalPrice = state.items.reduce((sum, obj) => {
      //   return obj.price + sum;
      // }, 0);

      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },

    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if (findItem) {
        findItem.count--;
      }
    },

    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearItems, minusItem } = cartSlice.actions;

export const cartSelectorState = (id, state) => (state) =>
  state.cartSlice.items.find((obj) => obj.id === id);

export const cartSelector = (state) => state.cartSlice;

export default cartSlice.reducer;
