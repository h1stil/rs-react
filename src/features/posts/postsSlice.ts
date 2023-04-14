import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    value: [],
  },
  reducers: {
    createPost: (state, action) => {
      state.value.concat(action.payload);
    },
  },
});

export const { createPost } = postsSlice.actions;

export default postsSlice.reducer;
