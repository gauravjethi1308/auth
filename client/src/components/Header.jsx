import React, { useContext } from 'react'
import img from '../assets/ai.gif'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';


const Header = () => {
const { userData } = useContext(AppContext)


const navigate =useNavigate()
const handleClick =()=>{
  navigate('/home')
}

  return (
    <header className="flex flex-col items-center justify-center text-center px-6 py-16 relative overflow-hidden">
      {/* Background gradient glow */}

      {/* Floating AI orb */}
      <div className="relative flex items-center justify-center">
        <img
          src={img}
          alt="AI Orb"
          className="w-24 h-24 rounded-full object-cover animate-pulse shadow-[0_0_60px_rgba(168,85,247,0.5)]"
        />
        <div className=" rounded-full bg-purple-400 blur-3xl opacity-30 animate-ping" />
      </div>

      {/* Greeting: uses your original logic (show name if logged in, otherwise the 'Folk Please Login To Continue' message) */}
      <h1 className="mt-6 text-4xl font-semibold text-gray-900 tracking-tight">
  {`Hey ${
    userData
      ? userData.name.charAt(0).toUpperCase() + userData.name.slice(1).toLowerCase()
      : 'Folk Please Login To Continue'
  }`}
</h1>

      {/* Subtext */}
      <p className="mt-2 text-3xl font-semibold text-gray-600">
        What’s on <span className="text-purple-600 font-medium">your mind?</span>
      </p>

      {/* CTA button */}
      <button onClick={handleClick} className="mt-8 px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full text-lg font-medium shadow-lg hover:shadow-purple-300/50 transition-all duration-300 hover:scale-105">
        Get Started
      </button>

    </header>
  )
}

export default Header
