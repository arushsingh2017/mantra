import React from 'react'


export default function CurrentLoan() {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* My Balance */}
                <StatCard
                    title="Eligible Amount"
                    amount="12,750"
                    // icon={<Wallet />}
                    bg="bg-yellow-100"
                    iconColor="text-yellow-600"
                />

                {/* Income */}
                <StatCard
                    title="Recommended Loan"
                    amount="5,600"
                    // icon={<TrendingUp />}
                    bg="bg-blue-100"
                    iconColor="text-blue-600"
                />

                {/* Expense */}
                <StatCard
                    title="Repayment Date"
                    amount="20/10/2025"
                    // icon={<TrendingDown />}
                    bg="bg-pink-100"
                    iconColor="text-pink-600"
                />

                {/* Total Saving */}
                <StatCard
                    title="Tenure Period"
                    amount="40 Days"
                    // icon={<PiggyBank />}
                    bg="bg-teal-100"
                    iconColor="text-teal-600"
                />
            </div>
        </>
    )
}

const StatCard = ({ title, amount, icon, bg, iconColor }) => {
  return (
    <div className="bg-white rounded-2xl p-6 flex items-center gap-5 shadow-sm">
      
      {/* Icon */}
      <div className={`w-14 h-14 rounded-full flex items-center justify-center ${bg}`}>
        <div className={`w-6 h-6 ${iconColor}`}>
          {icon}
        </div>
      </div>

      {/* Content */}
      <div>
        <p className="text-sm text-gray-500">
          {title}
        </p>
        <h3 className="text-2xl font-semibold text-gray-900">
          {amount}
        </h3>
      </div>
    </div>
  );
};
