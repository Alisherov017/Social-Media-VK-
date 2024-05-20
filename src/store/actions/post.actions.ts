import { createAsyncThunk } from "@reduxjs/toolkit";
import { $axios } from "../../pages/helpers/axios";
import { FormDatas } from "../../types";
export {};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      //
      const { data } = await $axios.get(`/posts/${window.location.search}`);
      return data.results;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async ({
    product,
    navigate,
  }: {
    product: FormDatas;
    navigate: (path: string) => void;
  }) => {
    const formData = new FormData();
    formData.append("title", product.title);
    formData.append("description", product.description);
    formData.append("image", product.image!);
    try {
      //
      await $axios.post("/posts/", formData);
      navigate("/");
    } catch (error) {
      console.log("Error in addProduct:", error);
    }
  }
);
