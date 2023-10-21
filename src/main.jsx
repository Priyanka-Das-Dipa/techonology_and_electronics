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
import AuthProvider from "./provider/AuthProvider";
import PrivateRoute from "./root/PrivateRoute";
import BrandItems from "./components/pages/BrandItems";
import UpdateProduct from "./components/UpdateProduct";
import BrandDetail from "./components/pages/Branddetails";

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
        element: (
          <PrivateRoute>
            <MyCart ></MyCart>
          </PrivateRoute>
        ),
      },
      {
        path: "/brand/:brandName",
        element: (
          <PrivateRoute>
            {" "}
            <BrandItems />
          </PrivateRoute>
        ),
      },
      {
        path: "/brand/:brandName/:id",
        element: (
          <PrivateRoute>
            <BrandDetail></BrandDetail>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) =>
          fetch(
            `https://technology-and-electronics-server-dun.vercel.app/iPhone/${params.id}`
          ),
      }
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
