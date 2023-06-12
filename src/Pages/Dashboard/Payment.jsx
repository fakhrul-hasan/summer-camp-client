import SectionTitle from "../../components/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useSelectedClass from "../../hooks/useSelectedClass";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_pk);

const Payment = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const price = searchParams.get("price");
  const classId = searchParams.get("id");
  const className = searchParams.get("name");
  const newPrice = parseFloat(price);
  // const total = classes.reduce((sum, cls)=> cls.price + sum, 0);
  return (
    <div className="w-2/4">
      <Helmet>
        <title>Payment</title>
      </Helmet>
      <SectionTitle
        subHeading="one step away"
        heading={`Provide Information for Pay $${newPrice}`}
      ></SectionTitle>
      <Elements stripe={stripePromise}>
        <CheckoutForm
          classId={classId}
          className={className}
          price={newPrice}
        ></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
