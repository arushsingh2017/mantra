import React from 'react'

export default function FindLoan() {
    const loans = [
        {
            title: "Personal Loan for Salaried Individuals",
            img: "./l-1.jpg",
        },
        {
            title: "Personal Loan for Self-Employed Borrowers",
            img: "./l-1.jpg",
        },
        {
            title: "Medical Loan",
            img: "./l-3.jpg",
        },
    ];
    return (

        <>
            <section className="bg-sky-100 py-16 px-4">
                <div className="max-w-7xl mx-auto">

                    {/* Blue Card */}
                    <div className="bg-blue-500 px-6 md:px-10 py-20 text-white" style={{borderRadius:'20px 20px 0 0'}}>
                        {/* Heading */}
                        <h2 className="text-2xl md:text-3xl font-bold">
                            Find the Right Loan for You
                        </h2>
                        <p className="text-sm md:text-base text-blue-100 mt-2 max-w-2xl pb-5">
                            Reference site about Lorem Ipsum, giving information on its origins,
                            as well as a random Lipsum generator.
                        </p>
                    </div>
                    {/* Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" style={{marginTop:'-90px', padding:'25px'}}>
                        {loans.map((loan, index) => (
                            <div
                                key={index}
                                className="relative rounded-xl overflow-hidden shadow-lg group"
                            >
                                <img
                                    src={loan.img}
                                    alt={loan.title}
                                    className="w-full h-56 object-cover transform group-hover:scale-105 transition duration-300"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                                    <h3 className="text-white font-semibold text-lg">
                                        {loan.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Button */}
                    <div className="flex justify-center mt-10">
                        <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition">
                            View All
                        </button>
                    </div>

                </div>
            </section>
        </>
    )
}
