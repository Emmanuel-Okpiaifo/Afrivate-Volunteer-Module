import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EnablerNavbar from "../../components/auth/EnablerNavbar";

const defaultCompanyData = {
  name: "TECH INNOVATORS",
  logo: "",
  description: "Driving innovation in the tech sector, empowering youth through education and employment opportunities.",
  details: {
    industry: "Technology",
    size: "50-200 employees",
    founded: "2015",
    location: "New York, USA",
  },
  website: "www.techinnovators.org",
  about: {
    mission: "To bridge the gap between talent and opportunity, fostering a diverse and inclusive workforce.",
    values: "Integrity, Innovation, Collaboration, Impact",
    sector: "Technology & Education",
  },
  employerBrand: "At Tech Innovators Inc., we believe in nurturing talent and providing a platform for growth.",
  badges: [
    { name: "Afrivate-certified", icon: "fa-shield" },
    { name: "CSR-verified", icon: "fa-trophy" },
  ],
  impactMetrics: {
    volunteersHosted: 150,
    jobsOffered: 75,
  },
};

function buildCompanyDataFromEnablerProfile(profile) {
  if (!profile || !profile.name) return defaultCompanyData;
  return {
    name: (profile.name || defaultCompanyData.name).toUpperCase(),
    logo: profile.profilePictureDataUrl || "",
    description: profile.bio || defaultCompanyData.description,
    details: {
      industry: profile.role || defaultCompanyData.details.industry,
      size: profile.employees ? `${profile.employees} employees` : defaultCompanyData.details.size,
      founded: profile.createdAt ? new Date(profile.createdAt).getFullYear().toString() : defaultCompanyData.details.founded,
      location: [profile.address, profile.state, profile.country].filter(Boolean).join(", ") || defaultCompanyData.details.location,
    },
    website: profile.website || defaultCompanyData.website,
    about: {
      mission: profile.bio || defaultCompanyData.about.mission,
      values: defaultCompanyData.about.values,
      sector: profile.role || defaultCompanyData.about.sector,
    },
    employerBrand: profile.bio || defaultCompanyData.employerBrand,
    badges: defaultCompanyData.badges,
    impactMetrics: defaultCompanyData.impactMetrics,
  };
}

