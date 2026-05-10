// frontend/src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ user, onLogout }) {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        📝 Blog Platform
      </Link>
      <div className="navbar-nav">
        <Link to="/" className="nav-link">
          Home
        </Link>
        {user ? (
          <>
            <Link to="/create" className="nav-link">
              ✍️ New Post
            </Link>
            <span className="nav-link">Welcome, {user.username}!</span>
            <button onClick={onLogout} className="btn-danger">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;