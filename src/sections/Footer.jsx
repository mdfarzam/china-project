"use client"
import React from "react"
import { ArrowUpRight, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"
import { useRouter } from "next/navigation"
import Tag from "../components/Tag"
import SearchBar from '../components/SearchBar'

const Footer = () => {
  const router = useRouter()

  const handleSearch = (query) => {
    if (query) {
      router.push(`/search?q=${encodeURIComponent(query)}`)
    }
  }

  return (
    <footer className="w-full bg-[#FBFBFD] text-black pt-12 pb-12">
      {/* Top Divider */}
      <div className="w-full h-[1px] bg-[#E6E9EB]" />

      {/* Tagline + Search */}
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto py-8 pt-14 gap-6">
        <div>
          <h2 className="text-lg text-[#101113]/90 font-medium tracking-[-0.04em] leading-[1.2]">
            Shop From China, The Easy Way
          </h2>
          <p className="text-[#5C5F66] mt-2 font-medium tracking-[-0.04em] leading-[1.2]">
            Buy, check, and ship products from China — all in one seamless experience.
          </p>
        </div>

        {/* Redesigned Search Bar */}
        <div>
        <SearchBar onSearch={handleSearch} className="bg-[#EEF1F1] border border-[#DDE1E4] border-1"/>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="w-6xl mx-auto h-[1px] bg-[#E6E9EB] mb-6" />

      {/* Footer Columns */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 py-8 text-[#5C5F66]">
        {/* Logo */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img src="/logo.svg" alt="Cartigo" className="w-8 h-8" />
            <h2 className="text-xl font-semibold text-[#0091FE] tracking-[-0.04em] leading-[1.2]">
              Cartigo
            </h2>
          </div>
        </div>

        {/* Product & Service */}
        <div>
          <h3 className="font-medium mb-3 text-[#101113]/90 tracking-[-0.04em] leading-[1.2]">Product & Service</h3>
          <ul className="space-y-3 text-sm pt-1">
            <li>Products</li>
            <li>Services</li>
            <li>Appliances</li>
            <li className="flex items-center gap-2">
              Storage <Tag />
            </li>
            <li className="flex items-center gap-1">
              Lifestyle <ArrowUpRight size={20} className="text-gray-500" />
            </li>
          </ul>
        </div>

        {/* Shop Now */}
        <div>
          <h3 className="font-medium mb-3 text-[#101113]/90 tracking-[-0.04em] leading-[1.2]">Shop Now</h3>
          <ul className="space-y-3 text-sm pt-1">
            <li>Offers</li>
            <li>Promos</li>
            <li>Online Shop FAQ</li>
            <li className="flex items-center gap-2">
              Business Offer <Tag />
            </li>
            <li className="flex items-center gap-1">
              Student Offer <ArrowUpRight size={20} className="text-gray-500" />
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-medium mb-3 text-[#101113]/90 tracking-[-0.04em] leading-[1.2]">Support</h3>
          <ul className="space-y-3 text-sm pt-1">
            <li>Contact</li>
            <li className="flex items-center gap-1">
              Email Support <ArrowUpRight size={20} className="text-gray-500" />
            </li>
            <li className="flex items-center gap-1">
              Live Chat <ArrowUpRight size={20} className="text-gray-500" />
            </li>
            <li>Phone Support</li>
            <li className="flex items-center gap-1">
              Community <ArrowUpRight size={20} className="text-gray-500" />
            </li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="font-medium mb-3 text-[#101113]/90 tracking-[-0.04em] leading-[1.2]">About</h3>
          <ul className="space-y-3 text-sm pt-1">
            <li>Company Info</li>
            <li>Brand Guidelines</li>
            <li>Careers</li>
            <li className="flex items-center gap-2">
              Investors <Tag /> <ArrowUpRight size={20} className="text-gray-500" />
            </li>
            <li className="flex items-center gap-1">
              About Us <ArrowUpRight size={20} className="text-gray-500" />
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="w-6xl mx-auto h-[1px] bg-[#E6E9EB] my-6" />

      {/* Footer Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto text-[#A6A7AB]/90 text-xs tracking-[-0.04em] leading-[1.2] gap-4">
        <p>© 2023 Cadet UI. All Rights Reserved.</p>

        <div className="flex space-x-6 text-[#5C5F66]">
          <p>English</p>
          <p>Privacy</p>
          <p>Legal</p>
        </div>

        {/* Lucide Social Icons */}
        <div className="flex space-x-4">
          <a href="#" aria-label="Facebook">
            <Facebook className="w-5 h-5 text-gray-500 hover:text-[#0091FE] transition" />
          </a>
          <a href="#" aria-label="Instagram">
            <Instagram className="w-5 h-5 text-gray-500 hover:text-[#0091FE] transition" />
          </a>
          <a href="#" aria-label="Twitter">
            <Twitter className="w-5 h-5 text-gray-500 hover:text-[#0091FE] transition" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5 text-gray-500 hover:text-[#0091FE] transition" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
