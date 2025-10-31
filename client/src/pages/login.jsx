import React, { useContext, useState } from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import img from '../assets/epp.jpg'

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { backendUrl, setIsLoggedin ,getUserData} = useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;

    try {
      const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
      const payload = isLogin ? { email, password } : { name, email, password };

      const { data } = await axios.post(`${backendUrl}${endpoint}`, payload);

      if (data.success) {
        setIsLoggedin(true);
        await getUserData()
        navigate('/');
      } else {
        toast.error(data.message || 'Something went wrong');
      }
    } catch (error) {
      toast.error(error.message || 'Server error');
    }
  };

  return (
    <div className="flex items-center justify-center h-full">
      <img src={img} alt='logo'/>
      <div className="w-full max-w-md p-8 rounded-lg shadow-lg bg-gray-900 text-white">
        {/* Heading */}
        <h2 className="text-2xl font-bold mb-2 text-center">
          {isLogin ? 'Login' : 'Create Account'}
        </h2>
        <p className="text-sm text-gray-300 mb-6 text-center">
          {isLogin
            ? 'Login to your account'
            : 'Sign up to get started with our app'}
        </p>

        {/* Form Fields */}
        <form onSubmit={onSubmitHandler} className="space-y-4">
          {!isLogin && (
            <div className="flex items-center border-b border-gray-700 py-2">
              <FaUser className="text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-transparent w-full text-white placeholder-gray-400 focus:outline-none"
              />
            </div>
          )}

          <div className="flex items-center border-b border-gray-700 py-2">
            <FaEnvelope className="text-gray-400 mr-3" />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent w-full text-white placeholder-gray-400 focus:outline-none"
              required
            />
          </div>

          <div className="flex items-center border-b border-gray-700 py-2">
            <FaLock className="text-gray-400 mr-3" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent w-full text-white placeholder-gray-400 focus:outline-none"
              required
            />
          </div>

          {/* Forgot Password */}
          <div
            onClick={() => navigate('/reset-password')}
            className="text-right text-sm text-blue-400 hover:underline cursor-pointer"
          >
            Forgot password?
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded mt-2 transition"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        {/* Toggle Link */}
        <div className="mt-6 text-center text-sm text-gray-400">
          {isLogin ? (
            <>
              Don’t have an account?{' '}
              <span
                className="text-blue-400 hover:underline cursor-pointer"
                onClick={() => setIsLogin(false)}
              >
                Sign up
              </span>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <span
                className="text-blue-400 hover:underline cursor-pointer"
                onClick={() => setIsLogin(true)}
              >
                Login here
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
