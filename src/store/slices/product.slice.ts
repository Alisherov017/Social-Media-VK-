import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../types";
import { getProducts } from "../actions/post.actions";

type StatesType = {
  products: ProductType[];
  
  loading: boolean;
  favoriteProducts: any;
};

const INIT_STATE: StatesType = {
  products: [],
  loading: false,
  favoriteProducts: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState: INIT_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.products = payload;
        state.loading = false;
      })
      .addCase(getProducts.rejected, (state) => console.log(state));
    //   .addCase(addToFavorites.pending, (state) => console.log(state))
    //   .addCase(addToFavorites.fulfilled, (state) => console.log(state))
    //   .addCase(getFavoriteProducts.pending, (state) => {
    //     state.loading = true;
    //   })
    //   .addCase(getFavoriteProducts.fulfilled, (state, { payload }) => {
    //     state.loading = false;
    //     state.favoriteProducts = payload;
    //   })
    //   .addCase(getFavoriteProducts.rejected, (state) => console.log(state))
    //   .addCase(getCategories.fulfilled, (state, { payload }) => {
    //     state.loading = false;
    //     state.categories = payload;
    //   });
  },
});
