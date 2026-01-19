import React from 'react'

export default function Spounce() {
    return (
        <>
            <div className='grid grid-cols-2 gap-3 space-y-5'>
                <div className="flex flex-col pt-3">                  
                    <input
                        type="text"
                        placeholder="Spounce Name"
                        className="w-full border border-emerald-400 rounded-md px-3 py-2
                 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                </div>
                <div className="flex flex-col pt-3">                    
                    <input
                        type="text"
                        placeholder="Spounce Contact"
                        className="w-full border border-emerald-400 rounded-md px-3 py-2
                 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                </div>
            </div>
        </>
    )
}
