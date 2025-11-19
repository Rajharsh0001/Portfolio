import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Home from "./components/Home";
import Internships from "./components/Internships";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import Tech from "./components/Tech";
import "./index.css";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Education />
      <Internships />
      <Projects />
      <Tech />
      <Contact />
      <SocialLinks />
    </div>
  );
}





export default App;