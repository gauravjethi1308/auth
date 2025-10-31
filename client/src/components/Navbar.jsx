import React, { useContext } from "react";
import { FiLogIn } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import img from '../assets/fingerprint-scanner.gif'


const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { userData, setUserData, setIsLoggedin,backendUrl } = useContext(AppContext);

  const sendVerificationOtp = async()=>{
    try {
      axios.defaults.withCredentials= true;
      const{data}= await axios.post(backendUrl + '/api/auth/send-verify-otp')
      if(data.success){
        navigate('/email-verify')
        toast.success(data.message)

      }
      else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const logout = async()=>{
    try {
      axios.defaults.withCredentials=true
      const {data}= await axios.post(backendUrl + '/api/auth/logout')
      data.success && setIsLoggedin(false)
      data.success && setUserData(false)
          navigate("/login");

    } catch (error) {
      toast.error(error.message)

      
    }
  }

  // Hide login button on login page
  const hideLoginButton = location.pathname === "/login";



  return (
    <nav className="flex items-center justify-between px-6 py-4  bg-white relative">
      {/* Left side: Logo */}
      <button
        className="text-xl font-bold text-gray-800 hover:text-blue-600"
        onClick={() => navigate("/")}
      >
      <img src={img} className="w-14"/>
      </button>

      {/* Right side: Conditional Login or Profile Circle */}
      {!hideLoginButton && (
        <>
          {userData ? (
            <div className="relative group">
              {/* Circular profile icon */}
              <div
                className="w-10 h-10 flex justify-center items-center bg-blue-600 text-white 
                font-semibold rounded-full cursor-pointer select-none"
                title={userData.name}
              >
                {userData.name?.charAt(0).toUpperCase()}
              </div>

              {/* Dropdown menu */}
              <div
                className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg 
                shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                transition-all duration-200 ease-in-out z-50"
              >
                <ul className="py-2 text-sm text-gray-700">
                  {!userData.isAccountVerified &&                   <li
                  onClick={sendVerificationOtp}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    
                  >
                    Verify Email
                  </li>
}
                  <li
                  onClick={logout}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800"
            >
              Login <FiLogIn className="text-lg" />
            </button>
          )}
        </>
      )}
    </nav>
  );
};

export default Navbar;
