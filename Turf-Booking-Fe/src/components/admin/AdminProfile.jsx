import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


const AdminProfile = () => {
    const [manager, setManager] = useState([]);

    const navigate = useNavigate();

    axios.defaults.withCredentials = true;


    useEffect(() => {
        const currentManger = async () => {
    
          try {
            const res = await axios.get(`http://localhost:3001/api/v1/managers/get-current-manager`,
              { withCredentials: true }
            )
            const resData =await res.data;
            //console.log(resData);
          
            setManager(resData);
            //console.log(turfs);
          } catch (error) {
            console.log(error);
          }
    
        };
        currentManger();
      }, [])




    const handleLogout = async (event) => {
        event.preventDefault();
        try {
            // Send a request to the logout route
            const res = await axios.post('http://localhost:3001/api/v1/managers/logout',
                { withCredentials: true }
            );
            const resData = res.data;
            if (resData.message === "Logged out successfully") {
                localStorage.removeItem('token'); // If using localStorage
                alert("Logged out successfully")
                navigate('/manager/signin')
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
                    <h2 className="text-white text-2xl font-semibold mb-6">{manager.name}</h2>
                    <p className="text-gray-400">{manager.email}</p>
                </div>
                <div className="p-4 my-6">
                    <button
                        onClick={  handleLogout}
                        className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AdminProfile
