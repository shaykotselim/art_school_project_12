import React from 'react';
import useCart from '../../../hooks/useCart';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const Payment = () => {
    const [cart, refetch] = useCart();
    const total = cart?.reduce((sum , item)=>sum+item.price,0);
     const price = parseFloat(total.toFixed(2));
     const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);
    return (
        <div>
            <div className='text-center text-2xl bg-black text-white p-2 rounded'>
                <h1 >Total Price: ${price}</h1>
            </div>
            <div className='w-96'>
                <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart}
                    price={price}
                ></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;<h1>This is Payment Page</h1>