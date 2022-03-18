import logoJG from "../images/logo-jg.svg"
import {Link} from "react-router-dom"

function Footer(props) {
  /*const styles = {
    color: "#3FFFAB",
    borderBottomStyle: "solid",
    borderWidth: "1px",
  };
  */

  return (
    <div className="Footer-container">
        <nav className="Footer-nav">
            <ul >
            <li onClick={() => props.handleScroll("Navbar")}>HOME</li>
            <li onClick={() => props.handleScroll("About-container")}>ABOUT</li>
            <li onClick={() => props.handleScroll("Experience-container")}>EXPERIENCE</li>
            <li onClick={() => props.handleScroll("Education-container")}>EDUCATION</li>
            <li onClick={() => props.handleScroll("Publications-container")}>PUBLICATIONS</li>
            <li><Link to="/gallery" className="link-route">GALLERY</Link></li>
            </ul>
         </nav>
         <div className="Footer-info">
            <p>© 2022 Daniel A. Martínez García </p>
            <div>
                <p>POWERED BY</p>
                <img src={logoJG} alt="logo-jg"></img>
            </div>
         </div>
    </div>
  );
}

export default Footer;
