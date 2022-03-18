import React, {useState} from "react";
import logo from "../images/logo-daniel.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faRectangleXmark} from '@fortawesome/free-solid-svg-icons'

function Navbar(props) {
  
  const [menu, setMenu] = useState(true);

  const styles = {
    color: "#273F27",
    borderBottomStyle: "solid",
    borderWidth: "1px",
    fontWeight: "bolder"
  };


  return (
    <div className="Navbar">
        <img src={logo} alt="" className="logo-navbar" />
        <ul >
          <li style={styles}>HOME</li> 
          <li onClick={() => props.handleScroll("About-container")}>ABOUT</li>
          <li onClick={() => props.handleScroll("Experience-container")}>EXPERIENCE</li>
          <li onClick={() => props.handleScroll("Education-container")}>EDUCATION</li>
          <li onClick={() => props.handleScroll("Publications-container")}>PUBLICATIONS</li>
        </ul>

        <div className="mobile-menu">
          {menu && <ul >
            <li style={{fontWeight: "600"}} >HOME</li>
            <li onClick={() => props.handleScroll("About-container")}>ABOUT</li>
            <li onClick={() => props.handleScroll("Experience-container")}>EXPERIENCE</li>
            <li onClick={() => props.handleScroll("Education-container")}>EDUCATION</li>
            <li onClick={() => props.handleScroll("Publications-container")}>PUBLICATIONS</li>
          </ul>}
          <div className="mobile-menu-icon" onClick={() => setMenu(!menu)}>
            {!menu && <FontAwesomeIcon className="icon-nav" icon={faBars} />}
            {menu && <FontAwesomeIcon className="icon-nav" icon={faRectangleXmark} />}
          </div>
        </div>
    </div>
  );
}

export default Navbar;
