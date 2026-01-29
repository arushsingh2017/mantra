import React, { useState } from 'react'
import addImg from '../assets/website/upload.mp4'
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';



export default function BankDetails() {
    const [maritalStatus, setMaritalStatus] = useState('1');
    const handleChange = (event) => {
        setMaritalStatus(event.target.value);
    };
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                <div className="md:col-span-8 rounded-lg p-4">
                    <h3 className='text-2xl font-medium'>Bank Details</h3>
                    <p>To ensure smooth loan disbursal and EMI processing, please provide your bank account information.</p>

                    <p className='pb-1 pt-4 text-base font-medium'>
                        Account Number <span className='text-red-700'>*</span>
                    </p>

                    <input
                        type="text"
                        className="w-full border border-emerald-400 rounded-md px-3 py-2
                 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />

                    <p className='pb-1 pt-4 text-base font-medium '>
                        Confirm Account Number <span className='text-red-700'>*</span></p>

                    <input
                        type="text"
                        className="w-full border border-emerald-400 rounded-md px-3 py-2
                 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />

                    <p className='pb-1 pt-4 text-base font-medium '>Bank Type <span className='text-red-700'>*</span></p>
                    <FormControl fullWidth>
                       
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={maritalStatus}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={1}>SAVING</MenuItem>
                            <MenuItem value={2}>CURRENT</MenuItem>
                            <MenuItem value={3}>SALARY</MenuItem>
                            <MenuItem value={3}>FIXED</MenuItem>
                            <MenuItem value={3}>RECURRING</MenuItem>
                        </Select>
                    </FormControl>

                    <p className='pb-1 pt-4 text-base font-medium '>
                        IFSC Code <span className='text-red-700'>*</span></p>

                    <input
                        type="text"
                        className="w-full border border-emerald-400 rounded-md px-3 py-2
                 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />











                    <button className='w-full mt-10 bg-emerald-500 hover:bg-emerald-700 text-white
                   font-semibold py-3 rounded-lg transition uppercase'>Save Bank Details</button>

                </div>

                <div className="lg:col-span-4 p-2">
                    <video
                        src={addImg}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full rounded-xl border border-sky-200"
                    >
                    </video>
                </div>
            </div>
        </>
    )
}
