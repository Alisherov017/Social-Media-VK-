import axios from "axios";

import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../helpers/Hooks";
import { logout } from "../../store/slices/user.slice";

export const $axios = axios.create();

function HandleLogout() {
  console.log("test");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  dispatch(logout());
  navigate("/login");
}
// jkhkjh

$axios.interceptors.request.use(async (config) => {
  config.baseURL = "http://34.16.165.7/api/v1";

  const tokens = JSON.parse(localStorage.getItem("tokens") as string);
  if (tokens) {
    config.headers.Authorization = `Bearer ${tokens.access}`;
  }
  return config;
});

$axios.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      const tokens = JSON.parse(localStorage.getItem("tokens") as string);
      if (tokens) {
        try {
          const { data } = await $axios.post("/account/refresh/", {
            refresh: tokens.refresh,
          });

          localStorage.setItem(
            "tokens",
            JSON.stringify({ ...tokens, access: data.access })
          );
          return $axios.request(originalRequest);
        } catch (error) {
          console.log("hello", error);
          HandleLogout();
        }
      }
    }
  }
);
