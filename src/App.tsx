import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  const [activeLink, setActiveLink] = useState('home');

  return (
    <div>
      <Header activeLink={activeLink} setActiveLink={setActiveLink} />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      
    </div>
  );
};

export default App;