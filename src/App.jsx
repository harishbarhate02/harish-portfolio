import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import Education from './components/Education';

function App() {
    return (
        <div className="antialiased text-gray-900">
            <Navbar />
            <main>
                <Hero />
                <Skills />
                <Experience />
                <Education />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
