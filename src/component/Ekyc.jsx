import React from 'react'

export default function Ekyc() {
    const status = "rejected";
    const statusStyles = {
        verified: {
            label: "KYC Verified",
            bg: "bg-green-100",
            text: "text-green-700",
            border: "border-green-300",
            dot: "bg-green-500",
        },
        pending: {
            label: "KYC Pending",
            bg: "bg-yellow-100",
            text: "text-yellow-700",
            border: "border-yellow-300",
            dot: "bg-yellow-500",
        },
        rejected: {
            label: "KYC Rejected",
            bg: "bg-red-100",
            text: "text-red-700",
            border: "border-red-300",
            dot: "bg-red-500",
        },
    };

    const current = statusStyles[status];
    return (
        <>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">

                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                        KYC Status
                    </h3>

                    <span
                        className={`flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-full
          ${current.bg} ${current.text} border ${current.border}`}
                    >
                        <span className={`w-2 h-2 rounded-full ${current.dot}`} />
                        {current.label}
                    </span>
                </div>

                {/* Content */}
                <p className="text-gray-600 text-sm">
                    Your KYC verification helps us process your loan faster and securely.
                </p>

                {/* Action */}
                {status !== "verified" && (
                    <button className="mt-5 w-full bg-red-600 hover:bg-red-700 transition text-white py-2 rounded-lg text-sm font-medium">
                        Complete KYC
                    </button>
                )}
            </div>
        </>
    )
}
