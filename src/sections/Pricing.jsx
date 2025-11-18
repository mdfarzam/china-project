import Button from "@/components/Button"
import { Check } from "lucide-react"

const Pricing = () => {
  return (
    <div className="relative w-full min-h-screen py-16 bg-[#FBFBFD] flex flex-col items-center font-medium overflow-hidden">

      <div className="flex flex-col items-center text-center max-w-7xl mx-auto px-6 md:px-14">

        {/* Main Heading */}
        <h1 className="text-5xl font-medium text-neutral-900 tracking-[-0.04em] leading-[1.2]">
          <span className="flex items-center justify-center gap-2">
            Fair pricing
            <img
              src="/Frame 136.svg"
              alt=""
              className="h-16 w-auto object-contain mt-6"
            />
            <span className="bg-gradient-to-b from-[#66BCFF] to-[#0091FE] bg-clip-text text-transparent">
              No Surprises
            </span>
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-sm font-medium text-neutral-850 tracking-[-0.02em] leading-[1.5] mt-2 mb-12">
          Sick of payment issues, billing errors, and chargebacks? We handle all the <br />
          backend work: payments, disputes, data, and retention.
        </p>

        {/* Pricing Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl items-stretch">

          {[1, 2, 3].map((i) => (
            <div key={i} className="w-full flex">
              <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-neutral-300 flex flex-col w-full">

                {/* Card Title */}
                <h2 className="text-xl font-medium text-neutral-900 tracking-[-0.02em] leading-[1.2] mb-3 text-left">
                  BECOME A PRIVATE CLIENT
                </h2>

                {/* Card Subtext */}
                <p className="text-sm font-medium text-neutral-850 tracking-[-0.02em] leading-[1.5] mb-6 text-left">
                  For larger brands looking to supercharge their subscription program.
                </p>

                {/* Price Label */}
                <h3 className="text-3xl font-medium text-neutral-900 mb-8 text-left">
                  Custom Pricing
                </h3>

                {/* Features */}
                <div className="space-y-4 mb-8 flex-grow">
                  {[
                    "1:1 Migration & Onboarding",
                    "Subscription Management CRM",
                    "Automated Payment Orchestration",
                    "Custom Checkout & Upsells",
                    "One-Click Membership Portals",
                    "Fraud & Chargeback Guard",
                    "Integrated With Your Apps",
                    "24/7 Dedicated Support"
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-400 flex items-center justify-center">
                        <Check size={14} className="text-white" strokeWidth={3} />
                      </div>
                      <span className="text-sm font-medium text-neutral-850 tracking-[-0.02em] leading-[1.5] text-left">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button className="w-full py-3 shadow-md bg-gradient-to-b from-blue-700 to-blue-900">
                  Start Fulfilling
                </Button>
              </div>
            </div>
          ))}

        </div>

        {/* End Section */}
        <div className="mt-28 text-center">
          <h2 className="text-5xl font-medium text-neutral-900 tracking-[-0.04em] leading-[1.2] mb-4">
            <span className="text-gray-400">Buy,</span>{' '}
            <span className="text-blue-400">Ship,</span>{' '}
            <span>and Manage Everything <br /> From China Seamlessly.</span>
          </h2>

          <p className="text-sm font-medium text-neutral-850 tracking-[-0.02em] leading-[1.5] mb-6">
            Sick of payment issues, billing errors, and chargebacks? We handle all the <br />
            backend work: payments, disputes, data, and retention.
          </p>

          <button className="py-3 shadow-md bg-gradient-to-b from-blue-300 to-blue-500 px-6 py-2 text-white text-sm font-medium rounded-xl hover:opacity-90 transition-opacity">
            Start Fulfilling
          </button>
        </div>

      </div>
    </div>
  )
}

export default Pricing
