import Header from './components/header/Header';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import './app.scss';
import { useState } from 'react';
import Nav from './components/nav/Nav';

function App() {
  const [navOpen, setNavOpen] = useState (false)
  return (
    <div className='app'>
      <Header navOpen={navOpen} setNavOpen={setNavOpen}/>
      <Nav navOpen={navOpen} setNavOpen={setNavOpen}/>
      <div className='sections'>
        <About/>
        <Portfolio/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
