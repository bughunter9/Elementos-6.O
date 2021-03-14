import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Home from './Home';
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
                          <Home />
                      </Route>
                </Switch>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
