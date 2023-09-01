import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_PAY_PK);

const Payment = () => {
    const {id} = useParams();
    const [axiosSecure] = useAxiosSecure();
    const [singleItem, setsingleItem] = useState([]);
    useEffect(() => {
        axiosSecure.get(`/singleCartItem/${id}`).then(data => {
            setsingleItem(data.data);
        });
    }, [axiosSecure, id]);
    return (
        <Elements stripe={stripePromise}>
            <CheckOutForm checkOutDetail={singleItem} />
        </Elements>
    );
};

export default Payment;