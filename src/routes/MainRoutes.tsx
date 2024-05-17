import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import Error from "../ErrorPage/Error";
import NotFountPage from "../notFoundPage/NotFountPage";
import RegisterPage from "../pages/auth/registor/RegisterPage";
import LoginPage from "../pages/auth/login/LoginPage";
import HomePage from "../pages/HomePage/HomePage";
import Photo from "../pages/photoPage/Photo";
import EditedPage from "../pages/HomePage/editedHome/EditedPage";

export const router = createBrowserRouter([
  {
    id: "root",
    errorElement: <Error />,
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "*", element: <NotFountPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/photo", element: <Photo /> },
      { path: "/register", element: <RegisterPage /> },
      { path: "/editHome", element: <EditedPage /> },
    ],
  },
]);