const EnablerProfile = () => {
  const navigate = useNavigate();
  const [companyData, setCompanyData] = useState(defaultCompanyData);

  useEffect(() => {
    document.title = "Enabler Profile - AfriVate";
    try {
      const saved = localStorage.getItem("enablerProfile");
      if (saved) {
        const profile = JSON.parse(saved);
        setCompanyData(buildCompanyDataFromEnablerProfile(profile));
      }
    } catch (e) {
      console.error("Error loading enabler profile:", e);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <EnablerNavbar />
      
      {/* Main Content */}
      <div className="pt-20 px-4 md:px-8 lg:px-12 pb-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="mb-4 text-[#6A00B1] hover:text-[#5A0091] transition-colors"
          >
            <i className="fa fa-arrow-left text-xl"></i>
          </button>

          {/* Profile Header Section */}
          <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6 mb-8">
            {/* Company Logo */}
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden">
              {companyData.logo ? (
                <img src={companyData.logo} alt="Company" className="w-full h-full object-cover" />
              ) : (
                <div className="w-12 h-12 bg-black rounded"></div>
              )}
            </div>

            {/* Company Info */}
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl sm:text-3xl font-bold text-black mb-2">
                {companyData.name}
              </h1>
              <p className="text-gray-700 text-sm md:text-base mb-3">
                {companyData.description}
              </p>
              <p className="text-gray-600 text-xs md:text-sm mb-1">
                {companyData.details.industry} | {companyData.details.size} | Founded {companyData.details.founded}
              </p>
              <p className="text-gray-600 text-xs md:text-sm mb-4">
                Location: {companyData.details.location}
              </p>
              
              {/* Website Button */}
              <button className="bg-[#6A00B1] text-white px-4 py-2 rounded-lg text-xs md:text-sm font-medium hover:bg-[#5A0091] transition-colors mb-4 md:mb-0">
                {companyData.website}
              </button>
            </div>

            {/* Edit Profile Button */}
            <button
              onClick={() => navigate('/enabler/edit-profile')}
              className="bg-[#6A00B1] text-white px-4 md:px-6 py-2 md:py-2.5 rounded-lg text-xs md:text-sm font-semibold hover:bg-[#5A0091] transition-colors flex items-center gap-2 whitespace-nowrap self-start md:self-auto"
            >
              <i className="fa fa-pencil text-xs"></i>
              Edit Profile
            </button>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left Column - About Us & Employer Brand */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* About Us Section */}
              <div className="bg-white rounded-[30px] p-4 md:p-6 border border-gray-200">
                <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
                  About Us
                </h2>
                
                <div className="space-y-4">
                  {/* Mission */}
                  <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 pb-4 border-b border-gray-200">
                    <h3 className="font-bold text-black text-sm md:text-base flex-shrink-0 sm:w-24">
                      Mission
                    </h3>
                    <p className="text-gray-700 text-xs md:text-sm flex-1">
                      {companyData.about.mission}
                    </p>
                  </div>

                  {/* Values */}
                  <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 pb-4 border-b border-gray-200">
                    <h3 className="font-bold text-black text-sm md:text-base flex-shrink-0 sm:w-24">
                      Values
                    </h3>
                    <p className="text-gray-700 text-xs md:text-sm flex-1">
                      {companyData.about.values}
                    </p>
                  </div>

                  {/* Sector */}
                  <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                    <h3 className="font-bold text-black text-sm md:text-base flex-shrink-0 sm:w-24">
                      Sector
                    </h3>
                    <p className="text-gray-700 text-xs md:text-sm flex-1">
                      {companyData.about.sector}
                    </p>
                  </div>
                </div>
              </div>

              {/* Employer Brand Section */}
              <div className="bg-white rounded-[30px] p-4 md:p-6 border border-gray-200">
                <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
                  Employer Brand
                </h2>
                <p className="text-gray-700 text-xs md:text-sm leading-relaxed whitespace-pre-line">
                  {companyData.employerBrand}
                </p>
              </div>
            </div>

            {/* Right Column - Verification Badges & Impact Metrics */}
            <div className="space-y-6">
              
              {/* Verification Badges Section */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
                  Verification Badges
                </h2>
                <div className="flex flex-col sm:flex-row gap-3">
                  {companyData.badges.map((badge, index) => (
                    <div
                      key={index}
                      className="bg-[#6A00B1] text-white px-4 py-2.5 rounded-full text-xs md:text-sm font-medium flex items-center gap-2 w-fit md:w-auto"
                    >
                      <i className={`fa ${badge.icon} text-xs`}></i>
                      {badge.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact Metrics Section */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
                  Impact Metrics
                </h2>
                <div className="space-y-3">
                  {/* Volunteers Hosted Card */}
                  <div className="bg-white rounded-[30px] p-4 md:p-5 border border-gray-200 w-fit md:w-full">
                    <p className="text-gray-600 text-xs md:text-sm mb-2">
                      Volunteers Hosted
                    </p>
                    <p className="text-2xl sm:text-3xl font-bold text-black text-center md:text-left">
                      {companyData.impactMetrics.volunteersHosted}
                    </p>
                  </div>

                  {/* Jobs Offered Card */}
                  <div className="bg-white rounded-[30px] p-4 md:p-5 border border-gray-200 w-fit md:w-full">
                    <p className="text-gray-600 text-xs md:text-sm mb-2">
                      Jobs Offered
                    </p>
                    <p className="text-2xl sm:text-3xl font-bold text-black text-center md:text-left">
                      {companyData.impactMetrics.jobsOffered}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnablerProfile;
