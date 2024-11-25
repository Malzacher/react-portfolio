import "./App.css";
import Navigation from "../components/Navigation.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Experience from "../components/Experience.jsx";

function App() {
  return (
    <>
      <Navigation />
      <div className="wrapper">
        <Hero />
        <About />
        <Experience/>
      </div>
    </>
  );
}

export default App;