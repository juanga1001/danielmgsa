import daniel from "../images/photo-daniel.png";

function Hero(props) {
  return (
    <section className="Hero-container">
      <img src={daniel} alt=""></img>
  
      <div className="Hero-info">
        <h1>
          DANIEL <span>MARTÍNEZ</span> 
        </h1>
        <h4>
          Harvard Grad '17, '21, Social Studies, International Education Policy
          Program, Gates Millennium Scholar, M.C. Rockefeller Fellow.
        </h4>
        <p>
          Professional experienced in digital campaigns, international education
          policy, data analysis, and project management.
        </p>
        <button
          className="btn-hero"
          onClick={() => props.handleScroll("Contact-section")}
        >
          CONTACT
        </button >
      </div>
    </section>
  );
}

export default Hero;
