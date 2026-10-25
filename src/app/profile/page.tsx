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
    <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-pink-100 via-rose-50 to-pink-200 px-4 py-12 flex items-center justify-center">

        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-pink-300/40 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-rose-300/40 blur-3xl" />

        <div className="relative w-full max-w-3xl rounded-4xl border border-white/80 bg-white/80 p-6 shadow-2xl shadow-pink-300/30 backdrop-blur-xl sm:p-10">

            {/* Avatar */}
            <div className="flex justify-center">
                <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-white bg-linear-to-br from-pink-200 to-rose-300 text-5xl shadow-lg shadow-pink-200">
                    👩🏻‍💻
                </div>
            </div>

            <div className="mt-5 text-center">
                <h1 className="text-4xl font-extrabold italic tracking-tight text-rose-900 sm:text-5xl">
                    Profile Page
                </h1>

                <div className="mt-3 flex items-center justify-center gap-3">
                    <span className="h-px w-12 bg-pink-300" />
                    <span className="text-xl text-pink-500">♡</span>
                    <span className="h-px w-12 bg-pink-300" />
                </div>

                <p className="mt-3 text-base text-rose-800/70 sm:text-lg">
                    Manage your account and view your details
                </p>
            </div>

            {/* User details section */}
            <div className="mt-8 rounded-2xl border border-pink-200/80 bg-linear-to-r from-pink-50 to-rose-50 p-6">
                <div className="flex items-center gap-5">
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-pink-200/70 text-3xl text-rose-800">
                        ♙
                    </div>

                    <div className="min-w-0">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-pink-600">
                            User Profile
                        </p>

                        <p className="mt-2 break-all text-xl font-bold text-rose-950">
                            {data === "nothing"
                                ? "No data fetched yet"
                                : `User ID: ${data}`}
                        </p>
                    </div>
                </div>

                {data !== "nothing" && (
                    <Link
                        href={`/profile/${data}`}
                        className="mt-5 inline-block font-semibold text-rose-700 underline decoration-pink-400 underline-offset-4 transition hover:text-pink-600"
                    >
                        Go to your profile →
                    </Link>
                )}
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">

                <button
                    onClick={logout}
                    className="flex items-center justify-center gap-3 rounded-2xl bg-linear-to-r from-pink-500 to-rose-500 px-6 py-4 font-bold text-white shadow-lg shadow-pink-300/40 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-300/50 active:scale-95"
                >
                    <span className="text-xl">↪</span>
                    Logout
                </button>

                <button
                    onClick={getUserDetails}
                    className="flex items-center justify-center gap-3 rounded-2xl border border-pink-200 bg-pink-100/80 px-6 py-4 font-bold text-rose-800 transition duration-300 hover:-translate-y-1 hover:bg-pink-200 active:scale-95"
                >
                    <span className="text-xl">♙</span>
                    Get User Details
                </button>

            </div>

            <div className="mt-8 rounded-2xl bg-pink-100/70 p-5">
                <p className="flex items-start gap-3 text-sm leading-7 text-rose-800/80 sm:text-base">
                    <span className="text-xl">✦</span>
                    <span>
                        Click on <strong>Get User Details</strong> to fetch
                        your user ID. Then navigate to your profile page
                        using the link above.
                    </span>
                </p>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 border-t border-pink-200 pt-5 text-sm text-pink-500">
                Made with <span className="text-lg">♥</span> and a little code
            </div>

        </div>
    </div>
);
}