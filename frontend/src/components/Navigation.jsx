import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login'); 
  };

  return (
    <div>
      {isAuthenticated && (
        <>
          <NavLink to="/" className={({ isActive }) => "text-sm uppercase mx-3 text-white cursor-pointer hover:text-red-400" + (isActive ? " text-red-400" : "")}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => "text-sm uppercase mx-3 text-white cursor-pointer hover:text-red-400" + (isActive ? " text-red-400" : "")}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => "text-sm uppercase mx-3 text-white cursor-pointer hover:text-red-400" + (isActive ? " text-red-400" : "")}>Contact</NavLink>
        </>
      )}
      {!isAuthenticated ? (
        <>
          <NavLink to="/login" className={({ isActive }) => "text-sm uppercase mx-3 text-white cursor-pointer hover:text-red-400" + (isActive ? " text-red-400" : "")}>Login</NavLink>
          <NavLink to="/register" className={({ isActive }) => "text-sm uppercase mx-3 text-white cursor-pointer hover:text-red-400" + (isActive ? " text-red-400" : "")}>Register</NavLink>
        </>
      ) : (
        <button onClick={handleLogout} className="text-sm uppercase mx-3 text-white cursor-pointer hover:text-red-400">Logout</button>
      )}
    </div>
  );
};


export default Navigation;
