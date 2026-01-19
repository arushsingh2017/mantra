import React from 'react'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export default function DocumentUploadCard({ title, fileName }) {
    return (
        <>
            <div className="flex items-center justify-between border-2 border-emerald-400 rounded-xl px-5 py-4 w-full bg-white">
                {/* Left content */}
                <div>
                    <p className="text-lg font-semibold text-gray-900">{title}</p>
                    <p className="text-sm text-gray-400 truncate max-w-[180px]">
                        {fileName}
                    </p>
                </div>

                {/* Right upload icon */}
                <div className="flex items-center justify-center border-l border-emerald-400 pl-4">
                    <CloudUploadIcon className="w-8 h-8 text-cyan-500 cursor-pointer" />
                </div>
            </div>
        </>
    )
}
