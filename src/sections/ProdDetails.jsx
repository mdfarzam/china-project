"use client";

import React, { useState, useRef } from "react";
import {
  Star,
  ShoppingCart,
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight,
  Check,
  Package,
  Truck,
  Shield,
  MessageSquare,
} from "lucide-react";
import Header from "@/components/Header";

export default function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState("sky-blue");
  const [selectedStorage, setSelectedStorage] = useState("256GB");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("details");
  const [messageText, setMessageText] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const imageRef = useRef(null);
  const detailsLeftRef = useRef(null);

  const images = [
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200&h=900&fit=crop",
    "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=1200&h=900&fit=crop",
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200&h=900&fit=crop",
    "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=1200&h=900&fit=crop",
  ];

  const colors = [
    { name: "Sky Blue", value: "sky-blue", color: "bg-blue-300" },
    { name: "Space Gray", value: "space-gray", color: "bg-gray-700" },
    { name: "Silver", value: "silver", color: "bg-gray-300" },
    { name: "Midnight", value: "midnight", color: "bg-gray-900" },
  ];

  const storage = [
    { size: "256GB", price: 93900 },
    { size: "512GB", price: 113900 },
    { size: "1TB", price: 153900 },
  ];

  const features = [
    "Apple M4 chip with 10-core CPU",
    "8-core GPU for graphics",
    "16GB Unified Memory",
    "13.6-inch Liquid Retina display",
    "Up to 18 hours battery life",
    "MagSafe 3 charging port",
    "1080p FaceTime HD camera",
    "Two Thunderbolt / USB 4 ports",
  ];

  const specs = [
    { label: "Average time to warehouse", value: "--" },
    { label: "Sales", value: "156" },
    { label: "Weight (g)", value: "--" },
    { label: "Volume (cm)", value: "--" },
  ];

  const productDetails = {
    highlights: [
      "Non-magnetic buckle design - safe for laptops",
      "Can be used as a mouse pad",
      "Waterproof PU material",
      "Protective cover for multiple brands",
      "Lightweight and portable design",
    ],
    description:
      "Premium laptop sleeve with waterproof protection and versatile functionality. Features a non-magnetic buckle system that won't interfere with your device, and the surface can double as a comfortable mouse pad. Perfect for professionals on the go.",
  };

  return (
    <div className="min-h-screen bg-[#111111] text-[#e5e5e5]">
      {/* header */}
      <Header />

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">


        {/* main grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* LEFT: Images (sticky on lg) */}
          <div
            ref={imageRef}
            className="space-y-4 sticky top-6 self-start"
          >
            {/* top breadcrumb + quick info */}
            <div className="">
              <div className="flex items-center gap-2 text-sm mb-3 text-[#9ca3af]">
                <a className="text-[var(--primary-500)] cursor-pointer">Home</a>
                <span>/</span>
                <span className="font-medium text-[#e5e5e5]">Product</span>
                <span>/</span>
                <span className="text-[#9ca3af]">MacBook Air 2025</span>
              </div>

              <p className="text-base text-[#b3b3b3]">
                Premium Apple laptop — compact, powerful and light.
              </p>
            </div>
            <div className="relative aspect-[4/3] bg-[#1a1a1a] rounded-2xl overflow-hidden group border border-[#2a2a2a]">
              <img
                src={images[selectedImage]}
                alt="Product"
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />

              <button
                onClick={() =>
                  setSelectedImage((selectedImage - 1 + images.length) % images.length)
                }
                aria-label="previous image"
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-[#1a1a1a]/80 rounded-full opacity-0 group-hover:opacity-100 transition hover:bg-[#1a1a1a]"
              >
                <ChevronLeft className="w-5 h-5 text-[#e5e5e5]" />
              </button>

              <button
                onClick={() => setSelectedImage((selectedImage + 1) % images.length)}
                aria-label="next image"
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-[#1a1a1a]/80 rounded-full opacity-0 group-hover:opacity-100 transition hover:bg-[#1a1a1a]"
              >
                <ChevronRight className="w-5 h-5 text-[#e5e5e5]" />
              </button>

              
            </div>

            {/* thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-[4/3] rounded-lg overflow-hidden border-2 transition ${selectedImage === idx
                      ? "border-[var(--primary-500)]"
                      : "border-[#2a2a2a] hover:border-[#3a3a3a]"
                    }`}
                  aria-label={`view ${idx + 1}`}
                >
                  <img src={img} alt={`view ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* share / favorite visible on lg */}
            <div className="hidden lg:flex gap-3 pt-4">
              <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-[#2a2a2a] rounded-lg transition hover:bg-[#1a1a1a]">
                <Share2 className="w-5 h-5 text-[#9ca3af]" />
                <span className="text-sm text-[#e5e5e5]">Share</span>
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-[#2a2a2a] rounded-lg transition hover:bg-[#1a1a1a]">
                <Heart className="w-5 h-5 text-[#9ca3af]" />
                <span className="text-sm text-[#e5e5e5]">Favorite</span>
              </button>
            </div>
          </div>

          {/* RIGHT: Product info */}
          <div className="space-y-6 mt-16">
            <div>
              <div className="flex items-center gap-2 text-sm text-[#9ca3af] mb-2">
                <span>Apple</span>
                <span>•</span>
                <span>In Stock</span>
              </div>

              <h1 className="text-3xl font-medium mb-3 leading-tight text-[#e5e5e5]">
                Apple 2025 MacBook Air
              </h1>

              <p className="text-lg text-[#b3b3b3] mb-4">
                13-inch, Apple M4 chip with 10-core CPU and 8-core GPU, 16GB Unified
                Memory
              </p>

              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-semibold text-[var(--primary-500)]">₹93,900</span>
                <span className="text-xl text-[#9ca3af] line-through">₹99,000</span>
                <span className="px-2 py-1 bg-[#1a1a1a] text-[var(--primary-500)] text-sm rounded">-6% OFF</span>
              </div>

              <p className="text-sm text-[#9ca3af] mt-2">Inclusive of all taxes</p>
            </div>

            {/* color selection */}
            <div>
              <h3 className="text-sm font-semibold mb-3 text-[#e5e5e5]">
                Color: {colors.find((c) => c.value === selectedColor)?.name}
              </h3>
              <div className="flex gap-3">
                {colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setSelectedColor(color.value)}
                    className={`w-12 h-12 rounded-full ${color.color} border-2 transition transform ${selectedColor === color.value
                        ? "border-[var(--primary-500)] scale-110"
                        : "border-[#2a2a2a] hover:border-[#3a3a3a]"
                      }`}
                    aria-label={color.name}
                  >
                    {selectedColor === color.value && (
                      <div className="w-full h-full flex items-center justify-center">
                        <Check className="w-5 h-5 text-black drop-shadow" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

           

            {/* quantity + actions */}
            <div className="space-y-3">
              <div className="flex gap-4 items-center">
                <div className="flex items-center border border-[#2a2a2a] rounded-lg overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 hover:bg-[#1a1a1a] transition"
                    aria-label="decrease quantity"
                  >
                    -
                  </button>
                  <span className="px-6 py-3 border-x border-[#2a2a2a]">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-3 hover:bg-[#1a1a1a] transition"
                    aria-label="increase quantity"
                  >
                    +
                  </button>
                </div>

                <button className="flex-1 bg-[var(--primary-500)] text-black font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" /> Add to Cart
                </button>
              </div>

              <button className="w-full bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#3a3a3a] text-sm text-[#e5e5e5] font-semibold py-3 rounded-lg transition">
                Buy Now
              </button>

              <p className="text-xs text-[#9ca3af] text-center">
                Minimum purchase quantity: 2
              </p>
            </div>

            

            {/* single product data */}
            <div className="border border-[#2a2a2a] rounded-xl p-6 bg-[#1a1a1a]/60">
              <h3 className="font-semibold mb-4 text-[#e5e5e5]">Single Product Data</h3>
              <div className="space-y-3">
                {specs.map((spec, idx) => (
                  <div key={idx} className="flex justify-between py-2 border-b border-[#2a2a2a] last:border-0">
                    <span className="text-sm text-[#9ca3af]">{spec.label}</span>
                    <span className="text-sm font-medium text-[#e5e5e5]">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* disclaimer */}
            <div className="border border-[#2a2a2a] rounded-xl p-6 bg-[#1a1a1a]/60">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-[var(--primary-500)]/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-4 h-4 text-[var(--primary-500)]" />
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold mb-2 text-[#e5e5e5]">Disclaimer</h3>
                  <p className="text-xs text-[#9ca3af] leading-relaxed mb-3">
                    All products available for shopping agent service displayed on acbuy are from third-party shopping platforms and not directly sold by acbuy. Thus, acbuy does not take liability and legal responsibility for issues caused by intellectual property rights infringement and goods copyright infringement.
                  </p>

                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreedToTerms}
                      onChange={(e) => setAgreedToTerms(e.target.checked)}
                      className="mt-1 accent-[var(--primary-500)]"
                    />
                    <span className="text-sm text-[#e5e5e5]">I have read and agreed</span>
                  </label>
                </div>
              </div>
            </div>

            {/* key features */}
            <div className="border border-[#2a2a2a] rounded-xl p-6 bg-[#1a1a1a]/60">
              <h3 className="font-semibold mb-4 text-[#e5e5e5]">Key Features</h3>
              <div className="grid grid-cols-1 gap-3">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#e5e5e5]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* offers */}
            <div className="border border-[#2a2a2a] rounded-xl p-6 bg-[#1a1a1a]/60">
              <h3 className="font-semibold mb-4 text-[#e5e5e5]">Available Offers</h3>
              <div className="space-y-3 text-sm">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--primary-500)]/20 flex items-center justify-center flex-shrink-0">
                    💳
                  </div>
                  <div>
                    <p className="font-medium text-[#e5e5e5]">Bank Offer</p>
                    <p className="text-[#9ca3af]">Up to ₹5,000 discount on select Credit Cards</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    💰
                  </div>
                  <div>
                    <p className="font-medium text-[#e5e5e5]">Cashback</p>
                    <p className="text-[#9ca3af]">Up to ₹2,817 cashback as Amazon Pay Balance</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    📱
                  </div>
                  <div>
                    <p className="font-medium text-[#e5e5e5]">No Cost EMI</p>
                    <p className="text-[#9ca3af]">EMI starts at ₹4,552 per month</p>
                  </div>
                </div>
              </div>
              
            </div>
            {/* leaving message */}
            <div className="border border-[#2a2a2a] rounded-xl p-6 bg-[#1a1a1a]/60">
              <h3 className="font-semibold mb-3 text-[#e5e5e5]">Leaving A Message</h3>
              <textarea
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                placeholder="If you have any other needs, please leave a message and our agent will assist you."
                className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-sm text-[#e5e5e5] placeholder-[#9ca3af] focus:outline-none focus:border-[var(--primary-500)] transition min-h-[100px] resize-none"
              />
            </div>
          </div>
        </div>

        {/* product detail area with sticky left nav */}
        <div className="border-t border-[#2a2a2a] pt-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* left sticky nav */}
            <div ref={detailsLeftRef} className="lg:sticky lg:top-24 lg:self-start">
              <div className="border border-[#2a2a2a] rounded-xl p-6 bg-[#1a1a1a]/60">
                <h2 className="text-2xl font-semibold mb-6 text-[#e5e5e5]">Product Information</h2>

                <nav className="space-y-2">
                  <button
                    onClick={() => setActiveTab("details")}
                    className={`w-full text-left px-4 py-3 rounded-lg transition ${activeTab === "details" ? "bg-[var(--primary-500)] text-black" : "text-[#9ca3af] hover:bg-[#1a1a1a]"
                      }`}
                  >
                    <Package className="w-5 h-5 inline mr-2" />
                    Product Details
                  </button>

                  <button
                    onClick={() => setActiveTab("specifications")}
                    className={`w-full text-left px-4 py-3 rounded-lg transition ${activeTab === "specifications" ? "bg-[var(--primary-500)] text-black" : "text-[#9ca3af] hover:bg-[#1a1a1a]"
                      }`}
                  >
                    <MessageSquare className="w-5 h-5 inline mr-2" />
                    Specification Parameters
                  </button>

                  <button
                    onClick={() => setActiveTab("shipping")}
                    className={`w-full text-left px-4 py-3 rounded-lg transition ${activeTab === "shipping" ? "bg-[var(--primary-500)] text-black" : "text-[#9ca3af] hover:bg-[#1a1a1a]"
                      }`}
                  >
                    <Truck className="w-5 h-5 inline mr-2" />
                    Shopping Agent Notes
                  </button>

                  <button
                    onClick={() => setActiveTab("service")}
                    className={`w-full text-left px-4 py-3 rounded-lg transition ${activeTab === "service" ? "bg-[var(--primary-500)] text-black" : "text-[#9ca3af] hover:bg-[#1a1a1a]"
                      }`}
                  >
                    <Shield className="w-5 h-5 inline mr-2" />
                    After Sales Service
                  </button>
                </nav>

                <div className="mt-6 pt-6 border-t border-[#2a2a2a]">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3 text-[#9ca3af]">
                      <Truck className="w-5 h-5" />
                      <span>Free shipping on orders over ₹50,000</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#9ca3af]">
                      <Shield className="w-5 h-5" />
                      <span>1 year warranty included</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#9ca3af]">
                      <Package className="w-5 h-5" />
                      <span>Easy 30-day returns</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* right content */}
            <div className="space-y-8 min-h-screen">
              {activeTab === "details" && (
                <div className="space-y-6">
                  <div className="border border-[#2a2a2a] rounded-xl p-6 bg-[#1a1a1a]/60">
                    <h3 className="text-xl font-semibold mb-4 text-green-400">Product Highlights</h3>
                    <p className="text-[#e5e5e5] mb-4 leading-relaxed">{productDetails.description}</p>

                    <ul className="space-y-3">
                      {productDetails.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-[#e5e5e5]">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border border-[#2a2a2a] rounded-xl overflow-hidden">
                    <div className="bg-[#1a1a1a]/60 p-4 border-b border-[#2a2a2a]">
                      <p className="text-sm text-green-400 flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        Click on the image to translate the text
                      </p>
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-4 text-[#e5e5e5]">卖点：无磁不伤机，可当鼠标垫</h3>
                      <img src={images[0]} alt="Product detail" className="w-full rounded-lg" />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "specifications" && (
                <div className="border border-[#2a2a2a] rounded-xl p-6 bg-[#1a1a1a]/60">
                  <h3 className="text-xl font-semibold mb-6 text-green-400">Technical Specifications</h3>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 pb-4 border-b border-[#2a2a2a]">
                      <span className="text-[#9ca3af]">Processor</span>
                      <span className="text-[#e5e5e5]">Apple M4 with 10-core CPU</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pb-4 border-b border-[#2a2a2a]">
                      <span className="text-[#9ca3af]">Graphics</span>
                      <span className="text-[#e5e5e5]">8-core GPU</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pb-4 border-b border-[#2a2a2a]">
                      <span className="text-[#9ca3af]">Memory</span>
                      <span className="text-[#e5e5e5]">16GB Unified Memory</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pb-4 border-b border-[#2a2a2a]">
                      <span className="text-[#9ca3af]">Storage</span>
                      <span className="text-[#e5e5e5]">{selectedStorage} SSD</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pb-4 border-b border-[#2a2a2a]">
                      <span className="text-[#9ca3af]">Display</span>
                      <span className="text-[#e5e5e5]">13.6-inch Liquid Retina</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pb-4 border-b border-[#2a2a2a]">
                      <span className="text-[#9ca3af]">Battery Life</span>
                      <span className="text-[#e5e5e5]">Up to 18 hours</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <span className="text-[#9ca3af]">Color</span>
                      <span className="text-[#e5e5e5]">{colors.find((c) => c.value === selectedColor)?.name}</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "shipping" && (
                <div className="border border-[#2a2a2a] rounded-xl p-6 bg-[#1a1a1a]/60">
                  <h3 className="text-xl font-semibold mb-6 text-green-400">Shopping Agent Notes</h3>

                  <div className="space-y-4 text-[#e5e5e5]">
                    <p>Orders paid between 09:00-18:00 (Beijing Time) will be processed in 6 hours (except Sunday).</p>

                    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-4">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                          1
                        </div>
                        <div>
                          <p className="font-semibold mb-1 text-[#e5e5e5]">Seller → Acbuy designated warehouse</p>
                          <p className="text-sm text-[#9ca3af]">Freight: 0.55 USD</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                          2
                        </div>
                        <div>
                          <p className="font-semibold mb-1 text-[#e5e5e5]">Acbuy designated warehouse → Your Address</p>
                          <p className="text-sm text-[#9ca3af]">Estimate International Shipping Fee</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "service" && (
                <div className="border border-[#2a2a2a] rounded-xl p-6 bg-[#1a1a1a]/60">
                  <h3 className="text-xl font-semibold mb-6 text-green-400">After Sales Service</h3>

                  <div className="space-y-4 text-[#e5e5e5]">
                    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Return Policy</h4>
                      <p className="text-sm text-[#9ca3af]">30-day return policy for unopened products in original packaging.</p>
                    </div>

                    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Warranty</h4>
                      <p className="text-sm text-[#9ca3af]">1-year limited warranty from Apple. Extended warranty options available.</p>
                    </div>

                    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Customer Support</h4>
                      <p className="text-sm text-[#9ca3af]">24/7 customer support via email, phone, or live chat.</p>
                    </div>

                    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Technical Support</h4>
                      <p className="text-sm text-[#9ca3af]">Free technical support for the lifetime of your product.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* small style helpers to keep icon button hover consistent */}
      <style jsx>{`
        :root {
          --primary-500: #10b981; /* fallback accent — replace as needed in your global CSS */
        }

        /* small utility for icon hover consistent with your theme */
        .icon-btn {
          color: #e5e5e5;
          transition: color 0.15s ease;
        }
        .icon-btn:hover {
          color: var(--primary-500);
        }
      `}</style>
    </div>
  );
}
