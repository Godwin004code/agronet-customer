import React from "react";
import './topbar.scss'
import { Link } from "react-router-dom";
import {FaSearch} from "react-icons/fa"

const Topbar = () => {
  return (
    <section className="agronet-topbar">
      <div className="agronet-topbar-searchbar">
        <h2 className="agronet-navbar-container-logo">
          <Link to="/">
            Agro<span style={{ color: "black" }}>net</span>
          </Link>
        </h2>
        
    <div className="agronet-topbar-searchbar-input">
<FaSearch style={{fontSize: 14}} /><input type="text" placeholder='Search' />
    </div>
        
      </div>
      <div></div>
    </section>
  );
};

export default Topbar;
