import React from 'react';
import AboutQuickSearch from './AboutQuickSearch';
import AboutSearch from './AboutSearch';
const About = () => {
    return(
        <div className="about" id="about">
        <div>
            <AboutSearch/>
            <AboutQuickSearch/>
        </div>
        </div>
    )
}

export default About;