'use client'
import { useRouter } from 'next/navigation'
import SearchBar from '@/components/SearchBar'
import Tag from '@/components/Tag'
import { AirplayIcon, Check, Plane } from 'lucide-react'


function Hero() {
    const router = useRouter()

    const handleSearch = (query) => {
        // Navigate to search results page or handle search
        if (query) {
            router.push(`/search?q=${encodeURIComponent(query)}`)
        }
    }

    return (
        <div className="relative w-full min-h-[85vh] bg-white flex items-center justify-center">
            <div className="flex flex-col items-center text-center max-w-5xl px-4 mt-44">

                {/* Top Tag */}
                <Tag
                    label="Ship from china easily"
                    color="gray"
                    icon={<Plane className='-rotate-45 size-4 ' />}
                />

                {/* Main Heading */}
                <h1 className="text-5xl md:text-6xl font-medium text-neutral-1000 tracking-[-0.04em] leading-[1.2] mt-5">
                    Shop from China.<br />Without the struggle.
                </h1>

                {/* Subtext */}
                <p className="text-sm font-medium text-neutral-850 mt-4 tracking-[-0.04em] leading-[1.2] ">
                    We make global shopping effortless purchase, inspect, and ship from any Chinese <br /> marketplace, all in one clean, modern interface.
                </p>

                {/* Search Bar */}
                <div className="w-lg mt-8">
                    <SearchBar />
                </div>

                {/* Bottom Features */}
                <div className="flex items-center gap-8 mt-8 flex-wrap justify-center tracking-[-0.04em] leading-[1.2]">

                    {[
                        "Place Orders",
                        "QC & Storage",
                        "Submit Parcels",
                        "INTL Ship",
                    ].map((item) => (
                        <div key={item} className="flex items-center gap-2">

                            {/* Blue check circle */}
                            <div className="w-5 h-5 rounded-full bg-[#33A6FE] flex items-center justify-center">
                                <Check size={12} className="text-white" strokeWidth={3} />
                            </div>

                            {/* Label */}
                            <span className="text-neutral-800 font-medium text-sm">
                                {item}
                            </span>
                        </div>
                    ))}
                </div>

                {/* dashboard */}
                <div className=""></div>

            </div>
        </div>
    )
}

export default Hero