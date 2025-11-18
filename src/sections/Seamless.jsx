import Button from "@/components/Button";
import { Globe, Truck } from "lucide-react";

const Seamless = () => {
  return (
    <div className="flex flex-col w-full h-fit px-6 md:px-14 py-12 md:py-20 bg-[#FBFBFD] font-medium gap-12">
      {/* Header */}
      <div className="flex justify-between items-start gap-6">
        <h2 className="text-5xl text-[#14181A] tracking-[-0.04em] leading-[1.2] w-full">
          Seamless Global Fulfillment <br /> From China
        </h2>

        {/* Move text slightly downward */}
        <div className="w-3xl mt-4">
          <p className="text-neutral-850 text-sm tracking-[-0.04em] leading-[1.2]">
            Stop dealing with unreliable suppliers and delayed shipments. Cartigo Ship offers
            premium China fulfillment with better sourcing, faster shipping, and pay-as-you-go
            that actually works for DTC brands.
          </p>
          <Button className="mt-3">Start Fulfilling</Button>
        </div>
      </div>

      {/* Bento Cards */}
      <div className="flex gap-22">
        {/* Left Large Card — make bigger */}
        <div className="w-full max-w-[600px] aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200">
          <img
            src="/Frame 86.png"
            alt="Fulfillment preview"
            className="w-full h-full object-cover"
          />
        </div>


        {/* Right 4 Boxes */}
        <div className="w-3xl grid grid-cols-2 gap-6">
          {[
            { title: "Global Fulfilment", subtitle: "Network", icon: <Globe /> },
            { title: "Faster Shipping", subtitle: "Time", icon: <Globe /> },
            { title: "Better Payment", subtitle: "Terms", icon: <Globe /> },
            { title: "Premium Sourcing", subtitle: "Partners", icon: <Globe /> },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-neutral-150 rounded-2xl p-6 flex flex-col justify-between"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center text-white">
                {item.icon}
              </div>
              <div className="mt-16">
                <h3 className="text-2xl text-neutral-850 leading-[1.2] tracking-[-0.04em] ">{item.title}</h3>
                <p className="text-xl text-neutral-800 leading-[1.2] tracking-[-0.04em] ">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Seamless;