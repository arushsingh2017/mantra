import { useEffect, useState } from "react";

const statsData = [
  { label: "Happy Customers", value: 50000, suffix: "+" },
  { label: "Loans Disbursed", value: 120, suffix: "Cr+" },
  { label: "Approval Rate", value: 98, suffix: "%" },
  { label: "Years of Trust", value: 10, suffix: "+" },
];

function AnimatedNumber({ value, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = Math.ceil(value / (duration / 30));

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#498ee1]">
            Our Impact in Numbers
          </h2>
          <p className="mt-2">
            Trusted by thousands, delivering results every day.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {statsData.map((stat, index) => (
            <div key={index}>
              <div className="text-3xl md:text-4xl font-bold">
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                />
              </div>
              <p className="mt-2 text-sm md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
