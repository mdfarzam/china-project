'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import SearchBar from './SearchBar'
import Features from './Features'

function Hero() {
    const router = useRouter()

    const handleSearch = (query) => {
        // Navigate to search results page or handle search
        if (query) {
            router.push(`/search?q=${encodeURIComponent(query)}`)
        }
    }

    return (
        <div className='relative w-full min-h-[85vh] bg-[url(/hero_bg.png)] bg-cover bg-center'>
            <div className="absolute flex flex-col gap-8 z-30 top-14 md:top-18 md:left-16 max-w-3xl h-fit px-6 md:px-0">
                <div className="flex flex-col gap-6">
                    <h1 className="text-4xl md:text-6xl font-medium text-[#001C33] tracking-[-0.04em] leading-[1.2]">Shop from China. <br /> Without the struggle.</h1>
                    <p className="text-sm tracking-[-0.04em] leading-[1.2] font-medium text-[#3B3F41]">We make global shopping effortless purchase, inspect, and ship from any Chinese <br /> marketplace, all in one clean, modern interface.</p>
                </div>
                <div className="w-full max-w-2xl">
                    <SearchBar onSearch={handleSearch} className='shadow-xl' />
                </div>
            </div>

            {/* Features section positioned at the bottom */}
            <div className='absolute z-20 bottom-8 left-0 w-full'>
                <Features />
            </div>

            <div className="absolute z-10 top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-primary-300"></div>
        </div>
    )
}

export default Hero