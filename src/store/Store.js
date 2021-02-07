import React from 'react';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import MealsSlice from './slices/MealsSlice';
import CategoriesReducer from './slices/CategoriesSlice';

const rootReducer = {
  categories: CategoriesReducer,
  meals: MealsSlice,
};

const middleware = [...getDefaultMiddleware(), thunk, logger];

// Create a store with our reducer
export const store = configureStore({
  reducer: rootReducer,
  middleware,
  // devTools: process.env.NODE_ENV !== 'production',
});

