"use client";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="h-screen w-full flex items-center justify-center bg-black px-3">

            {/* WRAPPER — TWO SEPARATE BOXES */}
            <div className="flex flex-col lg:flex-row gap-3 max-w-7xl w-full">

                {/* LEFT BOX */}
                <div className="relative w-1/2 bg-neutral-950 rounded-xl h-[95vh] 
overflow-hidden p-8 lg:p-12 flex flex-col items-center justify-center text-white">


                    {/* LOGO + TITLE */}
                    <div className="text-center mb-10 z-10">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <img src="/logo.svg" alt="Logo" className="h-8" />
                            <span className="text-lg font-medium">Cartigo</span>
                        </div>

                        <h1 className="text-3xl font-medium">
                            Sign in to continue
                            managing your
                            orders and shipments
                        </h1>

                        <p className="text-xs text-neutral-300 mt-4 max-w-xs mx-auto">
                            Experience the fastest, most reliable way to buy and ship products from China.
                        </p>
                    </div>

                </div>




                {/* RIGHT BOX */}
                <div className="basis-3/5 bg-white rounded-xl h-[95vh] p-10 flex flex-col">

                    {/* TOP LOGO ROW */}
                    <div className="flex items-center gap-2 mb-10">
                        <img src="/logo.svg" alt="Logo" className="h-7" />
                        <span className="text-lg font-semibold text-neutral-900">Cartigo</span>
                    </div>

                    {/* TITLE + SUBTEXT */}
                    <h1 className="text-3xl font-semibold text-neutral-900 mb-2">Sign in</h1>

                    <p className="text-sm text-neutral-600 mb-8">
                        Don’t have an account?{" "}
                        <a href="#" className="text-blue-600 font-medium hover:underline">
                            Create now
                        </a>
                    </p>

                    {/* EMAIL */}
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-neutral-700 mb-1">
                            E-mail
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="example@gmail.com"
                            className="w-full px-3.5 py-2.5 border border-neutral-300 rounded-xl 
                   text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    {/* PASSWORD */}
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-neutral-700 mb-1">
                            Password
                        </label>

                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className="w-full px-3.5 py-2.5 border border-neutral-300 rounded-xl 
                       text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 
                       text-neutral-500 hover:text-neutral-700"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    {/* REMEMBER + FORGOT */}
                    <div className="flex justify-between items-center mb-6">
                        <label className="flex items-center gap-2 text-sm text-neutral-700">
                            <input type="checkbox" className="accent-blue-600" />
                            Remember me
                        </label>

                        <a href="#" className="text-sm text-blue-600 hover:underline">
                            Forgot Password?
                        </a>
                    </div>

                    {/* SIGN IN BUTTON */}
                    <button className="w-full py-3 bg-blue-500 text-white rounded-xl 
                   text-sm font-medium hover:bg-blue-700 transition">
                        Sign in
                    </button>

                    {/* FOOTER */}
                    <div className="mt-auto pt-10 flex justify-between text-xs text-neutral-500">
                        <span>© 2024 Cartigo</span>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-neutral-700">Privacy</a>
                            <a href="#" className="hover:text-neutral-700">Support</a>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default SignIn;
