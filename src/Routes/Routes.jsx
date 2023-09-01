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
import Books from "../Pages/Books/Books";
import Magazins from "../Pages/Magazins/Magazins";
import Newspapers from "../Pages/Newspapers/Newspapers";
import BookDetails from "../Pages/BookDetails/BookDetails";
import UserDashboard from "../Layout/UserDashboard";
import MyCart from "../Pages/UserPanel/MyCart/MyCart";
import MyBorrowBooks from "../Pages/UserPanel/MyBorrowBook/MyBorrowBooks";
import Payment from "../Pages/UserPanel/Payments/Payment";
import PaymentHistory from "../Pages/UserPanel/PaymentHistory/PaymentHistory";
import MyFile from "../Pages/UserPanel/MyFile/MyFile";
import NotFound from "../Pages/NotFound/NotFound";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <NotFound/>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/comics",
                element: <Comics />
            },
            {
                path: "/books",
                element: <Books />
            },
            {
                path: "/magazines",
                element: <Magazins />
            },
            {
                path: "/newspaper",
                element: <Newspapers />
            },
            {
                path: "/bookdetails/:id",
                element: <PrivetRoute> <BookDetails /></PrivetRoute>
            },
            {
                path: "/signin",
                element: <Login />
            },
            {
                path: "/signup",
                element: <Signup />
            },
        ]
    },
    {
        path: "/dashboard",
        element: <PrivetRoute><Dashboard /></PrivetRoute>,
        errorElement: <NotFound/>,
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

    },
    {
        path: "/userdashboard",
        element: <PrivetRoute><UserDashboard /></PrivetRoute>,
        errorElement: <NotFound/>,
        children: [
            {
                path: "userCart",
                element: <MyCart />
            },
            {
                path: "userBorrowBooks",
                element: <MyBorrowBooks />
            },
            {
                path: "checkout/:id",
                element: <Payment />
            },
            {
                path: "purchaseHistory",
                element: <PaymentHistory />
            },
            {
                path: "myfile",
                element: <MyFile />
            },

        ]

    }
]);

export default router;