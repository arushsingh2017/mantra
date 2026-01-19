import { useRef, useState } from "react";


export default function OtpScreen() {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const inputs = useRef([]);

    const handleChange = (value, index) => {
        if (!/^\d?$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 3) {
            inputs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputs.current[index - 1].focus();
        }
    };
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
                <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8">

                    <h2 className="text-2xl font-bold text-center mb-2">
                        Verify OTP
                    </h2>
                    <p className="text-sm text-gray-600 text-center mb-6">
                        Enter the 4-digit OTP sent to your mobile number
                    </p>

                    {/* OTP INPUTS */}
                    <div className="flex justify-center gap-3 mb-6">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                ref={(el) => (inputs.current[index] = el)}
                                type="text"
                                maxLength="1"
                                value={digit}
                                onChange={(e) => handleChange(e.target.value, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                className="w-14 h-14 text-center text-xl font-semibold border border-gray-300 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-sky-500"
                            />
                        ))}
                    </div>

                    {/* VERIFY BUTTON */}
                    <button className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 rounded-lg transition">
                        Verify OTP
                    </button>

                    {/* RESEND */}
                    <p className="text-center text-sm text-gray-500 mt-4">
                        Didn’t receive OTP?{" "}
                        <button className="text-sky-600 hover:underline font-medium">
                            Resend
                        </button>
                    </p>

                </div>
            </div>
        </>
    )
}
