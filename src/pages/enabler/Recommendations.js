import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EnablerNavbar from "../../components/auth/EnablerNavbar";

const Recommendations = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  useEffect(() => {
    document.title = "Recommended Pathfinders - AfriVate";
  }, []);

  const topMatches = [
    {
      id: 1,
      name: "John Martins",
      experience: "5 years in non-profit sector",
      skills: "Management, Communication, leadership"
    },
    {
      id: 2,
      name: "John Wick",
      experience: "3 years in youth development",
      skills: "Community Outreach, Event Planning, Fundraising"
    },
    {
      id: 3,
      name: "Joshua Komolafe",
      experience: "4 years in Social Impact",
      skills: "Data Analysis, Reporting, Strategic Planning"
    }
  ];

  const otherMatches = [
    {
      id: 4,
      name: "Jason Williams",
      experience: "2 years in Digital Marketing",
      skills: "Content Creation, Social Media Marketing"
    },
    {
      id: 5,
      name: "James Anderson",
      experience: "6 years in Public Policy",
      skills: "Research, Policy Analysis, Advocacy"
    }
  ];

  const filterPathfinders = (pathfinders) => {
    if (!search.trim()) return pathfinders;
    const searchLower = search.toLowerCase();
    return pathfinders.filter(
      (p) =>
        p.name.toLowerCase().includes(searchLower) ||
        p.experience.toLowerCase().includes(searchLower) ||
        p.skills.toLowerCase().includes(searchLower)
    );
  };

  const filteredTopMatches = filterPathfinders(topMatches);
  const filteredOtherMatches = filterPathfinders(otherMatches);

  return (
    <div className="min-h-screen bg-white font-sans">
      <EnablerNavbar />
      
      {/* Main Content */}
      <div className="pt-20 px-4 md:px-8 lg:px-12 pb-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Page Title */}
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-black mb-2">
              Recommended Pathfinders
            </h1>
            <p className="text-gray-600 text-sm md:text-base">
              Discover talented pathfinders recommended to you based on your opportunities
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative mb-8">
            <i className="fa fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
            <input
              type="text"
              placeholder="Search pathfinders..."
              className="w-full border border-gray-300 rounded-lg px-9 py-3 focus:outline-none focus:ring-2 focus:ring-[#6A00B1] bg-white text-gray-700"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Top Matches Section */}
          {filteredTopMatches.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
                Top Matches
              </h2>
              <div className="space-y-3">
                {filteredTopMatches.map((pathfinder) => (
                  <div
                    key={pathfinder.id}
                    className="bg-gray-100 rounded-lg p-3 md:p-4 flex flex-col md:flex-row items-start gap-3 md:gap-4"
                  >
                    {/* Profile Picture Placeholder */}
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-300 rounded-full flex-shrink-0"></div>

                    {/* Pathfinder Info */}
                    <div className="flex-1 min-w-0 w-full md:w-auto">
                      <h3 className="font-bold text-black text-base md:text-lg mb-1 md:mb-2">
                        {pathfinder.name}
                      </h3>
                      <p className="text-gray-700 text-xs md:text-sm mb-1">
                        Experience: {pathfinder.experience}
                      </p>
                      <p className="text-gray-700 text-xs md:text-sm">
                        Skills: {pathfinder.skills}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto md:flex-shrink-0">
                      <button
                        onClick={() => navigate(`/enabler/pathfinder/${pathfinder.id}`)}
                        className="bg-[#E0C6FF] text-[#6A00B1] px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-semibold hover:bg-[#D0B6FF] transition-colors whitespace-nowrap"
                      >
                        View Profile
                      </button>
                      <button
                        onClick={() => navigate(`/enabler/contact/${pathfinder.id}`)}
                        className="bg-[#6A00B1] text-white px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-semibold hover:bg-[#5A0091] transition-colors whitespace-nowrap"
                      >
                        Contact
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Other Matches Section */}
          {filteredOtherMatches.length > 0 && (
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
                Other Matches
              </h2>
              <div className="space-y-3">
                {filteredOtherMatches.map((pathfinder) => (
                  <div
                    key={pathfinder.id}
                    className="bg-gray-100 rounded-lg p-3 md:p-4 flex flex-col md:flex-row items-start gap-3 md:gap-4"
                  >
                    {/* Profile Picture Placeholder */}
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-300 rounded-full flex-shrink-0"></div>

                    {/* Pathfinder Info */}
                    <div className="flex-1 min-w-0 w-full md:w-auto">
                      <h3 className="font-bold text-black text-base md:text-lg mb-1 md:mb-2">
                        {pathfinder.name}
                      </h3>
                      <p className="text-gray-700 text-xs md:text-sm mb-1">
                        Experience: {pathfinder.experience}
                      </p>
                      <p className="text-gray-700 text-xs md:text-sm">
                        Skills: {pathfinder.skills}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto md:flex-shrink-0">
                      <button
                        onClick={() => navigate(`/enabler/pathfinder/${pathfinder.id}`)}
                        className="bg-[#E0C6FF] text-[#6A00B1] px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-semibold hover:bg-[#D0B6FF] transition-colors whitespace-nowrap"
                      >
                        View Profile
                      </button>
                      <button
                        onClick={() => navigate(`/enabler/contact/${pathfinder.id}`)}
                        className="bg-[#6A00B1] text-white px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-semibold hover:bg-[#5A0091] transition-colors whitespace-nowrap"
                      >
                        Contact
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Empty State */}
          {filteredTopMatches.length === 0 && filteredOtherMatches.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No pathfinders found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
