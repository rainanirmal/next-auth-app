"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState }from "react";
import toast from "react-hot-toast";


export default function ProfilePage() {

    const router = useRouter();

    const [data, setData] = useState("nothing");

    const logout = async () => {

        try {

            const response = await axios.get("/api/users/logout");
            console.log("Logout success", response.data);
            toast.success("Logout Successful!");
            
            router.push("/login");
            
        } catch (error: any) {
            toast.error(error.message);
            console.log("Logout failed", error.message);
        }
    }

    const getUserDetails = async () => {

        const response = await axios.get("/api/users/user");
        console.log(response.data);
        setData(response.data.data._id);
    }

    return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-200 px-4">
        <h1 className="text-3xl font-bold text-pink-900">
            Profile page
        </h1>

        <h2 className="text-xl font-semibold text-pink-800 mt-4">
            {data === "nothing" ? "No data fetched yet" : <Link href={`/profile/${data}`} className="text-blue-500 underline">
                Go to profile of user with id: {data}
            </Link>}
        </h2>


        <button
            onClick={logout}
            className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600 transition mt-4"
        >
            Logout
        </button>

        <button
            onClick={getUserDetails}
            className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600 transition mt-4"
        >
            Get User Details
        </button>
    </div>
    );
}