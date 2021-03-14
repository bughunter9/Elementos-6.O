import React from 'react';
import Carousel from './components/Carousel';
import About from './components/About';
import './Home.css';

import { BrowserRouter as Router} from "react-router-dom";
function Home(){
    return (
        
        <div className="Home">
        <Router>
           <Carousel />
           <About /> 
        </Router>
        </div>
    );
}

export default Home
