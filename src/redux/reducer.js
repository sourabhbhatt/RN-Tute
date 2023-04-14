import {combineReducers} from 'redux';
import userSlice from './slice/userSlice';

export const rootReducer = combineReducers({
  user: userSlice,
});
