import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Adopt from "./components/Adopt";
import Product from "./components/Product";
import AddPet from "./components/AddPet";

import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home />),
  },  
  {
    path: "/login",
    element: <Login/> ,
  },  
  {
  path: "/about",
  element: (<AboutUs />),
},
{
  path: "/contact",
  element: (<ContactUs />),
}, 
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "/product",
    element: <Product/>,
  },
  {
    path: "/add-pet",
    element: <AddPet/>
  },
  {
    path: "/adopt",
    element: <Adopt/>
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);