import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Component/Home/Home'
const Routing = () =>{
    return(
        <div className="routing">
        <BrowserRouter>
       
        <Header/>
        <Routes>
        
        <Route exact path="/" Component={Home}/>
        </Routes>
        
        <Footer/>
        
        </BrowserRouter>
        </div>
    )
}

export default Routing;