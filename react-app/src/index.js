import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AddPet from "./components/AddPet";
import Home from "./components/Home";

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
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "/add-pet",
    element: <AddPet/>
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);