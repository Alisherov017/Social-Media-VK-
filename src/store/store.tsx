import { configureStore } from "@reduxjs/toolkit";
// import { usersSlice } from "./slices/users.slice";
// import { productsSlice } from "./slices/products.slice";

export const store = configureStore({
  reducer: {
    // users: userSlice.reducer,
    // products: productSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
