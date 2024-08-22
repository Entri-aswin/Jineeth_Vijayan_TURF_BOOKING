import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axiosInstance from "../../config/axiosInstance";

const schema = yup
    .object({
        firstName: yup.string().required("please enter your first name"),
        lastName: yup.string().required("please enter your last name"),
        email: yup.string().email().required("please enter your email"),
        password: yup
            .string()
            .min(4, "Password must be at least 4 characters long.")
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character."
            )
            .required(),
    })
    .required();

const UserSignUp = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = async (data) => {
        try {
            // const res = await axios.post(
            //     "http://localhost:3001/api/v1/user/signup",

            //     data,
            //     {
            //         withCredentials: true
            //     }
            // );
            const res = await axiosInstance({ url: "/user/signup", method: "POST", data });

            const resData = await res.data;

            if (resData === "signed up successfully") {
                alert("Signed up successfully! Please log in.");
                navigate("/user/signin");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen pt-16 ">
            <div className="flex  shadow-sm shadow-slate-800 p-3">
                <div className="w-96 h-96 bg-[url('../images/playground.jpg')] bg-no-repeat bg-cover bg-center flex items-center ">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full md:hidden p-8 ">
                        <input
                            name="fname"
                            type="text"
                            {...register("firstName")}
                            placeholder="First Name"
                            className="mb-4 ps-1 py-1.5 rounded shadow  shadow-green-800 "
                        />
                        {errors.firstName?.message}
                        <input
                            name="lname"
                            type="text"
                            {...register("lastName")}
                            placeholder="Last Name"
                            className="mb-4 ps-1 py-1.5 rounded  shadow  shadow-green-800"
                        />
                        {errors.lastName?.message}
                        <input
                            name="email"
                            type="text"
                            {...register("email")}
                            placeholder="Email"
                            className="mb-4 ps-1 py-1.5 rounded  shadow  shadow-green-800"
                        />
                        {errors.email?.message}
                        <input
                            name="password"
                            type="text"
                            {...register("password")}
                            placeholder="Password"
                            className="mb-4 ps-1 py-1.5 rounded  shadow  shadow-green-800"
                        />
                        {errors.password?.message}
                        <input
                            type="submit"
                            value="Signup"
                            className="px-2 py-1.5 w-24 ms-32 bg-green-800 text-white hover:bg-green-600 hover:text-black rounded"
                        />
                        <p className=" ms-16 mt-4 text-white">
                            User already exist ?{" "}
                            <Link to="/user/signin" className="text-white underline ">
                                Signin
                            </Link>
                        </p>
                    </form>
                </div>

                <div className="w-96  px-6 py-6 md:flex items-center hidden">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full ">
                        <input
                            name="fname"
                            type="text"
                            {...register("firstName")}
                            placeholder="First Name"
                            className="mb-4 ps-1 py-1.5 rounded shadow  shadow-green-800 "
                        />
                        {errors.firstName?.message}
                        <input
                            name="lname"
                            type="text"
                            {...register("lastName")}
                            placeholder="Last Name"
                            className="mb-4 ps-1 py-1.5 rounded  shadow  shadow-green-800"
                        />
                        {errors.lastName?.message}
                        <input
                            name="email"
                            type="text"
                            {...register("email")}
                            placeholder="Email"
                            className="mb-4 ps-1 py-1.5 rounded  shadow  shadow-green-800"
                        />
                        {errors.email?.message}
                        <input
                            name="password"
                            type="text"
                            {...register("password")}
                            placeholder="Password"
                            className="mb-4 ps-1 py-1.5 rounded  shadow  shadow-green-800"
                        />
                        {errors.password?.message}
                        <input
                            type="submit"
                            value="Signup"
                            className="px-2 py-1.5 w-24 ms-32 bg-green-800 text-white hover:bg-green-600 hover:text-black rounded"
                        />
                        <p className=" ms-16 mt-4">
                            User already exist ?{" "}
                            <Link to="/user/signin" className="text-blue-500 underline ">
                                Signin
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserSignUp;
