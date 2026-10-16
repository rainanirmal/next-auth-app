"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

export default function LoginPage() {

    const router = useRouter();

    const [buttonDisabled, setButtonDisabled] = useState(false);

    const [loading, setLoading] = useState(false);

    const[user, setUser] = useState({
        email: "",
        password: ""
    });

    const onLogin = async () => {

        try {

            setLoading(true);
            const response = await axios.post("/api/users/login", user);

            console.log("Login success", response.data);
            toast.success("Login Successful!");

            router.push("/profile");
            
        } catch (error: any) {
            
            console.log("Login Failed",error.message);
            toast.error("Login Failed! Please try again");

        }
        finally {

            setLoading(false);  

        }

    }

    useEffect(() => {

        if(user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        }
        else {
            setButtonDisabled(true);
        }
    }, [user])

    return(
        <div className="min-h-screen flex items-center justify-center bg-pink-200 px-4">

            <div className="w-full max-w-md rounded-2xl bg-pink-900 p-8 shadow-2xl border border-pink-800">

                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-white">
                        Welcome Back
                    </h1>

                    <p className="mt-2 text-sm text-gray-400">
                        {loading ? "Processing..." : "Login to your account to continue" }
                    </p>
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-2"
                    >
                        Email
                    </label>

                    <input
                        className="w-full p-3 bg-pink-300 border border-pink-900 rounded-lg
                        text-white placeholder-gray-500
                        focus:outline-none focus:ring-2 focus:ring-white
                        focus:border-transparent transition"
                        type="email"
                        name="email"
                        id="email"
                        value={user.email}
                        onChange={(e) =>
                            setUser({
                                ...user,
                                email: e.target.value,
                            })
                        }
                        placeholder="Enter your email"
                    />
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-300 mb-2"
                    >
                        Password
                    </label>

                    <input
                        className="w-full p-3 bg-pink-300 border border-pink-900 rounded-lg
                        text-white placeholder-gray-500
                        focus:outline-none focus:ring-2 focus:ring-white
                        focus:border-transparent transition"
                        type="password"
                        name="password"
                        id="password"
                        value={user.password}
                        onChange={(e) =>
                            setUser({
                                ...user,
                                password: e.target.value,
                            })
                        }
                        placeholder="Enter your password"
                    />
                </div>

                <button
                    onClick={onLogin}
                    className="w-full p-3 rounded-lg bg-pink-600 text-white
                    font-semibold hover:bg-pink-700
                    active:scale-[0.98] transition-all
                    focus:outline-none focus:ring-2 focus:ring-white
                    focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                    {buttonDisabled ? "Please fill all the fields" : loading ? "Logging in..." : "Login"}
                </button>

                <div className="text-center mt-6">
                    <p className="text-sm text-gray-400">
                        Don't have an account?{" "}
                        <Link
                            href="/signup"
                            className="text-blue-400 hover:text-blue-300 font-medium transition"
                        >
                            Sign up
                        </Link>
                    </p>
                </div>

            </div>
        </div>
    )
}