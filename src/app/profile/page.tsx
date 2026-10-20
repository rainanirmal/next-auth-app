"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


export default function ProfilePage() {

    const router = useRouter();

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
    return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-200 px-4">
        <h1 className="text-3xl font-bold text-pink-900">
            Profile page
        </h1>

        <button
            onClick={logout}
            className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600 transition mt-4"
        >
            Logout
        </button>
    </div>
    );
}