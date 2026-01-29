import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/auth/Navbar";

const VolunteerDetails = () => {
  const navigate = useNavigate();
  
  // Get job ID from URL or use a default (in real app, this would come from route params)
  const jobId = "software-engineer-innovate-solutions";
  const jobData = {
    id: jobId,
    title: "Software Engineer",
    company: "Innovate Solutions Inc",
    type: "Volunteering",
    location: "Nairobi, Kenya",
  };

  useEffect(() => {
    document.title = "Volunteer Details - AfriVate";
  }, []);

  // Load bookmarked status from localStorage
  const [isBookmarked, setIsBookmarked] = useState(() => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarkedJobs') || '[]');
    return bookmarks.includes(jobId);
  });

  // Save/remove bookmark from localStorage
  const handleBookmarkToggle = () => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarkedJobs') || '[]');
    
    if (isBookmarked) {
      // Remove bookmark
      const updatedBookmarks = bookmarks.filter(id => id !== jobId);
      localStorage.setItem('bookmarkedJobs', JSON.stringify(updatedBookmarks));
      // Also remove from bookmarkedJobsData
      const bookmarkedJobsData = JSON.parse(localStorage.getItem('bookmarkedJobsData') || '[]');
      const updatedJobsData = bookmarkedJobsData.filter(job => job.id !== jobId);
      localStorage.setItem('bookmarkedJobsData', JSON.stringify(updatedJobsData));
      setIsBookmarked(false);
    } else {
      // Add bookmark
      const updatedBookmarks = [...bookmarks, jobId];
      localStorage.setItem('bookmarkedJobs', JSON.stringify(updatedBookmarks));
      // Also store full job data for the bookmarks page
      const bookmarkedJobsData = JSON.parse(localStorage.getItem('bookmarkedJobsData') || '[]');
      const updatedJobsData = [...bookmarkedJobsData.filter(job => job.id !== jobId), jobData];
      localStorage.setItem('bookmarkedJobsData', JSON.stringify(updatedJobsData));
      setIsBookmarked(true);
    }
  };

  const similarOpportunities = [
    {
      id: 1,
      company: "TechPro Africa",
      title: "Frontend Developer",
      type: "Volunteer",
      location: "Lagos, Nigeria",
    },
    {
      id: 2,
      company: "Digital Future NGO",
      title: "Project Manager",
      type: "Volunteer",
      location: "Nairobi, Kenya",
    },
    {
      id: 3,
      company: "Code Connect",
      title: "Backend Engineer",
      type: "Volunteer",
      location: "Cape Town, South Africa",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <NavBar />
      
      {/* Main Content */}
      <div className="pt-20 px-4 md:px-8 lg:px-12 pb-8">
        <div className="max-w-5xl mx-auto">
          {/* Job Header Section */}
          <div className="mb-6">
            <button
              onClick={() => navigate(-1)}
              className="mb-4 text-gray-600 hover:text-gray-900"
            >
              <i className="fa fa-arrow-left text-xl"></i>
            </button>
            
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl font-bold text-black mb-2">
                  Software Engineer
                </h1>
                <p className="text-gray-600 text-base md:text-lg">
                  Innovate Solutions Inc -Volunteering
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <button className="bg-[#6A00B1] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#5A0091] transition-colors whitespace-nowrap">
                  Apply
                </button>
                <button
                  onClick={handleBookmarkToggle}
                  className={`w-10 h-10 flex items-center justify-center border rounded-lg transition-colors ${
                    isBookmarked 
                      ? 'bg-purple-50 border-purple-300 hover:bg-purple-100' 
                      : 'border-gray-300 hover:bg-gray-50'
                  }`}
                  title={isBookmarked ? 'Remove from bookmarks' : 'Save to bookmarks'}
                >
                  {isBookmarked ? (
                    <i className="fa fa-bookmark text-[#6A00B1] text-lg"></i>
                  ) : (
                    <svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      viewBox="0 0 24 24"
                      style={{ color: '#6A00B1' }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  )}
                </button>
                <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <i className="fa fa-share-alt text-gray-600"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Two-Column Layout */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Column - Main Content */}
            <div className="flex-1 space-y-6">
              {/* Volunteering Description */}
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  Volunteering Description
                </h2>
                <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
                  <p>
                    Join Innovate Solutions Inc. as a Software Engineer Volunteer and make a meaningful impact 
                    in the tech community. We are seeking passionate developers who are eager to contribute their 
                    skills to innovative projects while gaining valuable experience in a collaborative environment.
                  </p>
                  <p>
                    As a volunteer, you will work alongside our experienced development team on real-world projects 
                    that address critical challenges. This is an excellent opportunity to enhance your portfolio, 
                    learn new technologies, and network with industry professionals.
                  </p>
                  <p>
                    We welcome candidates who are committed to making a difference and are excited about the 
                    opportunity to grow both personally and professionally in a supportive, dynamic environment.
                  </p>
                </div>
              </section>

              {/* Key Responsibilities */}
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  Key Responsibilities
                </h2>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#6A00B1] mr-2">•</span>
                    <span>Design, develop, and maintain web applications using modern frameworks and technologies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#6A00B1] mr-2">•</span>
                    <span>Collaborate with cross-functional teams to define, design, and ship new features</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#6A00B1] mr-2">•</span>
                    <span>Write clean, maintainable, and efficient code following best practices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#6A00B1] mr-2">•</span>
                    <span>Participate in code reviews and contribute to team knowledge sharing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#6A00B1] mr-2">•</span>
                    <span>Debug and resolve technical issues in existing applications</span>
                  </li>
                </ul>
              </section>

              {/* Qualifications & Requirements */}
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  Qualifications & Requirements
                </h2>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#6A00B1] mr-2">•</span>
                    <span>2+ years of professional software development experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#6A00B1] mr-2">•</span>
                    <span>Proficiency in JavaScript, Python, or Java</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#6A00B1] mr-2">•</span>
                    <span>Experience with version control systems (Git)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#6A00B1] mr-2">•</span>
                    <span>Strong problem-solving skills and attention to detail</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#6A00B1] mr-2">•</span>
                    <span>Excellent communication and teamwork abilities</span>
                  </li>
                </ul>
              </section>

              {/* About the Company */}
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  About the Company
                </h2>
                <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
                  <p>
                    Innovate Solutions Inc. is a forward-thinking technology company dedicated to creating 
                    innovative solutions that address real-world challenges. Our mission is to leverage technology 
                    for social good while fostering a culture of innovation, collaboration, and continuous learning.
                  </p>
                  <p>
                    We believe in empowering our team members and volunteers to reach their full potential. 
                    Our inclusive and supportive environment encourages creativity, professional growth, and 
                    meaningful contributions to impactful projects.
                  </p>
                </div>
              </section>

              {/* Application Instructions */}
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  Application Instructions
                </h2>
                <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
                  <p>
                    To apply for this volunteering opportunity, please click the "Apply Now" button above. 
                    You will be prompted to upload your resume and a cover letter explaining your interest 
                    in this position and how your skills align with our requirements.
                  </p>
                  <p>
                    Applications will be reviewed on a rolling basis, and we encourage early submissions. 
                    The deadline for applications is <span className="font-semibold">July 31, 2026</span>. 
                    Selected candidates will be contacted for an interview within two weeks of application.
                  </p>
                </div>
              </section>
            </div>

            {/* Right Column - Job Summary Card */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="bg-white border border-gray-200 rounded-lg p-5 sticky top-24">
                {/* Company Logo Placeholder */}
                <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
                
                {/* Company Name */}
                <h3 className="text-lg font-bold text-gray-900 text-center mb-2">
                  Innovate Solutions Inc.
                </h3>
                <a href="#" className="text-[#6A00B1] text-sm text-center block mb-5 hover:underline">
                  View Company Profile
                </a>

                {/* Job Summary */}
                <div className="border-t border-gray-200 pt-5 space-y-4">
                  <h4 className="font-bold text-gray-900 text-base mb-3">
                    Job Summary
                  </h4>
                  
                  <div className="flex items-start gap-3">
                    <i className="fa fa-briefcase text-[#6A00B1] mt-1"></i>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Job Type:</p>
                      <p className="text-sm font-medium text-gray-900">Volunteer</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <i className="fa fa-map-marker text-[#6A00B1] mt-1"></i>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Location:</p>
                      <p className="text-sm font-medium text-gray-900">Nairobi, Kenya</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Similar Volunteering Opportunities */}
          <section className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Similar Volunteering Opportunities
            </h2>
            
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {similarOpportunities.map((opportunity) => (
                <div
                  key={opportunity.id}
                  className="bg-white border border-gray-200 rounded-lg p-4 min-w-[280px] flex-shrink-0 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {opportunity.company}
                  </h3>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">
                    {opportunity.title}
                  </h4>
                  <div className="flex flex-wrap gap-2 items-center mb-3">
                    <span className="text-orange-600 font-medium text-xs">
                      {opportunity.type}
                    </span>
                    <span className="text-gray-500 text-xs">
                      {opportunity.location}
                    </span>
                  </div>
                  <button className="w-full bg-[#6A00B1] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#5A0091] transition-colors">
                    Apply
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default VolunteerDetails;
