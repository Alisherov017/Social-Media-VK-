import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginValues, ProfileType, RegisterValues } from "../../types";
import { $axios } from "../../pages/helpers/axios";
import { setError } from "../slices/user.slice";

export const registerUser = createAsyncThunk(
  "users/registerUser",
  async (
    {
      data,
      navigate,
    }: { data: RegisterValues; navigate: (path: string) => void },
    { dispatch }
  ) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("password_confirm", data.password_confirm);
    try {
      console.log("Отправка данных на сервер:", formData);
      await $axios.post("/account/register/", formData);
      navigate("/");
      dispatch(setError(null));
    } catch (error: any) {
      console.log("Ошибка при регистрации:", error.response.data);
      dispatch(setError(Object.values(error.response.data).flat(2)[0]));
    }
  }
);

export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (
    { data, navigate }: { data: LoginValues; navigate: (path: string) => void },
    { dispatch }
  ) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    try {
      console.log("Отправка данных на сервер:", formData);
      const { data } = await $axios.post("/account/login/", formData);
      localStorage.setItem("tokens", JSON.stringify(data));
      dispatch(getCurrentUser());
      navigate("/editHome");
      dispatch(setError(null));
    } catch (error: any) {
      console.log("Ошибка при входе:", error.response.data);
      dispatch(setError(Object.values(error.response.data).flat(2)[0]));
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "users/getCurrentUser",
  async () => {
    try {
      const { data } = await $axios.get<ProfileType>("/account/profile/");
      return data;
    } catch (error) {
      console.log("Ошибка при получении текущего пользователя:", error);
    }
  }
);

export const changeProfile = createAsyncThunk(
  "user/changeProfile",
  async (
    { id, formData }: { id: string | number; formData: ProfileType },
    { dispatch }
  ) => {
    try {
      await $axios.put("/account/profile/", formData);
      dispatch(getCurrentUser());
    } catch (error) {
      console.log("Ошибка при изменении профиля:", error);
    }
  }
);
