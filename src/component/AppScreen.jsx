import React from 'react'
import appScreen from '../assets/website/app-screen.png'
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
export default function AppScreen() {
    return (
        <>
            <section className="bg-white  px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT CONTENT */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-emerald-600 leading-tight">
                            Let's download free from <br />
                            apple and play store
                        </h2>

                        <p className="text-gray-500 mt-4 max-w-md">
                            Reference site about Lorem Ipsum, giving information on its origins,
                            as well as a random Lipsum generator.
                        </p>

                        {/* Store Buttons */}
                        <div className="flex flex-wrap gap-4 mt-8">
                            <div className="flex flex-wrap gap-4">
                                {/* Apple App Store */}
                                <a
                                    href="#"
                                    className="flex items-center gap-3 bg-[#02a86b] text-white px-5 py-3 rounded-xl shadow hover:scale-105 transition"
                                >
                                    {/* <img src={appleIcon} alt="Apple" className="w-6 h-6" /> */}
                                    <AppleIcon/>
                                    <div className="leading-tight">
                                        <p className="text-xs">Download on the</p>
                                        <p className="text-sm font-semibold">App Store</p>
                                    </div>
                                </a>

                                {/* Google Play */}
                                <a
                                    href="#"
                                    className="flex items-center gap-3 bg-[#02a86b] text-white px-5 py-3 rounded-xl shadow hover:scale-105 transition"
                                >
                                    {/* <img src={playIcon} alt="Google Play" className="w-6 h-6" /> */}
                                    <AndroidIcon/>
                                    <div className="leading-tight">
                                        <p className="text-xs">GET IT ON</p>
                                        <p className="text-sm font-semibold">Google Play</p>
                                    </div>
                                </a>

                            </div>


                            {/* <img
              src={appStore}
              alt="App Store"
              className="h-12 cursor-pointer"
            />
            <img
              src={playStore}
              alt="Google Play"
              className="h-12 cursor-pointer"
            /> */}
                        </div>
                    </div>

                    {/* RIGHT MOBILE MOCKUPS */}
                    <div className="relative flex justify-center lg:justify-end">

                        {/* Back Phone */}
                        <img
                            src={appScreen}
                            alt="Mobile App"
                            className=""
                        />

                        {/* Front Phone */}
                        {/* <img
            src={mobile2}
            alt="Mobile App Screen"
            className="w-64 md:w-72 rounded-3xl shadow-2xl absolute -bottom-10 -right-6 hidden sm:block"
          /> */}
                    </div>

                </div>
            </section>
        </>
    )
}
