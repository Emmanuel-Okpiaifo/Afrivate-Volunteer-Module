import React, { useState } from "react";
import NavBar from "../components/auth/Navbar";
import Union from "../Assets/Union.png";

const SubscriptionManagement = () => {
  // Mock database (payment history)
  const payments = [
    {
      date: "June 10, 2024",
      description: "Premium Plan Renewal",
      amount: "$100.00",
      status: "Paid",
      invoice: "#INV-001",
    },
    {
      date: "July 11, 2024",
      description: "Premium Plan Renewal",
      amount: "$100.00",
      status: "Paid",
      invoice: "#INV-002",
    },
    {
      date: "August 14, 2024",
      description: "Premium Plan Renewal",
      amount: "$100.00",
      status: "Paid",
      invoice: "#INV-003",
    },
    {
      date: "September 15, 2024",
      description: "Premium Plan Renewal",
      amount: "$100.00",
      status: "Paid",
      invoice: "#INV-004",
    },
    {
      date: "October 15, 2024",
      description: "Premium Plan Renewal",
      amount: "$100.00",
      status: "Paid",
      invoice: "#INV-005",
    },
  ];

  const [search, setSearch] = useState("");

  const filteredPayments = payments.filter((payment) =>
    payment.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center font-sans">
      <NavBar />

      <div className="w-full max-w-5xl p-4 sm:p-6 md:p-8">
        {/* Header */}
        <h1 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-900">
          Subscription Management
        </h1>

        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-8 text-gray-900">
          Current Plan
        </h1>

        {/* Current Plan */}
        <div className="flex flex-col md:flex-row items-center justify-between border border-gray-200 rounded-2xl p-6 md:p-8 mb-10 bg-gradient-to-r from-purple-50 to-white shadow-sm">
          <div className="w-full md:w-[65%]">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
              Premium Plan
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Renews on <span className="font-medium">July 15, 2024</span>
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="bg-[#6A00B1] text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition-all">
                Upgrade Plan
              </button>
              <button className="bg-purple-100 text-purple-600 px-4 py-2 rounded-lg text-sm hover:bg-purple-200 transition-all">
                Cancel Plan
              </button>
            </div>
          </div>

          {/* Union image - hidden on mobile */}
          <div className="hidden md:flex mt-6 md:mt-0 w-[25%] justify-end">
            <img src={Union} alt="Union Icon" className="w-[70%] max-w-[160px]" />
          </div>
        </div>

        {/* Payment History */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
            Payment History
          </h2>

          {/* Search bar */}
          <input
            type="text"
            placeholder="Search transactions"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm sm:text-base"
          />

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm sm:text-base text-left text-gray-700">
              <thead className="bg-gray-100 text-gray-600 uppercase text-xs sm:text-sm">
                <tr>
                  <th className="py-3 px-4 whitespace-nowrap">Date</th>
                  <th className="py-3 px-4 whitespace-nowrap">Description</th>
                  <th className="py-3 px-4 whitespace-nowrap">Amount</th>
                  <th className="py-3 px-4 whitespace-nowrap">Status</th>
                  <th className="py-3 px-4 whitespace-nowrap">Invoice</th>
                </tr>
              </thead>
              <tbody>
                {filteredPayments.map((payment, index) => (
                  <tr
                    key={index}
                    className="border-b last:border-none hover:bg-gray-50 transition-all"
                  >
                    <td className="py-3 px-4 whitespace-nowrap">{payment.date}</td>
                    <td className="py-3 px-4 whitespace-nowrap">
                      {payment.description}
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap">{payment.amount}</td>
                    <td className="py-3 px-4">
                      <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                        {payment.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <button className="bg-purple-100 text-purple-600 px-3 py-1 rounded-md text-xs sm:text-sm font-medium hover:bg-purple-200 transition-all">
                        Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionManagement;
