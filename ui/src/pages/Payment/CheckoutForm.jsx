import React, { useState, useEffect } from "react";
import {
    CardElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
import axios from "../../util/Api";
import { Link } from "react-router-dom";
import { getUser } from "../../actions";
import { connect } from "react-redux";

function CheckoutForm(props) {
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        axios
            .post("/create-payment-intent", { coins: props.coins })
            .then(({ data }) => {
                console.log(" RESPOSNE DATA --", data);
                setClientSecret(data.clientSecret);
            });
    }, []);
    const cardStyle = {
        style: {
            base: {
                color: "#32325d",
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": {
                    color: "#aab7c4",
                },
            },
            invalid: {
                color: "#fa755a",
                iconColor: "#fa755a",
            },
        },
    };
    const handleChange = async (event) => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    };
    const handleSubmit = async (ev) => {
        ev.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: ev.target.name
                }
            }
        });
        if (payload.error) {
            setError(`Payment failed ${payload.error.message}`);
            setProcessing(false);
        } else {
            setError(null);
            setProcessing(false);
            setSucceeded(true);
            axios.post('/deposit-coins', {coins : props.coins}).then(({data}) => {
                console.log(" ___ this is deposit api res ___ ", data);
                props.getUser();
            })
        }
    };
    return (
        <form id="payment-form" name="Coin purchase" onSubmit={handleSubmit}>
            <label>
                Card details
            </label>
            <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
            <button
                disabled={processing || disabled || succeeded}
                id="submit"
            >
                <span id="button-text">
                    {processing ? (
                        <div className="spinner" id="spinner"></div>
                    ) : (
                            "Confirm Pay"
                        )}
                </span>
            </button>
            {/* Show any error that happens when processing the payment */}
            {error && (
                <div className="card-error" role="alert">
                    {error}
                </div>
            )}
            {/* Show a success message upon completion */}
            <p className={`text-center text-success${succeeded ? ' result-message' : ' result-message hidden'}`}>
                Payment succeeded <br />
                <span className="text-black font-size-sm">Refresh the page to pay then you will receive same amount of coins again.</span><br />
                <Link to="/pr/games">Go to Games</Link>
            </p>
        </form>
    );
}

export default connect(()=>({}), { getUser })(CheckoutForm);