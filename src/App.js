import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Publications from "./components/Publications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {scroller} from "react-scroll";


function App() {
  function scrollToSection(section) {
    console.log(section);
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }

  return (
    <div className="App-container">
      <nav>
        <Navbar handleScroll={scrollToSection} />
      </nav>
      <main>
        <Hero handleScroll={scrollToSection} />
        <About handleScroll={scrollToSection} />
        <Experience />
        <Education />
        <Publications />
        <Contact />
      </main>
      <footer>
        <Footer handleScroll={scrollToSection} />
      </footer>
    </div>
  );
}

export default App;
