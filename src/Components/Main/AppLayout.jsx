import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import NavBar from '../Main/NavBar';

const AppLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating data fetch delay
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Replace with actual data fetching logic

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#301C3B]">



      {loading && (
        <div className="fixed inset-0 flex justify-center items-center bg-[#301C3B] z-50">
          <span className="loader"></span>
        </div>
      )}


      <div className="flex-grow">
        <NavBar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
