import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>CATBOOK</h1>
      <h1>
        <Link to="/">Home</Link>
      </h1>
      <h1>
        <Link to="/cats">Cats</Link>
      </h1>
      <h1>
        <Link to="/api">API</Link>
      </h1>
    </nav>
    // <div>
    //     Navbar
    // </div>
  );
};

export default Navbar;
