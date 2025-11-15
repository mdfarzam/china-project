import React from 'react'

// --- Data ---
// Updated to remove 'icon' and 'color', and include the 'imageUrl' directly.
const features = [
    {
      title: "Purchase Orders",
      description: "Share your product link; we'll handle the purchase directly from trusted Chinese marketplaces.",
      imageUrl: "/features/Purchase_Orders.png", 
    },
    {
      title: "Ship to Warehouse",
      description: "All your items will be delivered safely to our warehouse in China, ready for inspection and consolidation.",
      imageUrl: "/features/Ship_to_Warehouse.png", 
    },
    {
      title: "Quality Check",
      description: "Each item is carefully checked for accuracy, condition, and quality before it's approved for shipment.",
      imageUrl: "/features/Quality_Check.png", 
    },
    {
      title: "Global Shipping",
      description: "Your items are consolidated into one parcel and shipped worldwide through reliable, trackable logistics partners.",
      imageUrl: "/features/Global_Shipping.png", 
    },
];

// Component to render a single feature card, strictly using the user's provided classes
const FeatureItem = ({ title, description, imageUrl }) => {
    // Use an inline style object for the background image property
    const bgStyle = {
        // Now using the image URL passed directly from the array
        backgroundImage: `url(${imageUrl})`,
    };

    return (
        // Inner item structure and classes maintained
        <div className="flex flex-col gap-4"> 
            
            {/* Image Container */}
            <div className="bg-primary-50 border-[.5px] border-neutral-500 w-full aspect-4/3 rounded-xl overflow-hidden">
                {/* Dynamic Background Image setup */}
                <div 
                    className='w-full h-full bg-cover bg-center'
                    style={bgStyle}
                    aria-label={`Visual representation for ${title}`}
                >
                    {/* Placeholder for the image content */}
                </div>
            </div>
            
            {/* Text Content */}
            <div className="flex flex-col gap-1">
                <h3 className='text-lg text-neutral-1000'>{title}</h3>
                <p className='text-neutral-800 text-sm font-medium'>{description}</p>
            </div>
        </div>
    );
};


// Main Service Component (Exported as App for the React environment)
function App() { // Renamed from Service to App for export
  return (
    // Outer container classes maintained
    <div className='flex flex-col w-full h-fit py-16 px-16 gap-10 bg-neutral-50 font-medium'>
        
        {/* Title maintained */}
        <h2 className='text-5xl text-neutral-1000 tracking-[-0.04em] leading-[1.2]'>One-Stop Service with Us</h2>
        
        {/* This container uses a responsive grid to ensure all 4 items display horizontally 
          on larger screens while maintaining the required gap-8. 
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 h-fit tracking-[-0.04em] leading-[1.2]" > 
            
            {/* Using .map() to dynamically render all features */}
            {features.map((feature, index) => (
                <FeatureItem 
                    key={index}
                    title={feature.title}
                    description={feature.description}
                    // Passing the direct image URL
                    imageUrl={feature.imageUrl}
                />
            ))}
            <div className="w-6xl mx-auto h-[1px] bg-[#E6E9EB] mt-8" />
        </div>
        
    </div>
  )
}

export default App
