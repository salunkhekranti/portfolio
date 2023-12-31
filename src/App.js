import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Github from "./Components/Github";
import Contacts from "./Components/Contacts";
import AnimatedCursor from "react-animated-cursor";
import MiniPro from "./Components/MiniPro";
import Education from "./Components/Education";
function App() {
  return (
    <div className="App">
      <AnimatedCursor />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      {/* <MiniPro /> */}
      <Education />
      <Github />
      <Contacts />
    </div>
  );
}

export default App;
