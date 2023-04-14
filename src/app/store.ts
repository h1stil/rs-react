import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/search/searchSlice';
import postsReducer from '../features/posts/postsSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    posts: postsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
