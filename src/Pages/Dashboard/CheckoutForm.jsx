import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../Providers/AuthProvider";

const CheckoutForm = ({price}) => {
    const {user} = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');

  useEffect(()=>{
    axiosSecure.post('/create-payment-intent', {price})
    .then(res=>{
        setClientSecret(res.data.clientSecret);
    })
  },[price, axiosSecure])

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setProcessing(true);
    const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              email: user?.email || 'unknown',
              name: user?.displayName || 'anonymous'
            },
          },
        },
      );
      if(confirmError){
        console.log(confirmError);
      }
      console.log(paymentIntent);
      setProcessing(false);
      if(paymentIntent.status === 'succeeded'){
        setTransactionId(paymentIntent.id);
        const transactionId = paymentIntent.id;
      }
  };
  return (
    <>
      <form className="m-8 w-full" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-outline btn-accent btn-sm mt-4"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600 ms-8">{cardError}</p>}
      {transactionId && <p className="text-green-600 ms-8">Payment Successful with transaction id: {transactionId}</p>}
    </>
  );
};

export default CheckoutForm;
