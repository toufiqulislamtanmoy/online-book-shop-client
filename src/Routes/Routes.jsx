import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Comics from "../Pages/Comics/Comics";
import Login from "../Pages/Authentication/Login";
import Signup from "../Pages/Authentication/Signup";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/comics",
            element: <Comics/>
        },
        {
            path: "/signin",
            element: <Login/>
        },
        {
            path: "/signup",
            element: <Signup/>
        },
      ]
    },
  ]);

  export default router;