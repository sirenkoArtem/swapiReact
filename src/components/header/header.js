import React from 'react';
import './header.scss';

const Header = () => {
  return (
      <header>
          <h2 className="header-logo">Star DB</h2>
          <ul className="header-list">
              <li className="header-item">People</li>
              <li className="header-item">Planets</li>
              <li className="header-item">Starships</li>
          </ul>
      </header>
  )
};

export default Header;