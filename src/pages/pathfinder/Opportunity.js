import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from '../../components/auth/Navbar';

const opportunitiesDB = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Tech Startup-Remote",
    button: "Apply",
  },
  {
    id: 2,
    title: "Hardware Engineer",
    company: "Local NGO-Acccra",
    button: "Apply",
  },
  {
    id: 3,
    title: "Cloud Engineer",
    company: "Tech Startup-Remote",
    button: "Apply",
  },
  {
    id: 4,
    title: "UI/UX Designer",
    company: "Local NGO-Remote",
    button: "Apply",
  },
  {
    id: 5,
    title: "Web Developer",
    company: "Tech Startup-Remote",
    button: "Apply",
  },
];

const Opportunity = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  useEffect(() => {
    document.title = "Opportunities - AfriVate";
  }, []);

  const filteredList = opportunitiesDB.filter((item) => {
    return item.title.toLowerCase().includes(search.toLowerCase()) ||
           item.company.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-white font-sans">
      <NavBar />
      
      {/* Main Content */}
      <div className="pt-20 px-4 md:px-8 lg:px-12 pb-8">
        <div className="max-w-3xl mx-auto">
          {/* Page Title */}
          <div className="mb-3 mt-4">
            <h1 className="text-2xl md:text-3xl font-bold text-black mb-1">
              Opportunities
            </h1>
            <p className="text-gray-600 text-sm md:text-base">
              Discover volunteering opportunities that match your skills and interests
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative mb-4">
            <i className="fa fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
            <input
              type="text"
              placeholder="Search opportunities..."
              className="w-full border border-gray-200 rounded-full px-9 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-700 text-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Opportunity Cards */}
          <div className="flex flex-col gap-2.5">
            {filteredList.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-lg p-3 flex items-center gap-3 hover:shadow-sm transition-all"
              >
                {/* Left - Circular Placeholder */}
                <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0"></div>

                {/* Center - Job Info */}
                <div className="flex-1 min-w-0">
                  <h2 className="font-bold text-gray-900 text-sm mb-0.5">
                    {item.title}
                  </h2>
                  <p className="text-xs text-gray-500">
                    {item.company}
                  </p>
                </div>

                {/* Right - Apply Button */}
                <button 
                  onClick={() => navigate('/volunteer-details')}
                  className="bg-[#6A00B1] text-white px-4 py-1.5 rounded-lg text-xs font-medium hover:bg-[#5A0091] transition-colors flex-shrink-0 whitespace-nowrap"
                >
                  {item.button}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredList.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No opportunities found...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Opportunity;
