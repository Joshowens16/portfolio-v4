import Home from "./Home";
import anime from "animejs/lib/anime.es.js";
import ParticleBG from "./Particles";
import AnotherC from "./AnotherC";
function App() {
  return (
    <div id="app" className="w-screen h-screen overflow-x-hidden">
      <ParticleBG />
      <div className="relative z-10 w-screen overflow-x-hidden">
        <Home />
        <AnotherC />
      </div>
    </div>
  );
}

export default App;
