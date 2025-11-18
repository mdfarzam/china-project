'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { ChevronDown, TextAlignJustify, X, Handbag, User, Globe, LogOut, Settings, Heart, Package } from 'lucide-react'

// Navigation data structure
const navLinks = [
  {
    href: '/about',
    label: 'About',
    hasDropdown: false,
  },
  {
    href: '/categories',
    label: 'Categories',
    hasDropdown: true,
    dropdownItems: [
      { href: '/categories/electronics', label: 'Electronics' },
      { href: '/categories/clothing', label: 'Clothing' },
      { href: '/categories/home', label: 'Home & Garden' },
      { href: '/categories/beauty', label: 'Beauty & Personal Care' },
    ],
  },
  {
    href: '/forwarding',
    label: 'Forwarding',
    hasDropdown: true,
    dropdownItems: [
      { href: '/forwarding/express', label: 'Express Forwarding' },
      { href: '/forwarding/standard', label: 'Standard Forwarding' },
      { href: '/forwarding/bulk', label: 'Bulk Shipping' },
    ],
  },
  {
    href: '/diy-order',
    label: 'DIY Order',
    hasDropdown: false,
  },
  {
    href: '/affiliate-referral',
    label: 'Affiliate & Referral',
    hasDropdown: false,
  },
]

const languages = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
]

