"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function SignupPage() {

    const router = useRouter();

    const[user, setUser] = useState({
        email: "",
        username: "",
        password: ""
    });

    const [buttonDisabled, setButtonDisabled] = React.useState(false);

    const [loading, setLoading] = React.useState(false);

    useEffect(() => {
        if(user.email.length > 0 && user.username.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        }
        else {
            setButtonDisabled(true);
        }
    }, [user])

    const onSignup = async () => {
        try {

            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            
            console.log("Signup success ", response.data);
            toast.success("Account created successfully!");

            router.push("/login");

        } catch (error: any) {

            toast.error(error.message);
            console.log("Signup failed ", error);

        } finally {

            setLoading(false);

        }
    }

    return(
        <div className="min-h-screen flex items-center justify-center bg-pink-200 px-4">

            <div className="w-full max-w-md rounded-2xl bg-pink-900 p-8 shadow-2xl border border-pink-800">

                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-white">
                        {loading ? "Processing..." : "Create Account" }
                    </h1>

                    <p className="mt-2 text-sm text-gray-400">
                        Create your account to get started
                    </p>
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="username"
                        className="block text-sm font-medium text-gray-300 mb-2"
                    >
                        Username
                    </label>

                    <input
                        className="w-full p-3 bg-pink-300 border border-pink-900 rounded-lg 
                        text-white placeholder-gray-500
                        focus:outline-none focus:ring-2 focus:ring-white 
                        focus:border-transparent transition"
                        type="text"
                        name="username"
                        id="username"
                        value={user.username}
                        onChange={(e) =>
                            setUser({
                                ...user,
                                username: e.target.value,
                            })
                        }
                        placeholder="Enter your username"
                    />
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
                    onClick={onSignup}
                    className="w-full p-3 rounded-lg bg-pink-600 text-white 
                    font-semibold hover:bg-pink-700 
                    active:scale-[0.98] transition-all 
                    focus:outline-none focus:ring-2 focus:ring-white"
                >
                    {
                        buttonDisabled? "No SignUp" : "SignUp"
                    }
                </button>

                <div className="text-center mt-6">
                    <p className="text-sm text-gray-400">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="text-blue-400 hover:text-blue-300 font-medium transition"
                        >
                            Login
                        </Link>
                    </p>
                </div>

            </div>
        </div>
    )
}