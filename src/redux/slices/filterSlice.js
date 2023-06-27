import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeMenuState: 0,

  sort: {
    title: 'популярности',
    sortProp: 'rating',
  },
};

const filterSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.activeMenuState = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
  },
});

export const { setCategoryId, setSort } = filterSlice.actions;

export default filterSlice.reducer;
