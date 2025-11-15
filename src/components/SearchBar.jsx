'use client'
import React, { useState } from 'react'
import { Search } from 'lucide-react'
import Button from './Button'

function SearchBar({
  onSearch,
  placeholder = 'Enter the link or keyword',
  className = '',
}) {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchQuery.trim() && onSearch) {
      onSearch(searchQuery.trim())
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full max-w-xl flex items-center bg-[#EEF1F1] border border-[#DDE1E4] rounded-full overflow-hidden shadow-sm px-4 py-2 ${className}`}
    >
      {/* Icon */}
      <div className="flex items-center justify-center pr-3">
        <Search className="w-5 h-5 text-[#5C5F66]" />
      </div>

      {/* Input */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder={placeholder}
        className="flex-1 bg-transparent text-[#101113] placeholder:text-[#5C5F66] text-base px-3 focus:outline-none"
      />

      {/* Search Button */}
      <button
        type="submit"
        className="bg-gradient-to-r from-[#0091FE] to-[#33A6FE] text-white font-medium text-sm rounded-full px-8 py-3 -mr-2  transition-all hover:opacity-90"
      >
        Search
      </button>
    </form>
  )
}

export default SearchBar
