"use client";

import Header from "@/components/Header";
import { Bell, ShoppingCart, Users, Search, SlidersHorizontal } from "lucide-react";

export default function CombinedPage() {
  const products = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
      brand: "MCHOSE",
      title: "G87 V2 E-Sports Custom Mechanical Keyboard",
      description: "G87 V2 Custom Mechanical Keyboard [0.125mm floating design, ARGB]",
      price: 29.74,

      promo: "Govt Subsidy\nSave up to\n15%\nFree SF Shipping",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      brand: "MCHOSE",
      title: "Ace 68 Air Magnetic Axis",
      description: "MCHOSE Ace 68 Air Magnetic Axis Mechanical Keyboard — 0.001mm precision, 0.08ms tournament latency",
      price: 38.04,

      promo: null,
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      brand: "Lenovo",
      title: "Cool Wired Keyboard & Mouse Combo",
      description: "Lenovo wired keyboard + mouse combo for laptops and desktops",
      price: 4.0,

      promo: null,
    },
    {
      id: 44,
      image: "https://images.unsplash.com/photo-1484807352052-23338990c6c6",
      brand: "MCHOSE",
      title: "K99 V2 Custom Mechanical Keyboard",
      description: "MCHOSE K99 V2 custom mechanical keyboard with 8800mAh large battery",
      price: 52.19,

      promo: "Govt Subsidy\nSave up to\n15%\nFree SF Shipping",
    },



  ];

  return (
    <div className="min-h-screen bg-[#111111] text-[#e5e5e5]">

      <Header />

      {/* SEARCH HERO */}
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm mb-6 text-[#9ca3af]">
          <a className="text-[var(--primary-500)] cursor-pointer">Home</a>
          <span>/</span>
          <span className="font-medium text-[#e5e5e5]">Search Result</span>
        </div>

        <p className="text-base">
          We searched for <span className="font-medium">"keyboard"</span> and found the following products.
        </p>

        <div className="flex items-center gap-4 mt-8">
          <span className="px-3 py-1 text-sm font-medium rounded bg-[var(--primary-500)] text-black">Keyboard</span>
          <span className="text-[#9ca3af]">1688  results</span>
          <button className="px-3 py-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded text-sm text-[#e5e5e5] hover:border-[#3a3a3a]">Categories</button>
          <button className="flex items-center gap-2 px-3 py-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded text-sm hover:border-[#3a3a3a]">
            <SlidersHorizontal className="w-4 h-4 text-[#9ca3af]" />
            Sort By
          </button>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.id} className="group rounded-lg bg-[#1b1b1b] overflow-hidden hover:shadow-lg transition">
              <div className="relative w-full aspect-square bg-[#1a1a1a] overflow-hidden">
                <img src={p.image} className="w-full h-full object-cover transition group-hover:scale-105" />


              </div>

              <div className="p-4 space-y-1">
                <span className="text-xs font-medium text-black px-2 py-0.5 rounded-md backdrop-blur-md bg-neutral-600 border border-white/30 inline-flex items-center gap- mb-2">
                  {/* <img src="/mnt/data/2f9034c5-1b71-44c9-86c2-bda132fc1b8a.png" className="w-4 h-4" /> */}
                  {p.brand}
                </span>


                <h3 className="text-sm font-medium text-white/90 leading-snug">

                  {p.title}
                </h3>
                <p className="text-xs text-[#b3b3b3] leading-relaxed line-clamp-2">{p.description}</p>

                <div className="flex items-center justify-between pt-2">
                  <div className="text-xl font-medium text-[var(--primary-500)]">USD {p.price.toFixed(2)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .icon-btn {
          @apply text-[#e5e5e5] transition;
        }
        .icon-btn:hover {
          @apply text-[var(--primary-500)];
        }
        .notif-badge {
          @apply absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[var(--primary-500)] text-black flex items-center justify-center text-[10px] font-medium;
        }
      `}</style>
    </div>
  );
}


