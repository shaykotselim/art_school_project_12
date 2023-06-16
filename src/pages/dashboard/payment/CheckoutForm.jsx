import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../provider/AuthProvider";

const CheckoutForm = ({cart, price}) => {
  const stripe = useStripe();
  const elements = useElements();
//   const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const [cardError, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  
  useEffect(()=>{
    fetch('https://art-school-server-nine.vercel.app/create-payment-intent', {
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body: price
    })
    .then(res=>res.json())
    .then(data=> setClientSecret(data))
    
  },[])
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    console.log(card);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("error", error);
      setError(error.message);
    } else {
      console.log(paymentMethod);
      setError("");
    }
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "unKnown",
            email: user?.email || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError.message);
    }
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      // payment info save to the server
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        quantity: cart.length,
        status: "Enrolled",
        selectedCourse: cart.map((course) => course._id),
        coursesName: cart.map((course) => course.name),
        coursesId: cart.map((course) => course._id),
      };
      fetch('https://art-school-server-nine.vercel.app/payments', {
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(payment)
      })
      .then(res=>res.json())
      .then(data=> {
        console.log(data);
        if (data.insertedResult) {
            // payment info updated
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `Enrolled Successful! Trans id is : ${paymentIntent.id} `,
              showConfirmButton: false,
            });
          }
      })
    //   axiosSecure.post("/payments", payment).then((res) => {
    //     console.log(res.data);
    //     if (res.data.insertedResult) {
    //       // payment info updated
    //       Swal.fire({
    //         position: "top-end",
    //         icon: "success",
    //         title: `Enrolled Successful! Trans id is : ${paymentIntent.id} `,
    //         showConfirmButton: false,
    //       });
    //     }
    //   });
    }
  };

  return(
    <form>
        <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "black",
              backgroundColor: "white",
              "::placeholder": {
                color: "gray",
              },
            },
            invalid: {
              color: "red",
            },
          },
        }}
      />
      <p className="font-bold text-red-600 bg-white">{cardError}</p>
      <button className="btn btn-primary" type="submit" disabled={!stripe || clientSecret }>pay</button>
    </form>
  )

};

export default CheckoutForm;
