import { createSlice } from '@reduxjs/toolkit';
import { IFormCard } from 'utils/types';

export const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    createPost: (state: IFormCard[], action) => {
      state.push(action.payload);
    },
  },
});

export const { createPost } = postsSlice.actions;
export const postReducer = postsSlice.reducer;

export default postsSlice.reducer;
