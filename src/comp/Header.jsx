import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css';

const Header = ({ cartCount }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="header">
      <h1>Dashboard</h1>
      <div className="profile" onClick={toggleDropdown}>
        <img 
          src="https://media.licdn.com/dms/image/v2/D5603AQE2sUuD0I75KQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1728748410948?e=2147483647&v=beta&t=DBOYaHPox7-Jd3LnO1jh2ollIGmqN4bfPhpiZ25Q88A" 
          alt="Profile" 
          className="profile-img" 
        />
        {isDropdownOpen && (
          <div className="dropdown">
            <ul>
              <li>Profile Settings</li>
              <li>Logout</li>
            </ul>
          </div>
        )}
      </div>
      <Link to="/cart" className="cart-icon">
        <img src="cart-icon.png" alt="Cart" />
        <span className="cart-count">{cartCount}</span>
      </Link>
    </div>
  );
};

export default Header;
