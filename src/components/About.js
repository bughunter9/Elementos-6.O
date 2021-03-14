import React from 'react';
import './About.css';

function About(){
    return(
        <div className="about">
            <div className="upper-part">
                <div className="headin">
                    <h1 > ABOUT ELEMENTOS 6.O</h1>
                </div>
                <div className="row">
                    <div className="column1">
                        <img 
                        className="img1"
                        src="https://www.burgerking.in/static/media/home-of-the-whopper.33b5f485.jpg"
                        />
                    </div>
                    <div className="column1">
                            <h4>
                                CONTENT
                            </h4>
                    </div>
                </div>
            </div>
            <div className="img2">
                <div className="img2a">
                    <img
                        src="https://www.burgerking.in/static/media/bk-wall-banner-3.4ab48ec9.jpg"
                    />
                </div>
                <div className="img2b">
                    <img
                        src="https://www.burgerking.in/static/media/bk-wall-banner-2.e1210188.jpg"
                    />
                </div>
                <div className="img2c">
                    <img
                        src="https://www.burgerking.in/static/media/bk-wall-banner-1.a84a9b57.jpg"
                    />
                </div>
            </div>
        </div>
    );
}

export default About;