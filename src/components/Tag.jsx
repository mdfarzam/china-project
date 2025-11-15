import React from "react";


const colorMap = {
  blue: {
    text: "text-[#33A6FE]",
    border: "#0091FE",
    bg: "bg-[#EBFBFE]/50",
  },
  gray: {
    text: "text-[#626668]",
    border: "#DDE1E4",
    bg: "bg-[#FBFBFD]",
  },
};

const Tag = ({ label = "New", color = "blue", icon = null }) => {
  const colors = colorMap[color] || colorMap.blue;

  return (
    <span
      className={`
        ${colors.text} ${colors.bg} 
        inline-flex items-center gap-2
        text-sm font-medium px-3 py-[4px]
        rounded-full border-1
      `}
      style={{ borderColor: colors.border }}
    >
      {/* Optional Icon */}
      {icon && <span className="text-base">{icon}</span>}

      {label}
    </span>
  );
};

export default Tag;
