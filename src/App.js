import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import './App.css';
import './index.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Container>
            <Route exact path='/' component={Home}/>
            <Route exact path='/home' component={Home}/>
            <Route exact path='/projects' component={Projects}/>
            <Route exact path='/contact' component={Contact}/>
        </Container>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
