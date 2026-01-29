import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from '../../components/common/Input';
import Google from '../../../src/Assets/pngwing.com(10) 1.png';

const SignUp = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Sign Up - AfriVate";
  }, []);
  const [formData, setFormData] = useState({
    userType: "freelancer", // default
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.username) {
      newErrors.username = "Username is required";
    } else if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    } else if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) {
      newErrors.username =
        "Username can only contain letters, numbers, and underscores";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    } else if (formData.email.length > 50) {
      newErrors.email = "Email must be less than 50 characters";
    }

    if (!formData.userType) {
      newErrors.userType = "Please select a role";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/[A-Z]/.test(formData.password)) {
      newErrors.password = "Password must contain at least one uppercase letter";
    } else if (!/[a-z]/.test(formData.password)) {
      newErrors.password = "Password must contain at least one lowercase letter";
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
      newErrors.password =
        "Password must contain at least one special character";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle role change
  const handleRoleChange = (role) => {
    setFormData((prev) => ({ ...prev, userType: role }));
    console.log(`${role.charAt(0).toUpperCase() + role.slice(1)} selected`);
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
  
    setLoading(true);
    setServerError('');
  
    try {
      const response = await fetch('https://afrivate-backend-test.onrender.com/api/auth/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          first_name: formData.firstName || "User",
          last_name: formData.lastName || " ",
          password: formData.password,
          password2: formData.confirmPassword,
          role: formData.userType === "freelancer" ? "enabler" : "pathfinder",
        }),
      });
  
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.detail || 'Signup failed');
      }
  
      console.log('✅ Signup successful:', data);
      // Mark that user needs to complete profile
      localStorage.setItem('hasCompletedProfile', 'false');
      // Redirect based on user type
      if (formData.userType === "freelancer") {
        // Enabler - redirect to enabler profile setup
        localStorage.setItem('hasCompletedEnablerProfile', 'false');
        navigate('/enabler/profile-setup');
      } else {
        // Pathfinder - redirect to pathfinder profile setup
        navigate('/edit-new-profile');
      }
    } catch (err) {
      console.error('❌ Signup error:', err.message);
      setServerError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center px-5 py-2 sm:px-8 lg:px-10">
      <div className="sm:px-20 max-w-md w-full mx-auto bg-[rgba(246,246,246)] p-8 rounded-lg shadow">
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-center bg-gradient-to-r from-[#45005A] to-[#B678FF] bg-clip-text text-transparent mb-2">
            Sign Up
          </h1>
          <p className="text-center text-gray-600 text-sm">
            Create your account and start your volunteering journey with AfriVate
          </p>
        </div>

        <div className="flex bg-white mb-3 w-full  text-[#45005A] font-bold text-lg py-4 rounded-[15px] ">
      <img src={Google} alt="Google logo" className="w-[22px] h-[22px] mx-2 ml-2 mt-1" /> Signup with Google <i class="fas fa-solid fa-arrow-right ml-6 mt-1"></i>
      </div>

      <div className="relative mx-2 mb-5">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-black " />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-6 bg-[rgba(246,246,246)] text-black font-medium">Or</span>
              </div>
            </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username */}
          <div>
            <Input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className=""
            />
            {errors.username && (
              <p className="text-red-500 text-xs mt-1">{errors.username}</p>
            )}
          </div>

          

          {/* Email */}
          <div>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1 rounded-2xl">{errors.email}</p>
            )}
          </div>
          

          {/* Role Toggle */}
          <div className="relative flex w-full bg-gray-200 rounded-2xl overflow-hidden">
            {/* Sliding background */}
            <div
              className={`absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-[#45005A] to-[#B678FF] transition-transform duration-300 rounded-2xl ${
                formData.userType === "freelancer"
                  ? "translate-x-0"
                  : "translate-x-full"
              }`}
            />
            <button
              type="button"
              onClick={() => handleRoleChange("freelancer")}
              className={`relative flex-1 py-3  z-10 text-xs transition-colors ${
                formData.userType === "freelancer"
                  ? "text-white"
                  : "text-[#002060]"
              }`}
            >
              <i class="fas fa-regular fa-user-circle  text-base mr-1"></i> AS FREELANCER
            </button>
            <button
              type="button"
              onClick={() => handleRoleChange("employer")}
              className={`relative flex-1 py-3 z-10 text-xs transition-colors ${
                formData.userType === "employer"
                  ? "text-white"
                  : "text-[#002060]"
              }`}
            >
             <i class="fas fa-regular fa-user-circle text-base mr-1"></i> AS EMPLOYER
            </button>
          </div>
          {errors.userType && (
            <p className="text-red-500 text-xs mt-1 text-center">
              {errors.userType}
            </p>
          )}

          {/* Password */}
          <div>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className=""
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Repeat Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className=""
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="accent-[#002060] w-4 h-4"
              />
              <span className="text-[#002060]">Remember me</span>
            </label>
            <Link to="/forgot-password" className="text-[#002060] font-semibold">
              Forget Password?
            </Link>
          </div>

          {/* Submit */}
                    {serverError && (
            <p className="text-red-500 text-center text-sm font-semibold mb-2">
              {serverError}
            </p>
          )}

         
        <button
          type="submit"
          disabled={loading}
          className={`w-full mt-4 py-2 rounded-full text-white font-bold text-lg ${
            loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#6A00B1]'
          }`}
        >
          {loading ? 'Creating account...' : 'Proceed'}
        </button>

        </form>

        {/* Login */}
        <Link to="/login">
          <p className="mt-8 text-sm text-black text-center">
            Already have an account?{" "}
            <span className="text-[#012B52] font-semibold">Log in</span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
