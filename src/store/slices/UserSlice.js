import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {UserTarget} from 'src/networking';

export const UserThunks = {
  login: (values) => {
    return login(values);
  },
};

//Async actions
const login = createAsyncThunk('users/login', async (values) => {
  return await UserTarget.login(values);
});

const UserSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      console.log("LOGIN_FULFILLED");
      console.log(action.payload);
      
      if (action.payload.error) {
        state.user = null;
        state.error = action.payload.error;
      } else {
        state.user = action.payload;
        state.error = null;
      }
    },
    [login.rejected]: (state, action) => {
      state.user = null;
      state.error = action.error;
    },
  },
});

export const {} = UserSlice.actions;
export default UserSlice.reducer;
