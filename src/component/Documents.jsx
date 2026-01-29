import { useRef, useState } from "react";
import DocumentUploadCard from './DocumentUploadCard'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import addImg from '../assets/website/11.svg'
import addImg from '../assets/website/upload.mp4'
import { useNavigate } from "react-router-dom";



export default function Documents() {
    const fileRef = useRef(null);
    const [file, setFile] = useState(null);
    const navigate = useNavigate()

    const handleUpload=()=>{
        navigate('/thankyou')
    }

    const handleClick = () => {
        fileRef.current.click();
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (!selectedFile) return;

        if (!["image/png", "image/jpeg"].includes(selectedFile.type)) {
            alert("Only JPG or PNG allowed");
            return;
        }

        setFile(selectedFile);
    };
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
                <div className="lg:col-span-8 ">
                    <div className="flex items-center justify-between border-1 border-emerald-400 rounded-xl px-3 py-3 bg-white w-full mb-4">
                        {/* Left text */}
                        <div className="min-w-0">
                            <p className="text-base font-semibold">Aadhaar Front</p>
                            <p className="text-sm text-gray-400 truncate">
                                {file ? file.name : "Upload JPG or PNG"}
                            </p>
                        </div>

                        {/* Upload icon */}
                        <div
                            onClick={handleClick}
                            className="flex items-center justify-center border-l border-emerald-400 pl-4 cursor-pointer"
                        >
                            <CloudUploadIcon className="w-8 h-8 text-cyan-500" />
                        </div>

                        {/* Hidden file input */}
                        <input
                            ref={fileRef}
                            type="file"
                            accept="image/png, image/jpeg"
                            className="hidden"
                            onChange={handleFileChange}
                        />
                    </div>
                    <div className="flex items-center justify-between border-1 border-emerald-400 rounded-xl px-3 py-3 bg-white w-full mb-4">
                        {/* Left text */}
                        <div className="min-w-0">
                            <p className="text-base font-semibold">Aadhaar Back</p>
                            <p className="text-sm text-gray-400 truncate">
                                {file ? file.name : "Upload JPG or PNG"}
                            </p>
                        </div>

                        {/* Upload icon */}
                        <div
                            onClick={handleClick}
                            className="flex items-center justify-center border-l border-emerald-400 pl-4 cursor-pointer"
                        >
                            <CloudUploadIcon className="w-8 h-8 text-cyan-500" />
                        </div>

                        {/* Hidden file input */}
                        <input
                            ref={fileRef}
                            type="file"
                            accept="image/png, image/jpeg"
                            className="hidden"
                            onChange={handleFileChange}
                        />
                    </div>
                    <div className="flex items-center justify-between border-1 border-emerald-400 rounded-xl px-3 py-3 bg-white w-full mb-4">
                        {/* Left text */}
                        <div className="min-w-0">
                            <p className="text-base font-semibold">PAN Card</p>
                            <p className="text-sm text-gray-400 truncate">
                                {file ? file.name : "Upload JPG or PNG"}
                            </p>
                        </div>

                        {/* Upload icon */}
                        <div
                            onClick={handleClick}
                            className="flex items-center justify-center border-l border-emerald-400 pl-4 cursor-pointer"
                        >
                            <CloudUploadIcon className="w-8 h-8 text-cyan-500" />
                        </div>

                        {/* Hidden file input */}
                        <input
                            ref={fileRef}
                            type="file"
                            accept="image/png, image/jpeg"
                            className="hidden"
                            onChange={handleFileChange}
                        />
                    </div>
                    <div className="flex items-center justify-between border-1 border-emerald-400 rounded-xl px-3 py-3 bg-white w-full mb-4">
                        {/* Left text */}
                        <div className="min-w-0">
                            <p className="text-base font-semibold">Latest Month Pay Slip</p>
                            <p className="text-sm text-gray-400 truncate">
                                {file ? file.name : "Upload JPG or PNG"}
                            </p>
                        </div>

                        {/* Upload icon */}
                        <div
                            onClick={handleClick}
                            className="flex items-center justify-center border-l border-emerald-400 pl-4 cursor-pointer"
                        >
                            <CloudUploadIcon className="w-8 h-8 text-cyan-500" />
                        </div>

                        {/* Hidden file input */}
                        <input
                            ref={fileRef}
                            type="file"
                            accept="image/png, image/jpeg"
                            className="hidden"
                            onChange={handleFileChange}
                        />
                    </div>
                    <div className="flex items-center justify-between border-1 border-emerald-400 rounded-xl px-3 py-3 bg-white w-full mb-4">
                        {/* Left text */}
                        <div className="min-w-0">
                            <p className="text-base font-semibold">Latest 3 Months Bank Statement</p>
                            <p className="text-sm text-gray-400 truncate">
                                {file ? file.name : "Upload JPG or PNG"}
                            </p>
                        </div>

                        {/* Upload icon */}
                        <div
                            onClick={handleClick}
                            className="flex items-center justify-center border-l border-emerald-400 pl-4 cursor-pointer"
                        >
                            <CloudUploadIcon className="w-8 h-8 text-cyan-500" />
                        </div>

                        {/* Hidden file input */}
                        <input
                            ref={fileRef}
                            type="file"
                            accept="image/png, image/jpeg"
                            className="hidden"
                            onChange={handleFileChange}
                        />
                    </div>
                    <div className="flex items-center justify-between border-1 border-emerald-400 rounded-xl px-3 py-3 bg-white w-full mb-4">
                        {/* Left text */}
                        <div className="min-w-0">
                            <p className="text-base font-semibold">Current Residence Proof</p>
                            <p className="text-sm text-gray-400 truncate">
                                {file ? file.name : "Upload JPG or PNG"}
                            </p>
                        </div>

                        {/* Upload icon */}
                        <div
                            onClick={handleClick}
                            className="flex items-center justify-center border-l border-blue-400 pl-4 cursor-pointer"
                        >
                            <CloudUploadIcon className="w-8 h-8 text-cyan-500" />
                        </div>

                        {/* Hidden file input */}
                        <input
                            ref={fileRef}
                            type="file"
                            accept="image/png, image/jpeg"
                            className="hidden"
                            onChange={handleFileChange}
                        />


                    </div>
                    <div className="mt-6">
                        <button className="w-full  bg-emerald-500 hover:bg-emerald-700 text-white
                   font-semibold py-3 rounded-lg transition uppercase" onClick={handleUpload}
                   
                   >Continue Application</button>
                    </div>
                </div>
                <div className="lg:col-span-4 p-2">
                    <video
                        src={addImg}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full rounded-xl border border-sky-200 shadow-lg "
                    >
                    </video>
                    {/* <img src={addImg} className="border border-white p-2 rounded-xl w-full " alt=""/> */}
                </div>



            </div>


        </>



    )
}
