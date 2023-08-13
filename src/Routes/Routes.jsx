import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Comics from "../Pages/Comics/Comics";

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
      ]
    },
  ]);

  export default router;