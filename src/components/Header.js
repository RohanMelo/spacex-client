import React from "react";
import { NavLink as Link } from "react-router-dom";

const Header = () => (
  <header>
    <div className="nav navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item">
          <Link to="/">SpaceX Tracker</Link>
        </div>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <Link to="/about">About</Link>
          </div>
          <div className="navbar-item">
            <Link to="/launches">Launches</Link>
          </div>
          <div className="navbar-item">
            <Link to="/launchpads">Launchpads</Link>
          </div>
          <div className="navbar-item">
            <Link to="/missions">Missions</Link>
          </div>
          <div className="navbar-item">
            <Link to="/rockets">Rockets</Link>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
