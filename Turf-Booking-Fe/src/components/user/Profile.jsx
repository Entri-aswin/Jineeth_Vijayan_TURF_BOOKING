import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../config/axiosInstance.js';

const Profile = () => {

    const [user, setUser] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {

        const getCurrentUser = async () => {
            try {

                const res = await axiosInstance.get('/user/get-current-user');
               
                const resData = await res.data;


                setUser(resData);

            } catch (error) {
                console.log(error);
            }
        };
        getCurrentUser();
    }, []);




    const handleLogout = async () => {
        try {
            // Send a request to the logout route
            const res = await axios.post('http://localhost:3001/api/v1/user/logout',
                { withCredentials: true }
            );
            const resData = res.data;
            if (resData.message === "Logged out successfully") {
                localStorage.removeItem('token'); // If using localStorage
                alert("Logged out successfully")
                navigate('/user/signin')
            } else {
                console.error("Logout failed");
            }
        } catch (error) {
            console.error("An error occurred during logout", error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-sm mx-auto p-10 bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="w-24 h-24 mb-6 rounded-full ms-10 mt-6 shadow-lg bg-[url('../images/cartoon.jpg')] bg-no-repeat bg-cover bg-center">

                </div>
                <div className="bg-gray-800 p-4">
                    <h2 className="text-white text-2xl font-semibold mb-6">{user.firstName}</h2>
                    <p className="text-gray-400">{user.email}</p>
                </div>
                <div className="p-4 my-6">
                    <button
                        onClick={handleLogout}
                        className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Profile
