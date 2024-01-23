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
import Adopt from "./components/Adopt";

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
  },
  {
    path: "/adopt",
    element: <Adopt/>
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);