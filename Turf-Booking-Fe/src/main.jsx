import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserSignupPage from "./pages/user/UserSignupPage";
import UserSignInPage from "./pages/user/UserSignInPage";
import ManagerSignupPage from "./pages/manager/ManagerSignupPage";
import ManagerSigninPage from "./pages/manager/ManagerSigninPage";
import ManagerDashbordPage from "./pages/manager/ManagerDashbordPage";
import UserDashbordPage from "./pages/user/UserDashbordPage";
import HomeLayout from "./layout/HomeLayout";
import UserLayout from "./layout/UserLayout";
import ManagerLayout from "./layout/ManagerLayout";
import AdminDashbordPage from "./pages/admin/AdminDashbordPage";
import AdminLayout from "./layout/AdminLayout";
import AddTurfPage from "./pages/manager/AddTurfPage";
import UserTurfsPage from "./pages/user/UserTurfsPage";
import AdminTurfsPage from "./pages/admin/AdminTurfsPage";
import UpdateformPage from "./pages/admin/UpdateformPage";
import ManagersTablePage from "./pages/admin/ManagersTablePage";
import UsersTablePage from "./pages/admin/UsersTablePage";
import GestHomePage from "./pages/guest/GestHomePage";
import TurfDetails from "./components/user/TurfDetails";
import AllTurf from "./components/user/AllTurf";
import Football from "./components/user/Football";
import Badminton from "./components/user/Badminton";
import Swimming from "./components/user/Swimming";
import Cricket from "./components/user/Cricket";
import Tennis from "./components/user/Tennis";
import TableTennis from "./components/user/TableTennis";
import BookingsPage from "./pages/user/BookingsPage";
import BookingsDetails from "./components/user/BookingsDetails";
import Profile from "./components/user/Profile";
import ManagerUpdateForm from "./components/admin/ManagerUpdateForm";
import AdminProfile from "./components/admin/AdminProfile";
import Myturf from "./components/manager/Myturf";
import MyTurfupdateForm from "./components/manager/MyTurfupdateForm";
import BookedData from "./components/manager/BookedData";

const router = createBrowserRouter([
    {
        element: <HomeLayout />,
        children: [
            {
                path: "/",
                element: <GestHomePage />,
            },
            {
                path: "/user/signup",
                element: <UserSignupPage />,
            },
            {
                path: "/user/signin",
                element: <UserSignInPage />,
            },
            {
                path: "/manager/signup",
                element: <ManagerSignupPage />,
            },
            {
                path: "/manager/signin",
                element: <ManagerSigninPage />,
            },
        ],
    },

    {
        element: <UserLayout />,
        children: [
            {
                path: "/user/dashbord",
                element: <UserDashbordPage />,
            },

            {
                path: "/user/turfs",
                element: <UserTurfsPage />,
            },

            {
                element: <UserTurfsPage />,
                children: [
                    {
                        path: "/user/turfs/all",
                        element: <AllTurf />,
                    },
                    {
                        path: "/user/turfs/football",
                        element: <Football />,
                    },
                    {
                        path: "/user/turfs/badminton",
                        element: <Badminton />,
                    },

                    {
                        path: "/user/turfs/swimming",
                        element: <Swimming />,
                    },
                    {
                        path: "/user/turfs/cricket",
                        element: <Cricket />,
                    },
                    {
                        path: "/user/turfs/tennis",
                        element: <Tennis />,
                    },
                    {
                        path: "/user/turfs/tabletennis",
                        element: <TableTennis />,
                    },
                ],
            },
            {
                path: "/user/bookings",
                element: <BookingsPage />,
            },
            {
                path: "/user/bookings/bookings-details",
                element: <BookingsDetails />,
            },
            {
                path: "/user/turf/:id",
                element: <TurfDetails />,
            },
            {
                path: "/user/profile",
                element: <Profile />,
            },
        ],
    },

    {
        element: <ManagerLayout />,
        children: [
            {
                path: "/manager/dashbord",
                element: <ManagerDashbordPage />,
            },
            {
                path: "/manager/my-turf",
                element: <Myturf />,
            },
            {
                path: "/manager/turfs/update/:id",
                element: <MyTurfupdateForm />,
            },
            {
                path: "/manager/bookings",
                element: <BookedData />,
            },
            {
                path: "/manager/add-turf",
                element: <AddTurfPage />,
            },
            {
                path: "/manager/profile",
                element: <AdminProfile />,
            },
        ],
    },

    {
        element: <AdminLayout />,
        children: [
            {
                path: "/admin/dashbord",
                element: <AdminDashbordPage />,
            },
            {
                path: "/admin/turfs",
                element: <AdminTurfsPage />,
            },
            {
                path: "/admin/turfs/update/:id",
                element: <UpdateformPage />,
            },
            {
                path: "/admin/managers/update/:id",
                element: <ManagerUpdateForm />,
            },
            {
                path: "/admin/managers",
                element: <ManagersTablePage />,
            },
            {
                path: "/admin/users",
                element: <UsersTablePage />,
            },
            {
                path: "/admin/profile",
                element: <AdminProfile />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
