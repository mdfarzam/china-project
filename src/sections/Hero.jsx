'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import SearchBar from '@/components/SearchBar'
import Tag from '@/components/Tag'
import { Check, Plane } from 'lucide-react'
import GridBg from '@/components/GridBg'

function Hero() {
  const router = useRouter()

  const handleSearch = (query) => {
    if (query) router.push(`/search?q=${encodeURIComponent(query)}`)
  }

  return (
    <>
      {/* HERO SECTION */}
      <div className="relative bg-[#FBFBFD] w-full h-screen flex items-center justify-center overflow-hidden">

        {/* Background */}
        <div className="absolute -inset-12 translate-y-10">
          <GridBg />
        </div>

        {/* Top Left */}
        <div className="absolute top-40 left-12 w-48 h-48 opacity-90">
          <Image
            src="/Frame 114.png"
            alt=""
            width={192}
            height={192}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Top Right */}
        <div className="absolute top-44 right-8 w-48 h-48 opacity-90">
          <Image
            src="/Frame 115.png"
            alt=""
            width={192}
            height={192}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Bottom Left */}
        <div className="absolute bottom-2 left-28 w-44 h-44 opacity-90">
          <Image
            src="/Frame 118.png"
            alt=""
            width={176}
            height={176}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Bottom Right */}
        <div className="absolute bottom-8 right-30 w-38 h-38 opacity-90">
          <Image
            src="/Frame 117.png"
            alt=""
            width={152}
            height={152}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Foreground */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-5xl px-4 mt-34">

          <Tag
            label="Ship from china easily"
            color="gray"
            icon={<Plane className="-rotate-45 size-4" />}
          />

          <h1 className="text-5xl md:text-6xl font-medium text-neutral-1000 tracking-tight leading-tight mt-5">
            Shop from China.<br />Without the struggle.
          </h1>

          <p className="mt-4">
            We make global shopping effortless — purchase, inspect, and ship from any Chinese <br />
            marketplace, all in one clean, modern interface.
          </p>

          <div className="w-lg mt-8">
            <SearchBar onSearch={handleSearch} />
          </div>

          {/* Feature List */}
          <div className="flex items-center gap-8 mt-8 flex-wrap justify-center">
            {["Place Orders", "QC & Storage", "Submit Parcels", "INTL Ship"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#33A6FE] flex items-center justify-center">
                  <Check size={12} className="text-white" strokeWidth={3} />
                </div>
                <span className="text-neutral-800 font-medium text-sm">
                  {item}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* DASHBOARD SECTION */}
      <div className="relative bg-[#FBFBFD] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <Image
            src="/Frame 2147207703.png"
            alt="Dashboard"
            width={1400}
            height={800}
            className="w-full h-auto"
          />
        </div>
      </div>
    </>
  )
}

export default Hero
