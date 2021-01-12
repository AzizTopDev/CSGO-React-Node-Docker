import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import "./style.css";
// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with your real test publishable API key.
const promise = loadStripe("pk_test_QrZH6eK829YqqtgMkLo8rVLc00cjlP2fEX");

export default function Payment(props) {
    const {coins} = props;
    return (
        <div className="Payment">
            <Elements stripe={promise}>
                <CheckoutForm coins={coins} />
            </Elements>
        </div>
    );
}