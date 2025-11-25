
import { Bell, ShoppingCart, Users, Search, SlidersHorizontal } from "lucide-react";
import React from 'react'


const Header = () => {
    return (
        <div>
            {/* HEADER */}
            <header className="border-b border-[#2a2a2a] bg-[#111111]">
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between py-4">
                        {/* Logo + Search */}
                        <div className="flex items-center gap-8">
                            <span className="text-xl font-medium">Cartigo</span>

                            <div className="hidden md:flex items-center bg-[#1a1a1a] px-4 py-2 rounded-lg w-72 border border-[#2a2a2a]">
                                <Search className="w-4 h-4 text-[#9ca3af]" />
                                <input
                                    type="text"
                                    placeholder="Search keywords..."
                                    className="bg-transparent ml-2 w-full text-sm outline-none placeholder:text-[#6b7280]"
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <HeaderIcon Icon={ShoppingCart} />
                            <HeaderIcon Icon={Users} />

                            <div className="relative">
                                <HeaderIcon Icon={Bell} />
                                <span className="notif-badge">1</span>
                            </div>

                            <button className="w-8 h-8 bg-white rounded-full" />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header


function HeaderIcon({ Icon }) {
    return <button className="icon-btn"> <Icon className="w-6 h-6" /> </button>;
  }