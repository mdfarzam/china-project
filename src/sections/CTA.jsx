'use client'
import { useRouter } from 'next/navigation'
import SearchBar from '@/components/SearchBar'
import Tag from '@/components/Tag'
import { Plane } from 'lucide-react'
import GridBg from '@/components/GridBg'
import Image from 'next/image'

function CTA() {
  const router = useRouter()

  const handleSearch = (query) => {
    if (query) router.push(`/search?q=${encodeURIComponent(query)}`)
  }

  return (
    <div className="relative w-full bg-[#FBFBFD] overflow-hidden pb-32">

      {/* Main Content */}
      <div className="relative flex flex-col items-start text-left max-w px-14 mx-auto tracking-[-0.04em] leading-[1.2]">

        <Tag
          label="Ship from china easily"
          color="gray"
          icon={<Plane className="-rotate-45 size-4" />}
        />

        {/* H2 – consistent */}
        <h2 className="text-5xl md:text-6xl font-medium text-neutral-1000 tracking-[-0.04em] leading-[1.2] mt-6">
          Shop from China.<br />
          Without the struggle.
        </h2>

        {/* Paragraph – consistent */}
        <p className="text-base mt-6 max-w-2xl">
          We make global shopping effortless — purchase, inspect, and ship from any
          Chinese marketplace, all in one clean, modern interface.
        </p>

        <div className="w-full max-w-2xl mt-8">
          <SearchBar />
        </div>

        {/* Floating images */}
        <div>
          <div className="absolute -inset-54 translate-y-0 left-120">
            <GridBg />
          </div>

          {/* Top Right - Blue */}
          <div className="absolute top-0 right-86 w-46 h-46 opacity-90">
            <Image src="/Frame 114.png" alt="" width={128} height={128} />
          </div>

          {/* Orange / Yellow */}
          <div className="absolute top-10 right-18 w-42 h-42 opacity-90">
            <Image src="/Frame 115.png" alt="" width={128} height={128} />
          </div>

          {/* Pink Folder */}
          <div className="absolute -bottom-8 right-80 w-44 h-44 opacity-90">
            <Image src="/Frame 118.png" alt="" width={128} height={128} />
          </div>

          {/* Green user */}
          <div className="absolute -bottom-10 right-30 w-38 h-38 opacity-90">
            <Image src="/Frame 117.png" alt="" width={128} height={128} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default CTA
