import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  axios.defaults.withCredentials=true;
  const backendUrl = https://auth-backend-89n3.onrender.com;

  const [isLoggedin, setIsLoggedin] = useState(false);
  const [userData, setUserData] = useState(null);


    const getAuthState = async () => {
      try {
        const {data}=await axios.get(backendUrl + '/api/auth/is-auth')
        if(data.success){
          setIsLoggedin(true)
          getUserData()
        }
      } catch (error) {
        toast.error(error.message)
        
      }
    
    }

  // ✅ Fetch user data if logged in
  const getUserData = async () => {
    try {
      const { data } = await axios.get(
        `${backendUrl}/api/auth/is-auth`,
        {}, // no body needed
        { withCredentials: true } // ✅ correct place for config
      );

      if (data.success) {
        setUserData(data.user || null);
        setIsLoggedin(true);
        console.log("User data:", data.user);
      } else {
        setIsLoggedin(false);
        toast.error(data.message || "Failed to fetch user data");
      }
    } catch (error) {
      setIsLoggedin(false);
      toast.error(error.response?.data?.message || "Server error");
    }
  };

  useEffect(()=>{getAuthState();

  },[])

  const value = {
    backendUrl,
    isLoggedin,
    setIsLoggedin,
    userData,
    setUserData,
    getUserData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
