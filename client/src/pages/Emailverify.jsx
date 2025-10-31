import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const EmailVerify = () => {
  const navigate = useNavigate();
  const { backendUrl, getUserData,isLoggedin,userData } = useContext(AppContext);
  const [otp, setOtp] = useState("");

  axios.defaults.withCredentials = true;

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(`${backendUrl}/api/auth/verify-account`, { otp });
      if (data.success) {
        toast.success(data.message);
        getUserData();
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

useEffect(()=>{

  isLoggedin && userData && userData.isAccountVerified && navigate('/')
},[isLoggedin,userData])


  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="bg-gray-900 text-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-2">Email Verify OTP</h1>
        <p className="text-center text-gray-300 mb-6">
          Enter the 6-digit OTP sent to your account
        </p>

        <form className="space-y-5" onSubmit={onSubmitHandler}>
          <input
            type="text"
            maxLength="6"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter 6-digit OTP"
            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-center text-lg tracking-widest
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-all duration-200"
          >
            Verify Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailVerify;
