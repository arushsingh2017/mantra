import { Label } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Input } from "postcss";
import { useRef, useState } from "react";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

export default function PanBoxInput() {
    const [pan, setPan] = useState(Array(10).fill(""));
    const [error, setError] = useState("");
    const inputsRef = useRef([]);

    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

    const handleChange = (value, index) => {
        if (!/^[A-Z0-9]?$/.test(value)) return;

        const newPan = [...pan];
        newPan[index] = value.toUpperCase();
        setPan(newPan);

        if (value && index < 9) {
            inputsRef.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !pan[index] && index > 0) {
            inputsRef.current[index - 1].focus();
        }
    };

    const handleValidate = () => {
        const panValue = pan.join("");

        if (!panRegex.test(panValue)) {
            setError("Invalid PAN format (ABCDE1234F)");
            return;
        }

        setError("");
        onSuccess?.(panValue);
    };
    return (
        <>
            <div className="mx-auto bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-semibold mb-2">PAN Verification</h2>
                <p className="text-sm text-gray-600 mb-4">
                    Enter your 10-digit PAN number
                </p>

                <div className="flex gap-2 justify-start">
                    {pan.map((char, index) => (
                        <input
                            key={index}
                            ref={(el) => (inputsRef.current[index] = el)}
                            type="text"
                            maxLength={1}
                            value={char}
                            onChange={(e) => handleChange(e.target.value, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            className="w-10 h-12 text-center text-lg font-semibold border rounded-md
                       focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                    ))}
                </div>

                {error && (
                    <p className="text-red-500 text-sm mt-3 text-center">
                        {error}
                    </p>
                )}

                <div className="flex flex-row items-center sm:items-end gap-4 py-6">
                    <div className="flex flex-col">
                        <label className="text-sm font-medium mb-1">
                            Monthly Income
                        </label>
                        <input
                            type="text"
                            placeholder="Enter income"
                            className="w-full sm:w-40 border rounded-md px-3 py-2
                 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                    </div>

                    <button
                        className="bg-emerald-500 hover:bg-emerald-700 text-white
               px-5 py-2 rounded-md transition mt-6"
                    >
                        Verify
                    </button>
                </div>

                <div className="flex flex-row justify-content-between gap-4 py-5">
                    <div className="relative w-full max-w-md ">
                        <PermIdentityIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

                        <input
                            type="text"
                            placeholder="Email address" readOnly
                            value="User Name"
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 bg-gray-200 rounded-lg
                   focus:ring-2 focus:ring-sky-500 outline-none"
                        />
                    </div>
                    <div className="border border-white">
                        <input type="date" className="w-40 px-2 py-2 border border-gray-300 rounded-sm bg-gray-200 " />
                    </div>
                </div>

                <div className="">
                    <label className="text-sm font-medium mb-1"> Select Employment Type * </label>
                </div>

                <div className="flex flex-row justify-start align-middle gap-3 pt-2">
                    <label className="flex items-center text-sm gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="empType"                            
                            className="accent-sky-600"
                        />
                        <span>Salaried</span>
                    </label>

                    <label className="flex items-center text-sm gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="empType"                           
                            className="accent-sky-600"
                        />
                        <span>Self-Employed</span>
                    </label>
                </div>

                 <div className="pt-3">
                    <label className="text-sm font-medium mb-1"> Mode of Salary  Received * </label>
                </div>

                <div className="flex flex-row justify-start align-middle gap-5 pt-2">
                    <label className="flex items-center text-sm gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="mode"
                            className="accent-sky-600"
                        />
                        <span>Bank</span>
                    </label>

                    <label className="flex items-center text-sm gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="mode"
                            className="accent-sky-600"
                        />
                        <span>Cheque</span>
                    </label>
                    <label className="flex items-center text-sm gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="mode"
                            className="accent-sky-600"
                        />
                        <span>Cash</span>
                    </label>
                </div>


                <button                   
                    className="w-full mt-10 bg-emerald-500 hover:bg-emerald-700 text-white
                   font-semibold py-3 rounded-lg transition uppercase"
                >
                    Check Eligiblity
                </button>
            </div>
        </>
    )
}
