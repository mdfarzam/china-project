const features = [
  {
    title: "Purchase Orders",
    description:
      "Share your product link we'll handle the purchase directly from trusted Chinese marketplaces.",
    imageUrl: "/features/Purchase_Orders.png",
  },
  {
    title: "Ship to Warehouse",
    description:
      "All your items will be delivered safely to our warehouse in China, ready for inspection and consolidation.",
    imageUrl: "/features/Ship_to_Warehouse.png",
  },
  {
    title: "Quality Check",
    description:
      "Each item is carefully checked for accuracy, condition, and quality before it's approved for shipment.",
    imageUrl: "/features/Quality_Check.png",
  },
  {
    title: "Global Shipping",
    description:
      "Your items are consolidated into one parcel and shipped worldwide through reliable, trackable logistics partners.",
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
  return (
    <div className="flex flex-col gap-4">
      {/* Image */}
      <div className="bg-primary-50 border-[.5px] border-neutral-500 w-full aspect-4/3 rounded-xl overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-1">
        <h3 className="text-lg text-neutral-1000 font-medium">{title}</h3>
        <p className="p-style">{description}</p>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="flex flex-col w-full h-fit py-16 px-14 gap-10 bg-[#FBFBFD] font-medium">

      {/* Heading */}
      <h2 className="h2-style">One-Stop Service with Us</h2>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 h-fit">
        {features.map((feature, index) => (
          <FeatureItem
            key={index}
            title={feature.title}
            description={feature.description}
            imageUrl={feature.imageUrl}
          />
        ))}
      </div>

      {/* Stats */}
      <div className="flex items-center justify-between bg-neutral-50 py-14 w-full">

        {stats.map((stat, index) => (
          <div key={index} className="flex items-center">
            
            <div className="flex flex-col items-start text-left">
              <p className="text-3xl sm:text-4xl md:text-5xl font-medium bg-linear-to-b from-primary-500 to-primary-400 bg-clip-text text-transparent leading-tight">
                {stat.value}
              </p>
              <p className="p-style mt-1 text-neutral-900">
                {stat.label}
              </p>
            </div>

            {index !== stats.length - 1 && (
              <div className="ml-10 h-20 border border-dashed border-neutral-600" />
            )}
          </div>
        ))}

      </div>

    </div>
  );
}

export default App;
