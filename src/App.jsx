import "./App.css";
import Navigation from "../components/Navigation.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";

function App() {
  return (
    <>
      <Navigation />
      <div className="wrapper">
        <Hero />
        <About />
      </div>
    </>
  );
}

export default App;
