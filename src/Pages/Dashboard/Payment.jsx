import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useSelectedClass from '../../hooks/useSelectedClass';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_pk);

const Payment = () => {
    const [classes] = useSelectedClass();
    const total = classes.reduce((sum, cls)=> cls.price + sum, 0);
    const price = parseFloat(total.toFixed(2));
    return (
        <div className='w-2/4'>
            <SectionTitle subHeading='one step away' heading='Payment Process'></SectionTitle>
            <Elements stripe={stripePromise}>
            <CheckoutForm price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;