import React from 'react'
import Link from 'next/link'

function Button({ children, variant = 'primary', href, fullWidth = false }) {
  const baseClasses = `inline-flex text-base items-center justify-center text-neutral-50 px-6 py-3 rounded-full transition-colors ${
    variant === 'primary' 
      ? 'bg-linear-to-b from-primary-400 to-primary-500 hover:bg-primary-300' 
      : 'bg-neutral-500 hover:bg-neutral-600 text-neutral-900'
  } ${fullWidth ? 'w-full' : ''}`
  
  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    )
  }
  
  return (
    <button className={baseClasses}>
      {children}
    </button>
  )
}

export default Button