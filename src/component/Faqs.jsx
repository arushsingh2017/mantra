import React, { useState } from 'react'
const faqs = [
    {
        question: "How quickly can I get an instant personal loan online?",
        answer:
            "Most instant personal loans are approved within minutes and disbursed within 24 hours.",
    },
    {
        question: "Do I need many documents to apply for a loan?",
        answer:
            "No, minimal documentation like Aadhaar, PAN, and basic income details are required.",
    },
    {
        question: "What are the loan eligibility criteria for borrowers?",
        answer:
            "Eligibility depends on age, income, employment status, and credit score.",
    },
    {
        question: "Can self-employed individuals apply for a personal loan online?",
        answer:
            "Yes, self-employed individuals can apply by submitting basic business and income details.",
    },
];

export default function Faqs() {
    const [openIndex, setOpenIndex] = useState(null);
    return (
        <>
<section className="py-16 px-4">
      <div className="max-w-4xl mx-auto bg-sky-100 p-10 rounded-lg shadow-lg">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-emerald-600">
          Frequently Asked Questions (FAQs)
        </h2>
        <p className="text-sm text-gray-500 mt-2 max-w-xl">
          Reference site about Lorem Ipsum, giving information on its origins,
          well as a random Lipsum generator.
        </p>

        {/* FAQ List */}
        <div className="mt-8 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center px-6 py-4 text-left"
              >
                <span className="font-medium text-gray-800">
                  {faq.question}
                </span>

                <span className="text-emerald-500 text-2xl font-bold">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 pb-4 text-sm text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
        </>
    )
}
