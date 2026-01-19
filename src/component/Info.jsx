import React from 'react'

export default function Info({ icon, title, text }) {
    return (
        <>
            <div className="flex gap-4 space-10 shadow-lg p-4 rounded-lg m-10 border border-gray-300">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                    {icon}
                </div>
                <div>
                    <p className="font-semibold text-gray-800 text-lg pb-3">{title}</p>
                    <p className="text-base leading-8  text-gray-500">{text}</p>
                </div>
            </div>
        </>
    )
}
