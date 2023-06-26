import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeMenuState: 0,

  sort: {
    title: 'популярности',
    sortProp: 'rating',
  },
};

const filterSlice = createSlice({
  name: 'filterSlices',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      console.log(action);
      state.activeMenuState = action.payload;
    },
  },
});

export const { setCategoryId } = filterSlice.actions;

export default filterSlice.reducer;
