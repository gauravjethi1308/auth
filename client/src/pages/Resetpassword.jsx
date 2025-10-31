import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";


const ResetPassword = () => {
  const navigate = useNavigate();

  const {backendUrl} = useContext(AppContext)
  axios.defaults.withCredentials = true

  const[email , setemail] = useState('')
    const[newPassword, setnewPassword] = useState('')
    const [isEmailSent ,setIsEmailSent] =useState('')
        const [otp ,setOtp] =useState('')
            const [isOtpSubmited ,setIsOtpSubmited] =useState(false)

            

    

 const onSubmitEmail = async(e)=>{
  e.preventDefault();
  try {
    const { data } = await axios.post(`${backendUrl}/api/auth/send-reset-otp`, { email });

  data.success ? toast.success(data.message): toast.error(data.message)
  data.success && setIsEmailSent(true) } catch (error) {
    toast.error(error.message)
  }
 } 


 const onSubmitOTP = async(e) =>{
  e.preventDefault();
  setIsOtpSubmited(true)
 }


  const onSubmitNewPassword = async(e) =>{
  e.preventDefault();
  
  try {
    const{data} = await axios.post(backendUrl + '/api/auth/reset-password',
      {email,otp,newPassword}
    )
    data.success ? toast.success(data.message) : toast.error(data.message)
    data.success && navigate('/login')
  } catch (error) {
    toast.error(error.message)
  }
 }


  return (
    <>
    {!isEmailSent &&
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="bg-gray-900 text-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        {/* Heading */}
        <h1 className="text-2xl font-bold text-center mb-2">
          Reset Password
        </h1>

        {/* Subheading */}
        <p className="text-center text-gray-300 mb-6">
          Enter your email to reset your password
        </p>

        {/* Form */}
        <form className="space-y-5" onSubmit={onSubmitEmail}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e=> setemail(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-lg
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-all duration-200"
          >
            Submit
          </button>
        </form>

      </div>
    </div>
}



        {/*otp input form */}
            {!isOtpSubmited && isEmailSent && 


<div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="bg-gray-900 text-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-2">Email Reset OTP</h1>
        <p className="text-center text-gray-300 mb-6">
          Enter the 6-digit OTP sent to your account
        </p>

        <form className="space-y-5" onSubmit={onSubmitOTP} >
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
            Submit
          </button>
        </form>
      </div>
    </div>
}


    {/* enter new password */}
{isOtpSubmited && isEmailSent && 
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="bg-gray-900 text-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        {/* Heading */}
        <h1 className="text-2xl font-bold text-center mb-2">
          New Password
        </h1>

        {/* Subheading */}
        <p className="text-center text-gray-300 mb-6">
          Enter  your new password
        </p>

        {/* Form */}
        <form className="space-y-5" onSubmit={onSubmitNewPassword}>
          <input
            type="password"
            placeholder="Password"
            value={newPassword}
            onChange={e=> setnewPassword(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-lg
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-all duration-200"
          >
            Submit
          </button>
        </form>

      </div>
    </div>
}

    </>
  );
};

export default ResetPassword;
