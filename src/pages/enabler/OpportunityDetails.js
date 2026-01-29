import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EnablerNavbar from "../../components/auth/EnablerNavbar";

const OpportunityDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [opportunity, setOpportunity] = useState(null);

  // Set page title
  useEffect(() => {
    document.title = "Opportunity Details - AfriVate";
  }, []);

  // Load opportunity data from localStorage
  useEffect(() => {
    // Try to get from localStorage first (from CreateOpportunity or OpportunitiesPosted)
    const savedOpportunities = JSON.parse(localStorage.getItem('enablerOpportunities') || '[]');
    const found = savedOpportunities.find(opp => opp.id === id || opp.id === String(id));
    
    if (found) {
      // Ensure all required fields exist with defaults
      setOpportunity({
        id: found.id,
        title: found.title || "Untitled Opportunity",
        company: found.company || "Tech Innovators",
        type: found.type || "Volunteering",
        description: found.description || "No description available.",
        responsibilities: Array.isArray(found.responsibilities) ? found.responsibilities : 
                         (found.responsibilities ? [found.responsibilities] : ["No responsibilities listed."]),
        qualifications: Array.isArray(found.qualifications) ? found.qualifications : 
                       (found.qualifications ? [found.qualifications] : ["No qualifications listed."]),
        aboutCompany: found.aboutCompany || "Tech Innovators is a forward-thinking technology company dedicated to creating positive social impact through innovative digital solutions.",
        applicationInstructions: found.applicationInstructions || "To apply for this position, please complete the application form.",
        jobType: found.jobType || "Volunteer",
        location: found.location || "Not specified",
        workModel: found.workModel || "Not specified",
        timeCommitment: found.timeCommitment || "Not specified"
      });
    } else {
      // Fallback sample data
      setOpportunity({
        id: id || '1',
        title: "Software Developer",
        company: "Innovate Solutions Inc",
        type: "Volunteering",
        description: "Join Innovate Solutions Inc. in our mission to bridge the digital divide and empower underserved communities through technology. We are seeking a passionate Software Developer to help build innovative solutions that make a real difference. As part of our team, you'll work on projects that directly impact lives, from educational platforms to community resource management systems. This role offers a unique opportunity to apply your technical skills while contributing to meaningful social change. We value creativity, collaboration, and a commitment to our mission.",
        responsibilities: [
          "Design, develop, and maintain web applications",
          "Collaborate with cross-functional teams",
          "Write clean, scalable, and well-documented code",
          "Troubleshoot, debug, and upgrade existing software",
          "Participate in code reviews"
        ],
        qualifications: [
          "2+ years of professional software development experience",
          "Proficiency in JavaScript, React, and Node.js",
          "Experience with relational databases (e.g., PostgreSQL)",
          "Strong understanding of software development principles and best practices",
          "Excellent communication and teamwork skills"
        ],
        aboutCompany: "Innovate Solutions Inc. is a forward-thinking technology company dedicated to creating positive social impact through innovative digital solutions. Our mission is to leverage technology to address pressing social challenges and empower communities. We have built a comprehensive platform that connects volunteers with meaningful opportunities, facilitates resource sharing, and promotes sustainable development. Our team is passionate about making a difference, and we foster a collaborative, inclusive culture where every team member's contribution is valued. We believe in the power of technology to transform lives and communities.",
        applicationInstructions: "To apply for this position, please click the 'Apply Now' button below and complete the application form. Be sure to upload your resume and a cover letter that highlights your relevant experience and explains why you're passionate about this opportunity. The application deadline is July 31, 2026. We look forward to reviewing your application and learning more about how you can contribute to our mission.",
        jobType: "Volunteer",
        location: "Nairobi, Kenya",
        workModel: "Hybrid",
        timeCommitment: "Part-time"
      });
    }
  }, [id]);

  if (!opportunity) {
    return (
      <div className="min-h-screen bg-white font-sans">
        <EnablerNavbar />
        <div className="pt-20 px-4 md:px-8 lg:px-12 pb-8">
          <div className="max-w-6xl mx-auto text-center py-12">
            <p className="text-gray-500">Loading opportunity details...</p>
          </div>
        </div>
      </div>
    );
  }

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

          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-black mb-2">
                {opportunity.title}
              </h1>
              <p className="text-gray-700 text-sm md:text-base">
                {opportunity.company} <span className="text-[#6A00B1] font-bold">-{opportunity.type}</span>
              </p>
            </div>

            {/* Edit Button */}
            <button
              onClick={() => navigate(`/enabler/edit-opportunity/${opportunity.id}`)}
              className="bg-[#6A00B1] text-white px-6 py-2.5 rounded-lg text-sm md:text-base font-semibold hover:bg-[#5A0091] transition-colors whitespace-nowrap self-start md:self-auto"
            >
              Edit
            </button>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Volunteering Description */}
              <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <h2 className="text-xl md:text-2xl font-bold text-black">
                    Volunteering Description
                  </h2>
                  <button
                    onClick={() => navigate(`/enabler/edit-opportunity/${opportunity.id}?section=description`)}
                    className="text-[#6A00B1] hover:text-[#5A0091] transition-colors"
                  >
                    <i className="fa fa-pencil text-sm"></i>
                  </button>
                </div>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {opportunity.description}
                </p>
              </div>

              {/* Key Responsibilities */}
              <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <h2 className="text-xl md:text-2xl font-bold text-black">
                    Key Responsibilities
                  </h2>
                  <button
                    onClick={() => navigate(`/enabler/edit-opportunity/${opportunity.id}?section=responsibilities`)}
                    className="text-[#6A00B1] hover:text-[#5A0091] transition-colors"
                  >
                    <i className="fa fa-pencil text-sm"></i>
                  </button>
                </div>
                <ul className="space-y-2">
                  {opportunity.responsibilities.map((responsibility, index) => (
                    <li key={index} className="text-gray-700 text-sm md:text-base flex items-start gap-2">
                      <span className="text-[#6A00B1] mt-1">•</span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Qualifications & Requirements */}
              <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <h2 className="text-xl md:text-2xl font-bold text-black">
                    Qualifications & Requirements
                  </h2>
                  <button
                    onClick={() => navigate(`/enabler/edit-opportunity/${opportunity.id}?section=qualifications`)}
                    className="text-[#6A00B1] hover:text-[#5A0091] transition-colors"
                  >
                    <i className="fa fa-pencil text-sm"></i>
                  </button>
                </div>
                <ul className="space-y-2">
                  {opportunity.qualifications.map((qualification, index) => (
                    <li key={index} className="text-gray-700 text-sm md:text-base flex items-start gap-2">
                      <span className="text-[#6A00B1] mt-1">•</span>
                      <span>{qualification}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* About the Company */}
              <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <h2 className="text-xl md:text-2xl font-bold text-black">
                    About the Company
                  </h2>
                  <button
                    onClick={() => navigate(`/enabler/edit-opportunity/${opportunity.id}?section=about`)}
                    className="text-[#6A00B1] hover:text-[#5A0091] transition-colors"
                  >
                    <i className="fa fa-pencil text-sm"></i>
                  </button>
                </div>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {opportunity.aboutCompany}
                </p>
              </div>

              {/* Application Instructions */}
              <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <h2 className="text-xl md:text-2xl font-bold text-black">
                    Application Instructions
                  </h2>
                  <button
                    onClick={() => navigate(`/enabler/edit-opportunity/${opportunity.id}?section=instructions`)}
                    className="text-[#6A00B1] hover:text-[#5A0091] transition-colors"
                  >
                    <i className="fa fa-pencil text-sm"></i>
                  </button>
                </div>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {opportunity.applicationInstructions}
                </p>
              </div>
            </div>

            {/* Right Column - Job Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 sticky top-24">
                <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
                  Job Summary
                </h2>
                
                <div className="space-y-4">
                  {/* Job Type */}
                  <div className="flex items-center gap-3">
                    <i className="fa fa-briefcase text-[#6A00B1] text-lg"></i>
                    <div>
                      <p className="text-gray-600 text-xs md:text-sm">Job Type</p>
                      <p className="text-gray-900 font-medium text-sm md:text-base">
                        {opportunity.jobType}
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-3">
                    <i className="fa fa-map-marker text-[#6A00B1] text-lg"></i>
                    <div>
                      <p className="text-gray-600 text-xs md:text-sm">Location</p>
                      <p className="text-gray-900 font-medium text-sm md:text-base">
                        {opportunity.location}
                      </p>
                    </div>
                  </div>

                  {/* Work Model */}
                  {opportunity.workModel && (
                    <div className="flex items-center gap-3">
                      <i className="fa fa-laptop text-[#6A00B1] text-lg"></i>
                      <div>
                        <p className="text-gray-600 text-xs md:text-sm">Work Model</p>
                        <p className="text-gray-900 font-medium text-sm md:text-base">
                          {opportunity.workModel}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Time Commitment */}
                  {opportunity.timeCommitment && (
                    <div className="flex items-center gap-3">
                      <i className="fa fa-clock text-[#6A00B1] text-lg"></i>
                      <div>
                        <p className="text-gray-600 text-xs md:text-sm">Time Commitment</p>
                        <p className="text-gray-900 font-medium text-sm md:text-base">
                          {opportunity.timeCommitment}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunityDetails;
