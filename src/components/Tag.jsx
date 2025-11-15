import React from "react"

const colorMap = {
  blue: {
    text: "text-[#33A6FE]",
    border: "#0091FE",
    bg: "bg-[#EBFBFE]/50",
  },
}

const Tag = ({ label = "New", color = "blue" }) => {
  const colors = colorMap[color] || colorMap.blue

  return (
    <span
      className={`${colors.text} ${colors.bg} 
      text-sm font-medium px-3 py-[2px] rounded-full border`}
      style={{ borderColor: colors.border }}
    >
      {label}
    </span>
  )
}

export default Tag
