import React from 'react';
import Hero from "../components/hero/Hero.tsx";
import About from "../components/about/About.tsx";
import Projects from "../components/projects/Projects.tsx";
import Roadmap from "../components/roadmap/Roadmap.tsx";
import Devlog from "../components/devlog/Devlog.tsx";
import Donate from "../components/donate/Donate.tsx";
import Contacts from "../components/contacts/Contacts.tsx";

const Main: React.FC = () => {
    return (
        <div>
            <Hero/>
            <About/>
            <Projects/>
            <Roadmap/>
            <Devlog/>
            <Donate/>
            <Contacts/>
            <footer>
                © 2025 Flutterra Games. Одинокая ведьма делает вид, что это студия.
            </footer>
        </div>
    );
};

export default Main;