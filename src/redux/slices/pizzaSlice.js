import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk('pizzaSlice/fetchPizzasStatus', async (params) => {
  const { categories, search, selectedSortItem, currentPage } = params;
  const { data } = await axios.get(
    `https://cc584a630fdf932d.mokky.ru/pizzas?${categories}${search}&sortBy=${selectedSortItem.sortProp}&page=${currentPage}&limit=4`,
  );
  return data;
});

const initialState = {
  items: [],
  status: 'loading', // loading, success, error
};

const pizzaSlice = createSlice({
  name: 'pizzaSlice',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.items = [];
      state.status = 'loading';
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.status = 'success';
      state.items = action.payload.items;
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = 'error';
      state.items = [];
    });
  },
});

export const pizzaSelector = (state) => state.pizzaSlice;

export const setItems = pizzaSlice.actions;

export default pizzaSlice.reducer;
