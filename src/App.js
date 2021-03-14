import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router >
        <ScrollToTop/>
            <Header />
                <Switch>
                      <Route path="/timeline">
                          <Timeline />
                      </Route>
                      <Route path="/contact">
                          <Contact />
                      </Route>
                      <Route path="/">
                          <Carousel />
                      </Route>
                </Switch>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
