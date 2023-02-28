import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>CATBOOK</h1>
      <div id="nav-links-container">
        <p className="nav-links">
          <Link to="/cats/local">Local Cats</Link>
        </p>
        <p className="nav-links">
          <Link to="/cats/world">World Cats</Link>
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
