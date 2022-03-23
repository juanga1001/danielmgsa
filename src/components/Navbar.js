import React, { useState } from "react";
import logo from "../images/logo-daniel.png";
import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar(props) {
  const [menu, setMenu] = useState(false);

  const styles = {
    color: "#273F27",
    borderBottomStyle: "solid",
    borderWidth: "1px",
    fontWeight: "bolder",
  };

  return (
    <div className="Navbar">
      <img src={logo} alt="" className="logo-navbar" />
      <ul>
        <li style={styles}>HOME</li>
        <li onClick={() => props.handleScroll("About-container")}>ABOUT</li>
        <li onClick={() => props.handleScroll("Experience-container")}>
          EXPERIENCE
        </li>
        <li onClick={() => props.handleScroll("Education-container")}>
          EDUCATION
        </li>
        <li onClick={() => props.handleScroll("Publications-container")}>
          PUBLICATIONS
        </li>
        <li>
          <Link to="/gallery" className="link-route">
            GALLERY
          </Link>
        </li>
      </ul>

      <div className="mobile-menu">
        {menu && (
          <ul>
            <li style={{ fontWeight: "600" }}>HOME</li>
            <li onClick={() => props.handleScroll("About-container")}>ABOUT</li>
            <li onClick={() => props.handleScroll("Experience-container")}>
              EXPERIENCE
            </li>
            <li onClick={() => props.handleScroll("Education-container")}>
              EDUCATION
            </li>
            <li onClick={() => props.handleScroll("Publications-container")}>
              PUBLICATIONS
            </li>
          </ul>
        )}
        <div className="mobile-menu-icon" onClick={() => setMenu(!menu)}>
          {!menu && <MenuIcon />}
          {menu && <CloseIcon />}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
