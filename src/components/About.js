import aboutPhoto from "../images/about_daniel.png";

function About(props) {
  return (
    <section className="About-container">
      <div className="section-title">
        <h2>ABOUT ME</h2>
        <div className="line-title" />
      </div>
      <div className="About-content">
        <div className="About-text">
          <h4>
            Daniel Martinez is a Digital Campaigns Senior Associate for
            Blueprint where he works alongside the team to develop, setup,
            report and optimize innovative and exciting digital campaigns.{" "}
          </h4>
          <p>
            Prior to joining Blueprint, Daniel worked as a political consultant,
            advising a progressive legislative campaign in Brazil to implement a
            winning digital and territorial mobilization strategy. Most
            recently, he worked as project manager for Teach for All supporting
            an education program in Colombia, Ecuador, and Paraguay. He has
            ample experience working and traveling in Latin America and
            producing Spanish-language content. Daniel holds a Bachelor of Arts
            in Social Sciences and Philosophy and a master’s degree in
            International Education Policy from Harvard University. He is
            originally from Colombia, and grew up in Boston, MA. He is fluent in
            Spanish and Portuguese. In his spare time, you can find him reading
            Latin American Literature and trying his hand at writing short
            stories.
          </p>
          <button
            className="btn-hero"
            onClick={() => props.handleScroll("Contact-section")}
          >
            CONTACT
          </button>
        </div>
        <img src={aboutPhoto} alt="danielphoto" />
      </div>
    </section>
  );
}

export default About;
