import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../src/components/Layout'
import Home from './pages/home';
import Login from './pages/login';
import EmailVerify from './pages/Emailverify';
import ResetPassword from './pages/Resetpassword';
import{ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Portfolio from './pages/Portfolio';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <>
    <ToastContainer/>
    <Routes>  
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/email-verify" element={<EmailVerify />} />
        <Route path="/reset-password" element={<ResetPassword />} />

      </Route>
              <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<Portfolio/>} />
      </Route>

    </Routes>
    </>
  );
};

export default App;
