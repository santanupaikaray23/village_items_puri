import React from 'react';
import Search from './Search';
import QuickSearch from './QuickSearch';

const Home = () => {
    return(
        <div className="home" id="home">
        <div>
            <Search/>
            <QuickSearch/>
        </div>
        </div>
    )
}

export default Home;
