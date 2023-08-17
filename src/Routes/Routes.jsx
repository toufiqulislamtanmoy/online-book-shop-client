import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Comics from "../Pages/Comics/Comics";
import Login from "../Pages/Authentication/Login";
import Signup from "../Pages/Authentication/Signup";
import PrivetRoute from "./PrivetRoute";
import Dashboard from "../Layout/Dashboard";
import BrowBookRequestList from "../Pages/AdminPanel/BrowBookRequestList/BrowBookRequestList";
import AddBooks from "../Pages/AdminPanel/AddBooks/AddBooks";
import CollectBooks from "../Pages/AdminPanel/CollectBook/CollectBooks";

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
    {
      path: "/dashboard",
      element: <PrivetRoute><Dashboard /></PrivetRoute>,
      children: [
          {
              path: "requestforbook",
              element: <BrowBookRequestList />
          },
          {
              path: "addbook",
              element: <AddBooks />
          },
          {
              path: "collectbook",
              element: <CollectBooks />
          },

      ]

  }
  ]);

  export default router;