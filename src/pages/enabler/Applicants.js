import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EnablerNavbar from "../../components/auth/EnablerNavbar";

const DEFAULT_APPLICANT_FILTERS = ["Software Developer", "Video Editor", "Data Analyst"];

const Applicants = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  // Convert URL param back to job title
  const jobTitle = id ? id.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : "Software Developer";
  
  const [activeFilter, setActiveFilter] = useState(jobTitle);

  useEffect(() => {
    document.title = "Applicants - AfriVate";
  }, []);

  // Sample applicants data - in production, this would come from an API
  const allApplicants = [
    {
      id: 1,
      name: "John Martins",
      experience: "5 years in non-profit sector",
      skills: "Management, Communication, leadership",
      opportunity: "Software Developer"
    },
    {
      id: 2,
      name: "John Wick",
      experience: "3 years in youth development",
      skills: "Community Outreach, Event Planning, Fundraising",
      opportunity: "Video Editor"
    },
    {
      id: 3,
      name: "Joshua Komolafe",
      experience: "4 years in Social Impact",
      skills: "Data Analysis, Reporting, Strategic Planning",
      opportunity: "Data Analyst"
    },
    {
      id: 4,
      name: "Jason Williams",
      experience: "2 years in Digital Marketing",
      skills: "Content Creation, Social Media Marketing",
      opportunity: "Software Developer"
    },
    {
      id: 5,
      name: "James Anderson",
      experience: "6 years in Public Policy",
      skills: "Research, Policy Analysis, Advocacy",
      opportunity: "Data Analyst"
    }
  ];

  const filteredApplicants = allApplicants.filter(applicant =>
    applicant.opportunity === activeFilter
  );

  const [opportunityFilters, setOpportunityFilters] = useState(DEFAULT_APPLICANT_FILTERS);
  useEffect(() => {
    try {
      const opps = JSON.parse(localStorage.getItem("enablerOpportunities") || "[]");
      const titles = opps.map((o) => o.title).filter(Boolean);
      setOpportunityFilters([...new Set([...titles, ...DEFAULT_APPLICANT_FILTERS])]);
    } catch (_) {}
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <EnablerNavbar />
      <div className="pt-20 px-4 md:px-8 lg:px-12 pb-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="mb-4 text-[#6A00B1] hover:text-[#5A0091] transition-colors"
          >
            <i className="fa fa-arrow-left text-xl"></i>
          </button>

          {/* Page Title */}
          <div className="mb-4">
            <h1 className="text-xl md:text-2xl font-bold text-black mb-1">
              Applicants
            </h1>
            <p className="text-gray-600 text-xs md:text-sm">
              View and manage pathfinders who have applied for your opportunities
            </p>
          </div>

          {/* Opportunity Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {opportunityFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition-colors ${
                  activeFilter === filter
                    ? 'bg-[#E0C6FF] text-[#6A00B1] border-2 border-[#6A00B1]'
                    : 'bg-gray-100 text-gray-700 border-2 border-gray-300 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Applicants List */}
          {filteredApplicants.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-sm md:text-base">
                No applicants found for {activeFilter}.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredApplicants.map((applicant) => (
                <div
                  key={applicant.id}
                  className="bg-white border border-gray-200 rounded-lg p-3 md:p-4 flex items-start gap-3 md:gap-4"
                >
                  {/* Profile Picture Placeholder */}
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-300 rounded-full flex-shrink-0"></div>

                  {/* Applicant Info */}
                  <div className="flex-1 min-w-0">
                    <h2 className="text-sm md:text-base font-bold text-black mb-1">
                      {applicant.name}
                    </h2>
                    <p className="text-gray-600 text-xs md:text-sm mb-1">
                      Experience: {applicant.experience}
                    </p>
                    <p className="text-gray-600 text-xs md:text-sm">
                      Skills: {applicant.skills}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-2 flex-shrink-0">
                    <button
                      onClick={() => navigate(`/enabler/pathfinder/${applicant.id}`)}
                      className="bg-[#E0C6FF] text-[#6A00B1] px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-semibold hover:bg-[#D0B6FF] transition-colors whitespace-nowrap"
                    >
                      View Profile
                    </button>
                    <button
                      onClick={() => navigate(`/enabler/contact/${applicant.id}`)}
                      className="bg-[#6A00B1] text-white px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-semibold hover:bg-[#5A0091] transition-colors whitespace-nowrap"
                    >
                      Contact
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Applicants;
