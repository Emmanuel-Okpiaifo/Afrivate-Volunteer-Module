import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from '../../components/auth/Navbar';
import * as api from '../../services/api';

const FALLBACK_OPPORTUNITIES = [
  { id: "1", title: "Software Engineer", company: "Tech Startup-Remote", type: "Volunteering", location: "Remote", button: "Apply" },
  { id: "2", title: "Hardware Engineer", company: "Local NGO-Accra", type: "Volunteering", location: "Accra, Ghana", button: "Apply" },
  { id: "3", title: "Cloud Engineer", company: "Tech Startup-Remote", type: "Volunteering", location: "Remote", button: "Apply" },
  { id: "4", title: "UI/UX Designer", company: "Local NGO-Remote", type: "Volunteering", location: "Remote", button: "Apply" },
  { id: "5", title: "Web Developer", company: "Tech Startup-Remote", type: "Volunteering", location: "Remote", button: "Apply" },
];

function mapOpportunityFromApi(item) {
  if (!item) return null;
  return {
    id: String(item.id),
    title: item.title || '',
    company: item.link || 'Remote',
    type: 'Volunteering',
    location: 'Remote',
    button: 'Apply',
    _raw: item,
  };
}

const Opportunity = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [savedIds, setSavedIds] = useState(new Set());

  const loadOpportunities = useCallback(async () => {
    setLoading(true);
    try {
      const data = await api.bookmark.opportunitiesList();
      const arr = Array.isArray(data) ? data.map(mapOpportunityFromApi).filter(Boolean) : [];
      setList(arr.length ? arr : FALLBACK_OPPORTUNITIES.map((o) => ({ ...o })));
    } catch (_) {
      setList(FALLBACK_OPPORTUNITIES.map((o) => ({ ...o })));
    } finally {
      setLoading(false);
    }
  }, []);

  const loadSavedIds = useCallback(async () => {
    try {
      const data = await api.bookmark.opportunitiesSavedList();
      const ids = Array.isArray(data) ? data.map((s) => String(s.opportunity_id ?? s.id)) : [];
      setSavedIds(new Set(ids));
    } catch (_) {}
  }, []);

  useEffect(() => {
    document.title = "Opportunities - AfriVate";
    try {
      const q = sessionStorage.getItem("discoverQuery");
      if (q) {
        setSearch(q);
        sessionStorage.removeItem("discoverQuery");
      }
    } catch (_) {}
  }, []);

  useEffect(() => {
    loadOpportunities();
    loadSavedIds();
  }, [loadOpportunities, loadSavedIds]);

  const filteredList = list.filter((item) => {
    return item.title.toLowerCase().includes(search.toLowerCase()) ||
           (item.company || '').toLowerCase().includes(search.toLowerCase());
  });

  const handleSave = async (item) => {
    try {
      await api.bookmark.opportunitiesSavedCreate({ opportunity_id: Number(item.id) || item.id });
      setSavedIds((prev) => new Set([...prev, String(item.id)]));
    } catch (_) {}
  };

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
          {loading ? (
            <div className="text-center py-8 text-gray-500">Loading opportunities...</div>
          ) : (
            <div className="flex flex-col gap-2.5">
              {filteredList.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-gray-200 rounded-lg p-3 flex items-center gap-3 hover:shadow-sm transition-all"
                >
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-bold text-gray-900 text-sm mb-0.5">{item.title}</h2>
                    <p className="text-xs text-gray-500">{item.company}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                      type="button"
                      onClick={() => handleSave(item)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${savedIds.has(String(item.id)) ? 'bg-gray-200 text-gray-600' : 'bg-gray-100 text-[#6A00B1] hover:bg-gray-200'}`}
                      title={savedIds.has(String(item.id)) ? 'Saved' : 'Save'}
                    >
                      {savedIds.has(String(item.id)) ? 'Saved' : 'Save'}
                    </button>
                    <button
                      type="button"
                      onClick={() => navigate('/volunteer-details', { state: { job: item } })}
                      className="bg-[#6A00B1] text-white px-4 py-1.5 rounded-lg text-xs font-medium hover:bg-[#5A0091] transition-colors whitespace-nowrap"
                    >
                      {item.button}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
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
