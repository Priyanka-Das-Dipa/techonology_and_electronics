import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/pages/Home';
import AddProduct from './components/pages/AddProduct';
import ErrorPage from './components/pages/ErrorPage';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import Root from './root/Root';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=>fetch('phonesBrand.json')
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>
      },{
        path: "/login",
        element: <Login></Login>
      },{
        path: "/signup",
        element: <SignUp></SignUp>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
