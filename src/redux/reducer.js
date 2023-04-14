import {combineReducers} from 'redux';
import userSlice from './slice/userSlice';
import postsSlice from './slice/postsSlice';

export const rootReducer = combineReducers({
  user: userSlice,
  posts: postsSlice,
});
