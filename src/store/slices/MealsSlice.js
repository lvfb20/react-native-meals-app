import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {MealTarget} from 'src/networking';

export const MealsThunks = {
  fetchMeals: (categoryId) => {
    return fetchMeals(categoryId);
  },
};

//Async actions
const fetchMeals = createAsyncThunk('meals/fetchMeals', async (categoryId) => {
  return await MealTarget.getMeals(categoryId);
});

const MealsSlice = createSlice({
  name: 'meals',
  initialState: {
    meals: [],
    error: null,
    favorites: [],
    filters: {
      glutenFree: false,
      vegan: false,
      lactoseFree: false,
      vegetarian: false,
    },
  },
  reducers: {
    applyFilters(state, action) {
      state.filters = action.payload;
    },
  },
  extraReducers: {
    [fetchMeals.fulfilled]: (state, action) => {
      state.error = null;
      const meals = action.payload;
      const filteredMeals = meals.filter((meal) => {
        if (state.filters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (state.filters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (state.filters.vegetarian && !meal.isVegetarian) {
          return false;
        }
        if (state.filters.vegan && !meal.isVegan) {
          return false;
        }
        return true;
      });
      state.meals = filteredMeals;
    },
    [fetchMeals.rejected]: (state, action) => {
      state.meals = [];
      state.error = action.error;
    },
  },
});

export const {applyFilters} = MealsSlice.actions;
export default MealsSlice.reducer;
