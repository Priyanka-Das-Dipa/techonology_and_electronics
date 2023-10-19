import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/Home";

import ErrorPage from "./components/pages/ErrorPage";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import Root from "./root/Root";
import AddProduct from "./components/addProduct/AddProduct";
import MyCart from "./components/myCart/MyCart";
import BrandDetail from "./components/pages/Branddetails";
import AuthProvider from "./provider/AuthProvider";
import PrivateRoute from "./root/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("phonesBrand.json"),
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },

      {
        path: "/myCart",
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
      },
      {
        path: "/brand/:id",
        element: (
          <PrivateRoute>
            <BrandDetail></BrandDetail>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
