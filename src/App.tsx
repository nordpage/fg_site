import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Windfall from "./components/Windfall";
import Devlog from "./components/Devlog";
import Footer from "./components/Footer";
import "./styles/global.css";
import RoadmapBar from "./components/RoadmapBar.tsx";

export default function App() {
  return (
      <>
        <Nav/>
        <main>
          <Hero/>
          <About/>
          <Windfall/>
            <RoadmapBar />
          <Devlog/>
        </main>
        <Footer/>
      </>
  );
}