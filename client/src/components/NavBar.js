import React, { useState } from 'react';

const NavBar = ({toggleSidebar}) => {
    return (
        <nav className="custom-navbar">
      <span className="sidebar-icon" onClick={toggleSidebar}>
        Favourites ❤️
      </span>
            <h1>Anna's Recommends</h1>
            <a href="">About Us</a>
            <a href="">Submit Restaurant</a>
            <button>Favourites ❤️</button>
        </nav>
    );
};

export default NavBar;