const profileMenuItems = [
  { href: '/profile', label: 'My Profile', icon: User },
  { href: '/orders', label: 'My Orders', icon: Package },
  { href: '/wishlist', label: 'Wishlist', icon: Heart },
  { href: '/settings', label: 'Settings', icon: Settings },
  { href: '/logout', label: 'Logout', icon: LogOut, divider: true },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang)
    setOpenDropdown(null)
    // Add your language change logic here
  }

  // Reusable Desktop Dropdown Component
  const DesktopDropdown = ({ link }) => {
    if (!link.hasDropdown) return null

    return (
      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-neutral-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto z-50">
        <div className="py-2">
          {link.dropdownItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block px-4 py-2 text-sm text-neutral-1000 hover:bg-neutral-100 hover:text-primary-500 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    )
  }

  // Reusable Mobile Dropdown Component
  const MobileDropdown = ({ link, linkKey }) => {
    if (!link.hasDropdown) return null

    return (
      <div className="w-full border-b border-neutral-200">
        <button
          className="w-full flex items-center justify-between py-3 hover:text-primary-500 transition-colors"
          onClick={() => toggleDropdown(linkKey)}
        >
          <span>{link.label}</span>
          <ChevronDown
            className={`w-5 h-5 transition-transform duration-300 ${
              openDropdown === linkKey ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            openDropdown === linkKey ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pl-4 pb-2 flex flex-col gap-0">
            {link.dropdownItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="py-2.5 text-sm text-neutral-700 hover:text-primary-500 hover:pl-2 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Reusable Dropdown Menu Component
  const DropdownMenu = ({ isOpen, onClose, children, position = 'right' }) => {
    if (!isOpen) return null

    return (
      <>
        <div
          className="fixed inset-0 z-40"
          onClick={onClose}
        />
        <div
          className={`absolute top-full mt-2 ${position === 'right' ? 'right-0' : 'left-0'} w-56 bg-white rounded-lg shadow-lg border border-neutral-200 z-50`}
        >
          {children}
        </div>
      </>
    )
  } 

  return (
    <div
      className={`w-[91%] mx-auto h-fit flex flex-col z-50 transition-colors duration-500 fixed top-6 left-1/2 -translate-x-1/2 rounded-2xl ${
        isMenuOpen || scrolled ? 'bg-transparent backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      {/* Main Navbar */}
      <div className="w-full px-6 flex items-center justify-between py-2 md:py-4 px-0 border border-neutral-400 rounded-2xl font-medium">

        {/* Logo */}
        <div className="w-fit flex items-center justify-between">
          <Link href="/" className='flex items-center gap-2'>
            <Image src="/logo.svg" alt="logo" width={36} height={26} />
            <p className='text-[#0091FE] font-medium text-lg'>Cartigo</p>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center text-sm lg:text-base text-neutral-800 font-medium gap-4 lg:gap-6 leading-[120%]">
          {navLinks.map((link, index) => (
            <div key={index} className="relative group">
              {link.hasDropdown ? (
                <>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 hover:text-primary-500 transition-colors"
                  >
                    {link.label}
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                  </Link>
                  <DesktopDropdown link={link} />
                </>
              ) : (
                <Link href={link.href} className="hover:text-primary-500 transition-colors">
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Right Side Icons - Desktop */}
        <div className="hidden md:flex items-center gap-4 font-medium">
          {/* Language Dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-2 px-3 py-2 text-neutral-1000 hover:text-primary-500 transition-colors rounded-lg hover:bg-neutral-100"
              onClick={() => toggleDropdown('language-desktop')}
            >
              <span className="text-sm text-[#14181A] font-medium">{selectedLanguage.label}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  openDropdown === 'language-desktop' ? 'rotate-180' : ''
                }`}
              />
            </button>
            <DropdownMenu
              isOpen={openDropdown === 'language-desktop'}
              onClose={() => setOpenDropdown(null)}
            >
              <div className="py-2">
                {languages.map((lang, index) => (
                  <button
                    key={index}
                    onClick={() => handleLanguageChange(lang)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm text-neutral-1000 hover:bg-neutral-100 transition-colors ${
                      selectedLanguage.code === lang.code ? 'bg-primary-50 text-primary-600' : ''
                    }`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            </DropdownMenu>
          </div>

          {/* Cart/Handbag Icon */}
          <Link
            href="/cart"
            className="relative p-2 text-neutral-900 hover:text-primary-500 transition-colors"
          >
            <Handbag className="w-5 h-5" />
            {/* Cart badge can be added here */}
          </Link>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              className="p-2 text-neutral-900 hover:text-primary-500 transition-colors rounded-lg hover:bg-neutral-100"
              onClick={() => toggleDropdown('profile-desktop')}
            >
              <User className="w-5 h-5" />
            </button>
            <DropdownMenu
              isOpen={openDropdown === 'profile-desktop'}
              onClose={() => setOpenDropdown(null)}
            >
              <div className="py-2">
                {profileMenuItems.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={index}>
                      {item.divider && <div className="my-2 border-t border-neutral-200" />}
                      <Link
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-neutral-1000 hover:bg-neutral-100 hover:text-primary-500 transition-colors"
                        onClick={() => setOpenDropdown(null)}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{item.label}</span>
                      </Link>
                    </div>
                  )
                })}
              </div>
            </DropdownMenu>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-neutral-1000 cursor-pointer transition-transform duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="relative w-7 h-7 flex items-center justify-center">
            <TextAlignJustify
              className={`absolute transition-all duration-300 ${
                isMenuOpen ? 'opacity-0 scale-75 rotate-90' : 'opacity-100 scale-100 rotate-0'
              }`}
            />
            <X
              className={`absolute transition-all duration-300 ${
                isMenuOpen ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 -rotate-90'
              }`}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`flex flex-col md:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-[1000px] opacity-100 pb-4' : 'max-h-0 opacity-0 pb-0'
        }`}
      >
        <div className="flex flex-col items-start px-6 pt-2">
          <div className="flex flex-col items-start w-full text-base text-neutral-1000 font-medium gap-0 leading-[120%]">
            {/* Home Link */}
            <Link
              href="/"
              className="w-full py-3 border-b border-neutral-200 hover:text-primary-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            {/* Navigation Links */}
            {navLinks.map((link, index) => {
              const linkKey = `nav-${index}`
              if (link.hasDropdown) {
                return <MobileDropdown key={linkKey} link={link} linkKey={linkKey} />
              }
              return (
                <Link
                  key={linkKey}
                  href={link.href}
                  className="w-full py-3 border-b border-neutral-200 hover:text-primary-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            })}

            {/* Mobile Cart */}
            <Link
              href="/cart"
              className="w-full flex items-center gap-3 py-3 border-b border-neutral-200 hover:text-primary-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Handbag className="w-5 h-5" />
              <span>Cart</span>
            </Link>

            {/* Mobile Language Dropdown */}
            <div className="w-full border-b border-neutral-200">
              <button
                className="w-full flex items-center justify-between py-3 hover:text-primary-500 transition-colors"
                onClick={() => toggleDropdown('language-mobile')}
              >
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5" />
                  <span>Language</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>{selectedLanguage.flag}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openDropdown === 'language-mobile' ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openDropdown === 'language-mobile' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pl-4 pb-2 flex flex-col gap-0">
                  {languages.map((lang, index) => (
                    <button
                      key={index}
                      onClick={() => handleLanguageChange(lang)}
                      className={`w-full flex items-center gap-3 py-2.5 text-sm text-left transition-colors ${
                        selectedLanguage.code === lang.code
                          ? 'text-primary-600'
                          : 'text-neutral-700 hover:text-primary-500 hover:pl-2'
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Profile Dropdown */}
            <div className="w-full border-b border-neutral-200">
              <button
                className="w-full flex items-center justify-between py-3 hover:text-primary-500 transition-colors"
                onClick={() => toggleDropdown('profile-mobile')}
              >
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5" />
                  <span>Account</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openDropdown === 'profile-mobile' ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openDropdown === 'profile-mobile' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pl-4 pb-2 flex flex-col gap-0">
                  {profileMenuItems.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <div key={index}>
                        {item.divider && <div className="my-2 border-t border-neutral-200" />}
                        <Link
                          href={item.href}
                          className="flex items-center gap-3 py-2.5 text-sm text-neutral-700 hover:text-primary-500 hover:pl-2 transition-all"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <Icon className="w-4 h-4" />
                          <span>{item.label}</span>
                        </Link>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
