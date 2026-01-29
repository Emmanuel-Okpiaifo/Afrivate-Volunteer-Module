import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import EnablerNavbar from "../../components/auth/EnablerNavbar";

const EditOpportunity = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-white font-sans">
      <EnablerNavbar />
      <div className="pt-20 px-4 md:px-8 lg:px-12 pb-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-black mb-4">
            Edit Opportunity
          </h1>
          <p className="text-gray-600 mb-6">
            Edit functionality coming soon. This will allow you to modify opportunity details.
          </p>
          <button
            onClick={() => navigate(`/enabler/opportunity/${id}`)}
            className="bg-[#6A00B1] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#5A0091] transition-colors"
          >
            Back to Opportunity Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditOpportunity;
