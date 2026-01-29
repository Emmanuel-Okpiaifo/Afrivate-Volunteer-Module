import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Navbar from './components/layout/Navbar';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import ForgotPassword from './pages/auth/ForgotPassword';
import VerifyOTP from './pages/auth/VerifyOTP';
import ResetPassword from './pages/auth/ResetPassword';
import CreateOpportunity from './pages/enabler/CreateOpportunity';
import Recommendations from './pages/enabler/Recommendations';
import EnablerProfile from './pages/enabler/EnablerProfile';
import OpportunityDetails from './pages/enabler/OpportunityDetails';
import EditOpportunity from './pages/enabler/EditOpportunity';
import EditProfile from './pages/enabler/EditProfile';
import OpportunitiesPosted from './pages/enabler/OpportunitiesPosted';
import Settings from './pages/enabler/Settings';
import PathfinderProfile from './pages/enabler/PathfinderProfile';
import ContactPathfinder from './pages/enabler/ContactPathfinder';
import Applicants from './pages/enabler/Applicants';
import EnablerProfileSetup from './pages/enabler/EnablerProfileSetup';
import Landing from './pages/Landing';
import LandingPathfinder from './pages/LandingPathfinder';
import Landingenabler from './pages/Landingenabler';
import DashF from './pages/Dash-freelance';
import DashE from './pages/Dash-employer';
import EnablerDashboard from './pages/enabler/EnablerDashboard';
import Emppro from './pages/emppro';
import Opportunity from './pages/pathfinder/Opportunity';
import Subm from './pages/subm';
import Pathf from './pages/pathfinder/PathfinderDashboard';
import VolunteerDetails from './pages/pathfinder/VolunteerDetails';
import Bookmarks from './pages/pathfinder/Bookmarks';
import EditNewProfile from './pages/pathfinder/EditNewProfile';
import Community from './pages/Community';
import Discover from './pages/Discover';
import Road from './pages/Roadmap';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import KYCForm from './components/forms/KYCForm';
function App() {
  return (
    <UserProvider>
      <div className="min-h-screen bg-gray-50 overflow-x-hidden">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/landingpathfinder" element={<LandingPathfinder />} />
          <Route path="/landingenabler" element={<Landingenabler />} />
          <Route path="/dashf" element={<DashF />} />
          <Route path="/enabler/dashboard" element={<EnablerDashboard />} />
          <Route path="/emppro" element={<Emppro />} />
          <Route path="/opportunity" element={<Opportunity />} />
          <Route path="/volunteer-details" element={<VolunteerDetails />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/edit-new-profile" element={<EditNewProfile />} />
          <Route path="/subm" element={<Subm />} />
          <Route path="/pathf" element={<Pathf />} />
          <Route path="/community" element={<Community />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/road" element={<Road />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verify-otp" element={<VerifyOTP />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/create-opportunity" element={<CreateOpportunity />} />
          <Route path="/enabler/recommendations" element={<Recommendations />} />
          <Route path="/enabler/profile" element={<EnablerProfile />} />
          <Route path="/enabler/edit-profile" element={<EditProfile />} />
          <Route path="/enabler/opportunity/:id" element={<OpportunityDetails />} />
          <Route path="/enabler/edit-opportunity/:id" element={<EditOpportunity />} />
          <Route path="/enabler/opportunities-posted" element={<OpportunitiesPosted />} />
          <Route path="/enabler/settings" element={<Settings />} />
          <Route path="/enabler/pathfinder/:id" element={<PathfinderProfile />} />
          <Route path="/enabler/contact/:id" element={<ContactPathfinder />} />
          <Route path="/enabler/applicants/:id" element={<Applicants />} />
          <Route path="/enabler/profile-setup" element={<EnablerProfileSetup />} />

          {/* Protected routes */}
          <Route
            path="/dashboard"
            element={
              <>
                <Navbar />
                <Dashboard />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <Navbar />
                <Profile />
              </>
            }
          />
          <Route
            path="/kyc"
            element={
              <>
                <Navbar />
                <KYCForm />
              </>
            }
          />
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
