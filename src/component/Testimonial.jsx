import React, { useState } from 'react'

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Software Engineer",
    image: "https://i.pravatar.cc/100?img=3",
    review:
      "The loan process was extremely smooth and fast. I received the amount within hours without any hassle.",
  },
  {
    name: "Neha Verma",
    role: "Business Owner",
    image: "https://i.pravatar.cc/100?img=5",
    review:
      "Very transparent process and excellent support. Highly recommended for instant personal loans.",
  },
  {
    name: "Amit Singh",
    role: "Marketing Manager",
    image: "https://i.pravatar.cc/100?img=8",
    review:
      "Simple documentation and quick approval. This platform made borrowing stress-free.",
  },
];

export default function Testimonial() {
  return (
    <>
      <section className=" py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            What Our Customers Say
          </h2>
          <p className="text-gray-500 mt-2">
            Trusted by thousands of happy customers across India
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                “{item.review}”
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    </>
  )
}
