import { configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "./slices/user.slice";
import { productsSlice } from "./slices/product.slice";

export const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
    products: productsSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
