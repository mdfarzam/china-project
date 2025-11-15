import React from 'react'

const stats = [
    {
      value: "20,000+",
      label: "orders fulfilled worldwide",
    },
    {
      value: "300,000",
      label: "Product sourced",
    },
    {
      value: "7-12 Days",
      label: "global shipping",
    },
    {
      value: "60+",
      label: "Countries served",
    },
];

const StatsSection = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py- bg-neutral-50">
          
            {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-start md:items-center text-left md:text-center">
                  
                    {/* Value: Large, blue, bold text */}
                    <p className="text-3xl sm:text-4xl md:text-5xl font-medium bg-linear-to-b from-primary-500 to-primary-400 bg-clip-text text-transparent leading-tight ">
                        {stat.value}
                    </p>
                    {/* Label: Subtext */}
                    <p className="text-sm sm:text-base font-medium text-neutral-900 mt-1 ">
                        {stat.label}
                    </p>
                </div>
            ))}
        </div>
    )
}


export default StatsSection