import React from 'react'

function Features() {
    return (
        <div className="hidden md:block px-6 md:px-16 overflow-hidden">
            <div className="flex flex-row items-start justify-between gap-1 max-w-6xl mx-auto">

                {/* Step 1 */}
                <div className="flex flex-col items-start flex-1 min-w-0">
                    <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-[#99D2FF] font-medium text-2xl mb-3">
                        1
                    </div>
                    <h3 className="text-base font-medium text-primary-500 mb-1 whitespace-nowrap">
                        Place Orders
                    </h3>
                    <p className="text-xs font-medium text-neutral-900 whitespace-nowrap">
                        Paste an item link to submit an order
                    </p>
                </div>

                {/* Dotted line connector */}
                <div className="flex items-center justify-center pt-5 px-1">
                    <div className="w-12 mx-auto border-t-2 border-dashed border-neutral-400"></div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-start flex-1 min-w-0">
                    <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-[#99D2FF] font-medium text-2xl mb-3">
                        2
                    </div>
                    <h3 className="text-base font-medium text-primary-500 mb-1 whitespace-nowrap">
                        QC & Storage
                    </h3>
                    <p className="text-xs font-medium text-neutral-900 whitespace-nowrap">
                        3–5 free QC photos & 90 days free storage
                    </p>
                </div>

                {/* Dotted line connector */}
                <div className="flex items-center justify-center pt-5 px-1">
                    <div className="w-12 mx-auto border-t-2 border-dashed border-neutral-400"></div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-start flex-1 min-w-0">
                    <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-[#99D2FF] font-medium text-2xl mb-3">
                        3
                    </div>
                    <h3 className="text-base font-medium text-primary-500 mb-1 whitespace-nowrap">
                        Submit Parcels
                    </h3>
                    <p className="text-xs font-medium text-neutral-900 whitespace-nowrap">
                        Bundle packaging & parcel checking
                    </p>
                </div>

                {/* Dotted line connector */}
                <div className="flex items-center justify-center pt-5 px-1">
                    <div className="w-12 mx-auto border-t-2 border-dashed border-neutral-400"></div>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col items-start flex-1 min-w-0">
                    <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-[#99D2FF] font-medium text-2xl mb-3">
                        4
                    </div>
                    <h3 className="text-base font-medium text-primary-500 mb-1 whitespace-nowrap">
                        INTL Shipping
                    </h3>
                    <p className="text-xs font-medium text-neutral-900 whitespace-nowrap">
                        150+ affordable international shipping lines
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Features
