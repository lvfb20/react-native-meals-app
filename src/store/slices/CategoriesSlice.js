import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CategoryTarget } from 'src/networking';

export const CategoriesThunks = {
    fetchCategories: () => {
    return fetchCategories();
  }
};

//Async actions
const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    return await CategoryTarget.getCategories()
  },
);

const CategoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchCategories.fulfilled]: (state, action) => {
      state.categories = action.payload;
      state.error = null;
    },
    [fetchCategories.rejected]: (state, action) => {
      state.categories = [];
      state.error = action.error;
    },
  },
});

export default CategoriesSlice.reducer;
