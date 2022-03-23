import daniel from "../images/photo-daniel.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Hero(props) {
  return (
    <section className="Hero-container">
      <img src={daniel} alt=""></img>

      <div className="Hero-info">
        <h1>
          DANIEL <span>MARTÍNEZ GARCÍA</span>
        </h1>
        <h4>
          Harvard Grad '17, '21, Social Studies, International Education Policy
          Program, Gates Millennium Scholar, M.C. Rockefeller Fellow.
        </h4>
        <p>
          Professional experienced in digital campaigns, international education
          policy, data analysis, and project management.
        </p>
        <div className="cta-container">
          <button
            className="btn-hero"
            onClick={() => props.handleScroll("Contact-section")}
          >
            CONTACT
          </button>
          <a
            href="https://www.linkedin.com/in/danielmgsa/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon className="LinkedInIcon" />
          </a>
          </div>
      </div>
    </section>
  );
}

export default Hero;
