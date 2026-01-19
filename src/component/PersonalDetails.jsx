import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Spounce from "./Spounce";
import addImg from '../assets/website/upload.mp4'

// import FormControl from '@mui/material/FormControl';


export default function PersonalDetails() {
    const [gender, setGender] = useState("");
    const [residenceType, setResidenceType] = useState("")
    const [workMode, setWorkMode] = useState("")
    const [maritalStatus, setMaritalStatus] = useState('1');

    const handleChange = (event) => {
        setMaritalStatus(event.target.value);
    };

    return (
        <>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                <div className="md:col-span-8" style={{ borderRadius: '10px 0 0 10px' }}>
                    {/* select gender */}
                    <FormControl>
                        <p className="text-base font-semibold">Select Gender</p>
                        <RadioGroup
                            row value={gender}
                            onChange={(e) => setGender(e.target.value)}
                        >
                            <FormControlLabel value="Male" control={<Radio />} label="Male" />
                            <FormControlLabel value="Female" control={<Radio />} label="Female" />

                        </RadioGroup>
                    </FormControl>
                    {/* end */}

                    {/* Residence Type */}
                    <FormControl>
                        <p className="text-base font-semibold">Residence Type</p>
                        <RadioGroup
                            row value={residenceType}
                            onChange={(e) => setResidenceType(e.target.value)}
                        >
                            <FormControlLabel value="Rented" control={<Radio />} label="Rented" />
                            <FormControlLabel value="Owned" control={<Radio />} label="Owned" />

                        </RadioGroup>
                    </FormControl>
                    {/* end */}

                    {/* Working Mode */}
                    <FormControl>
                        <p className="text-base font-semibold pt-3">Working Mode</p>
                        <RadioGroup
                            row value={workMode}
                            onChange={(e) => setWorkMode(e.target.value)}
                        >
                            <FormControlLabel value="WFH" control={<Radio />} label="Work from Home" />
                            <FormControlLabel value="WFO" control={<Radio />} label="Work from Office" />

                        </RadioGroup>
                    </FormControl>
                    {/* end */}

                    {/* marital status start */}
                    <FormControl fullWidth>
                        <p className="text-base font-semibold pt-3">Marital Status</p>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={maritalStatus}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={1}>Single</MenuItem>
                            <MenuItem value={2}>Married</MenuItem>
                            <MenuItem value={3}>Other</MenuItem>
                        </Select>
                    </FormControl>
                    {/* end */}
                    <Spounce />

                    <div className="grid lg:grid-cols-2 gap-3">
                        <div className="flex flex-col">                            
                            <input
                                type="text"
                                placeholder="Spounce Contact"
                                className="w-full border border-emerald-400 rounded-md px-3 py-2
                 focus:outline-none focus:ring-2 focus:ring-sky-500"
                            />
                        </div>
                        <div className="flex flex-col">                           
                            <input
                                type="text"
                                placeholder="Spounce Contact"
                                className="w-full border border-emerald-400 rounded-md px-3 py-2
                 focus:outline-none focus:ring-2 focus:ring-sky-500"
                            />
                        </div>
                    </div>

                    <div className=" grid grid-cols-3 flex-row gap-3 py-4">
                        <div>                           
                            <input
                                type="text"
                                placeholder="City"
                                className="w-full border border-emerald-400 rounded-md px-3 py-2
                 focus:outline-none focus:ring-2 focus:ring-sky-500"
                            />
                        </div>
                        <div>                            
                            <input
                                type="text"
                                placeholder="State"
                                className="w-full border border-emerald-400 rounded-md px-3 py-2
                 focus:outline-none focus:ring-2 focus:ring-sky-500"
                            />
                        </div>
                        <div>
                            
                            <input
                                type="text"
                                placeholder="Pincode"
                                className="w-full border border-emerald-400 rounded-md px-3 py-2
                 focus:outline-none focus:ring-2 focus:ring-sky-500"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col pb-5">                        
                        <input
                            type="text"
                            placeholder=" House / Flat No., Building Name, Street Name"
                            className="w-full border border-emerald-400 rounded-md px-3 py-2
                 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                    </div>

                    <div className="flex flex-col">                      
                        <input
                            type="text"
                            placeholder="Locality / Landmark "
                            className="w-full border border-emerald-400 rounded-md px-3 py-2
                 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                    </div>
                    <button className="w-full mt-10 bg-emerald-500 hover:bg-emerald-700 text-white
                   font-semibold py-3 rounded-lg transition uppercase">Continue Application</button>

                </div>
               <div className="lg:col-span-4 p-2">
                                   <video
                                       src={addImg}
                                       autoPlay
                                       loop
                                       muted
                                       playsInline
                                       className="w-full rounded-2xl shadow-lg border border-sky-200 p-1"
                                   >
                                   </video>
                                   
                               </div>
            </div>
        </>
    )
}
