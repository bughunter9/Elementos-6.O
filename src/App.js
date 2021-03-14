import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      < Header />
      < Carousel />
      < Timeline />
      < Footer />
    </div>
  );
}

export default App;
