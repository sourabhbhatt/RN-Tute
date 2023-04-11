import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  token: null,
  userDetail: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  //reducers: action creators
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUserDetail: (state, action) => {
      state.userDetail = action.payload;
    },
    logOut: state => {
      state.token = null;
      state.userDetail = null;
    },
  },
});

export const {setToken, setUserDetail, logOut} = userSlice.actions;
export default userSlice.reducer;
