import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EnablerNavbar from "../../components/auth/EnablerNavbar";

const EnablerDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Enabler Dashboard - AfriVate";
  }, []);

  const analytics = [
    {
      label: "Views",
      value: "1330",
      change: "+2.5%",
      trend: "up",
      period: "the last 28 Days"
    },
    {
      label: "Completed Applications",
      value: "12",
      change: "-4.5%",
      trend: "down",
      period: "the last 28 Days"
    },
    {
      label: "Qualified Candidates",
      value: "30",
      change: "+0.5%",
      trend: "up",
      period: "the last 28 Days"
    }
  ];

  const applicants = [
    {
      jobTitle: "Software Developer",
      applications: 42,
      status: "Accepted",
      statusColor: "bg-green-100 text-green-700"
    },
    {
      jobTitle: "Video Editor",
      applications: 31,
      status: "Rejected",
      statusColor: "bg-orange-100 text-orange-700"
    },
    {
      jobTitle: "Data Analyst",
      applications: 15,
      status: "In-review",
      statusColor: "bg-gray-100 text-gray-700"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <EnablerNavbar />
      
      {/* Main Content */}
      <div className="pt-16 sm:pt-20 px-4 sm:px-6 pb-8">
        <div className="max-w-3xl lg:max-w-4xl mx-auto">
          
          {/* Welcome Section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 md:mb-8 gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#6A00B1]">
                Enabler Dashboard
              </h1>
              <p className="text-gray-600 text-sm md:text-base mt-1">
                Welcome, Somadina! Manage your opportunities and track your impact
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button
                onClick={() => navigate('/create-opportunity')}
                className="bg-[#6A00B1] text-white px-4 md:px-6 py-2 md:py-2.5 rounded-lg text-sm md:text-base font-semibold hover:bg-[#5A0091] transition-colors whitespace-nowrap"
              >
                Post
              </button>
              <button
                onClick={() => navigate('/enabler/profile')}
                className="border-2 border-[#6A00B1] text-[#6A00B1] px-4 md:px-6 py-2 md:py-2.5 rounded-lg text-sm md:text-base font-semibold hover:bg-purple-50 transition-colors whitespace-nowrap"
              >
                View Profile
              </button>
            </div>
          </div>

          {/* Analytics Summary */}
          <div className="mb-6 md:mb-8">
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-black mb-3 md:mb-4">
              Analytics Summary
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {analytics.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-4 md:p-5 shadow-sm"
                >
                  <p className="text-xs md:text-sm text-gray-600 mb-1">{item.label}</p>
                  <div className="flex items-baseline gap-2 mb-2">
                    <p className="text-xl sm:text-2xl font-bold text-black">
                      {item.value}
                    </p>
                    <div className="flex items-center gap-1">
                      {item.trend === "up" ? (
                        <i className="fa fa-arrow-up text-green-500 text-xs"></i>
                      ) : (
                        <i className="fa fa-arrow-down text-red-500 text-xs"></i>
                      )}
                      <span className={`text-xs font-medium ${
                        item.trend === "up" ? "text-green-500" : "text-red-500"
                      }`}>
                        {item.change}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">{item.period}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Applicants Section */}
          <div>
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-black mb-3 md:mb-4">
              Applicants
            </h2>
            {/* Desktop Table View */}
            <div className="hidden md:block bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              {/* Table Header */}
              <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 grid grid-cols-12 gap-4">
                <div className="col-span-4">
                  <p className="font-semibold text-gray-700 text-sm">Job Title</p>
                </div>
                <div className="col-span-3">
                  <p className="font-semibold text-gray-700 text-sm">Applications</p>
                </div>
                <div className="col-span-3">
                  <p className="font-semibold text-gray-700 text-sm">Status</p>
                </div>
                <div className="col-span-2"></div>
              </div>

              {/* Table Rows */}
              <div className="divide-y divide-gray-200">
                {applicants.map((applicant, index) => (
                  <div
                    key={index}
                    className="px-4 py-4 grid grid-cols-12 gap-4 items-center hover:bg-gray-50 transition-colors"
                  >
                    <div className="col-span-4">
                      <p className="font-medium text-gray-900 text-sm">
                        {applicant.jobTitle}
                      </p>
                    </div>
                    <div className="col-span-3">
                      <p className="text-gray-700 text-sm">
                        {applicant.applications} Applications
                      </p>
                    </div>
                    <div className="col-span-3">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${applicant.statusColor}`}>
                        {applicant.status}
                      </span>
                    </div>
                    <div className="col-span-2 flex justify-end">
                      <button
                        onClick={() => {
                          // Find opportunity by job title and navigate to details
                          const opportunities = JSON.parse(localStorage.getItem('enablerOpportunities') || '[]');
                          const found = opportunities.find(opp => 
                            opp.title.toLowerCase() === applicant.jobTitle.toLowerCase()
                          );
                          if (found) {
                            navigate(`/enabler/opportunity/${found.id}`);
                          } else {
                            navigate(`/enabler/applicants/${applicant.jobTitle.toLowerCase().replace(/\s+/g, '-')}`);
                          }
                        }}
                        className="bg-[#6A00B1] text-white px-4 py-1.5 rounded-lg text-xs font-medium hover:bg-[#5A0091] transition-colors"
                      >
                        View
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-3">
              {applicants.map((applicant, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
                >
                  <div className="flex flex-col gap-3">
                    <div>
                      <p className="font-medium text-gray-900 text-sm mb-1">
                        {applicant.jobTitle}
                      </p>
                      <p className="text-gray-700 text-xs mb-2">
                        {applicant.applications} Applications
                      </p>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${applicant.statusColor}`}>
                        {applicant.status}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        // Find opportunity by job title and navigate to details
                        const opportunities = JSON.parse(localStorage.getItem('enablerOpportunities') || '[]');
                        const found = opportunities.find(opp => 
                          opp.title.toLowerCase() === applicant.jobTitle.toLowerCase()
                        );
                        if (found) {
                          navigate(`/enabler/opportunity/${found.id}`);
                        } else {
                          navigate(`/enabler/applicants/${applicant.jobTitle.toLowerCase().replace(/\s+/g, '-')}`);
                        }
                      }}
                      className="bg-[#6A00B1] text-white px-4 py-2 rounded-lg text-xs font-medium hover:bg-[#5A0091] transition-colors w-full"
                    >
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnablerDashboard;
