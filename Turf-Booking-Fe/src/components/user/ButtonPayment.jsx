import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';



const ButtonPayment = ({ turf }) => {

    const navigate = useNavigate();

    //console.log(turf);



    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);


    const paymentHandler = async (event) => {

        event.preventDefault();


        const selectedTurf = turf;

        console.log("select", selectedTurf);

        const response = await axios.post(
            "http://localhost:3001/api/v1/payment/order",
            { amount: selectedTurf.price },
        );

        const order = await response.data.data;

        console.log(order);

        const option = {
            key: import.meta.env.VITE_SOME_KEY,
            amount: order.amount,
            currency: order.currency,
            name: "Jineeth",
            description: "Test Transaction",
            order_id: order.id,
            handler: async function (response) {
                const body = { ...response };
                console.log(body);

                const validateResponse = await axios.post(
                    "http://localhost:3001/api/v1/payment/verify",
                    body,
                );

                const Response = await validateResponse;

                // console.log("Response", Response);
                console.log(Response.data.message);

                if (Response.data.message === 'Payement Successfully') {
                    alert('payment successful');
                    navigate('/user/bookings/bookings-details', { state: { turf: turf } })
                }

            },
            prefill: {
                name: "Jineeth",
                email: "jineeth@gmail.com",
                contact: "9947977578",
            },
            notes: {
                address: "Razorpay Corporate Office",
            },
            theme: {
                color: "#3399cc",
            },
        };

        const rzp1 = new window.Razorpay(option);

        rzp1.on("payment.failed", function (response) {
            alert(response.error.code);
        });

        rzp1.open();



    };


    return (
        <div>
            <button onClick={(e) => paymentHandler(e)} className='px-2 py-1.5 w-24  bg-green-800 text-white hover:bg-green-600 hover:text-black rounded'>Pay&Book</button>
        </div>
    )
}


export default ButtonPayment
