import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI Showcase</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/buttons">Buttons</Link></li>
          <li><Link to="/cards">Cards</Link></li>
          <li><Link to="/carousel">Carousel</Link></li>
          <li><Link to="/alerts">Alerts</Link></li>
          <li><Link to="/calender">Calender</Link></li>
          <li><Link to="/login">Log in</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
