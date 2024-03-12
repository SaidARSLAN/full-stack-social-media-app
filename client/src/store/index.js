import { configureStore } from '@reduxjs/toolkit'
import user from './user'
import posts from './post'
export const store = configureStore({
  reducer: {
    user,
    posts
  },
})