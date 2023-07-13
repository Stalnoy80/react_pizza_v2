import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchInputText: '',
  activeMenuState: 0,
  currentPage: 1,
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
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setSearchInputText(state, action) {
      state.searchInputText = action.payload;
    },
    setFilters(state, action) {
      state.currentPage = Number(action.payload.currentPage);
      state.sort.sortProp = action.payload.sort;
      state.activeMenuState = Number(action.payload.activeMenuState);
    },
  },
});

export const filterSelector = (state) => state.filterSlice;

export const filterSort = (state) => state.filterSlice.sort;

export const { setCategoryId, setSort, setCurrentPage, setFilters, setSearchInputText } =
  filterSlice.actions;

export default filterSlice.reducer;
