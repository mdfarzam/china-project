const Features = () => {
  return (
    <div className="flex flex-col w-full h-fit px-6 md:px-14 bg-neutral-50 font-medium gap-12">

      {/* Header */}
      <div>
        <h2 className="h2-style">Why Choose Cartigo</h2>
      </div>

      {/* Bento Grid */}
      <div className="flex w-full gap-6 h-[480px]">

        {/* LEFT */}
        <div className="w-1/3 h-full bg-[#EEF1F1] rounded-2xl px-5 py-4 border border-neutral-200 flex flex-col">
          <div className="flex flex-col gap-1">
            <h3 className="text-lg text-neutral-1000">Responsive Support</h3>
            <p className="p-style">
              Our support team is always ready to help with quick, friendly responses and clear
              solutions whenever you need assistance.
            </p>
          </div>

          <div>
            <img
              src="/PC Bento/Frame 63.png"
              alt=""
              className="max-h object-contain"
            />
          </div>
        </div>

        {/* MIDDLE */}
        <div className="w-1/3 h-full flex flex-col gap-6">

          {/* TOP */}
          <div className="flex-1 bg-[#EEF1F1] rounded-2xl px-5 pb-4 border border-neutral-200 flex flex-col justify-between">
            <img
              src="/PC Bento/Frame 63 (1).png"
              alt=""
              className="max-h object-contain pb-1"
            />

            <div className="flex flex-col gap-1">
              <h3 className="text-lg text-neutral-1000">Trusted Logistics</h3>
              <p className="p-style">
                Every shipment is handled by trusted logistics partners for secure, and
                worry-free delivery.
              </p>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="flex-1 bg-[#EEF1F1] rounded-2xl px-5 pb-4 border border-neutral-200 flex flex-col justify-between">
            <img
              src="/PC Bento/Frame 63 (2).png"
              alt=""
              className="max-h object-contain"
            />

            <div className="flex flex-col gap-1">
              <h3 className="text-lg text-neutral-1000">Global Reach</h3>
              <p className="p-style">
                From China to your doorstep we make international delivery simple, fast,
                and worry-free.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-1/3 h-full bg-[#EEF1F1] rounded-2xl px-5 pt-4 border border-neutral-200 flex flex-col">

          <div className="flex flex-col gap-1">
            <h3 className="text-lg text-neutral-1000">Transparent Pricing</h3>
            <p className="p-style">
              You always know what you're paying for. No hidden fees, no surprises —
              just clear and fair pricing at every stage of your order.
            </p>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <img
              src="/PC Bento/Frame 63 (3).png"
              alt=""
              className="h-full object-contain"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Features;
