import React from 'react';
import Search from './Search';
import QuickSearch from './QuickSearch';
import Experience from './Experience';
import Faq from './Faq';
import Placementoffered from './Placementoffered';

const Home = () => {
    return(
        <div className="home" id="home">
        <div>
            <Search/>
            <QuickSearch/>
            <Experience/>
            <Faq/>
            <Placementoffered/>
        </div>
        </div>
    )
}

export default Home;
