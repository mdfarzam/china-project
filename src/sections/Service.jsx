
const features = [
    {
      title: "Purchase Orders",
      description: "Share your product link we'll handle the purchase directly from trusted Chinese marketplaces.",
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


const FeatureItem = ({ title, description, imageUrl }) => {
    const bgStyle = {
        backgroundImage: `url(${imageUrl})`,
    };

    return (
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


function App() { 
  return (
    <div className='flex flex-col w-full h-fit py-16 px-16 gap-10 bg-neutral-50 font-medium'>
        
        <h2 className='text-5xl text-neutral-1000 tracking-[-0.04em] leading-[1.2]'>One-Stop Service with Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 h-fit tracking-[-0.04em] leading-[1.2]" > 
            {features.map((feature, index) => (
                <FeatureItem 
                    key={index}
                    title={feature.title}
                    description={feature.description}
                    imageUrl={feature.imageUrl}
                />
            ))}
        </div>

{/* stats */}
        <div className="flex items-center justify-between bg-neutral-50 ">
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
    </div>
  )
}

export default App
