import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

// Define initial state
const initialState = {
  posts: [],
  status: 'idle',
  error: null,
};

// Define thunk for fetching posts from API
export const fetchPosts = createAsyncThunk('myPosts', async () => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
    );
    return response.data;
  } catch (error) {
    throw Error('Failed to fetch posts');
  }
});
/* createAsyncThunk takes two arguments:
    1- A string that represents the name of the thunk action. This is used as a prefix to automatically 
    generate the action types for the pending, fulfilled, and rejected states of the asynchronous action.
    2- An asynchronous function that represents the logic to be executed. This function can contain asynchronous 
    operations, such as making API calls, and it can also dispatch actions using the dispatch parameter 
    provided by Redux Toolkit. */

// Define the posts slice
export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export actions and reducer
export default postsSlice.reducer;
