import React from 'react';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import MealsReducer from './slices/MealsSlice';
import CategoriesReducer from './slices/CategoriesSlice';
import UserReducer from './slices/UserSlice';

const rootReducer = {
  categories: CategoriesReducer,
  meals: MealsReducer,
  user: UserReducer,
};

const middleware = [...getDefaultMiddleware(), thunk, logger];

// Create a store with our reducer
export const store = configureStore({
  reducer: rootReducer,
  middleware,
  // devTools: process.env.NODE_ENV !== 'production',
});

