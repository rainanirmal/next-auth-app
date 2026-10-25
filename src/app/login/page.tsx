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

return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-pink-100 via-rose-50 to-pink-200 px-4 py-12">

        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-pink-300/40 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-rose-300/40 blur-3xl" />

        <div className="relative w-full max-w-md rounded-4xl border border-white/80 bg-white/80 p-7 shadow-2xl shadow-pink-300/30 backdrop-blur-xl sm:p-9">

            {/* Header */}
            <div className="mb-8 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-linear-to-br from-pink-200 to-rose-300 text-4xl shadow-lg shadow-pink-200">
                    ♡
                </div>

                <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-rose-900">
                    Welcome Back
                </h1>

                <div className="mt-3 flex items-center justify-center gap-3">
                    <span className="h-px w-10 bg-pink-300" />
                    <span className="text-lg text-pink-500">✦</span>
                    <span className="h-px w-10 bg-pink-300" />
                </div>

                <p className="mt-3 text-sm text-rose-800/70">
                    {loading
                        ? "Processing your login..."
                        : "Login to your account to continue"}
                </p>
            </div>

            <div className="mb-5">
                <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-rose-900"
                >
                    Email Address
                </label>

                <input
                    className="w-full rounded-xl border border-pink-200 bg-pink-50/70 p-3.5 text-rose-950 placeholder:text-rose-300 outline-none transition duration-200 focus:border-pink-400 focus:bg-white focus:ring-4 focus:ring-pink-100"
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
                    autoComplete="email"
                />
            </div>

            <div className="mb-6">
                <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-semibold text-rose-900"
                >
                    Password
                </label>

                <input
                    className="w-full rounded-xl border border-pink-200 bg-pink-50/70 p-3.5 text-rose-950 placeholder:text-rose-300 outline-none transition duration-200 focus:border-pink-400 focus:bg-white focus:ring-4 focus:ring-pink-100"
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
                    autoComplete="current-password"
                />
            </div>

            <button
                onClick={onLogin}
                disabled={buttonDisabled || loading}
                className="w-full rounded-xl bg-linear-to-r from-pink-500 to-rose-500 p-3.5 font-bold text-white shadow-lg shadow-pink-300/40 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-pink-300/50 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
            >
                {loading
                    ? "Logging in..."
                    : buttonDisabled
                        ? "Please fill all the fields"
                        : "Login ♡"}
            </button>

            <div className="mt-7 text-center">
                <p className="text-sm text-rose-800/70">
                    Don&apos;t have an account?{" "}
                    <Link
                        href="/signup"
                        className="font-bold text-pink-600 underline decoration-pink-300 underline-offset-4 transition hover:text-rose-800"
                    >
                        Sign up
                    </Link>
                </p>
            </div>

            <div className="mt-7 border-t border-pink-100 pt-5 text-center">
                <p className="text-xs tracking-wide text-pink-400">
                    Made with ♥ and a little code
                </p>
            </div>

        </div>
    </div>
);
}