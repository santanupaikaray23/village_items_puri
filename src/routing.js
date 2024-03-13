import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Component/Home/Home'
import About from './Component/About/About';
import Service from './Component/Work/Service';
import Career from './Component/Career/Career';
import Internshipandtraining from './Component/Internship-training/Internship-training';
import Team from './Component/Team/Team';
import Contact from './Component/Contact/Contact';
import Blog from './Component/Blog/Blog';
import ListingApi from './Component/listing/listingApi'


const Routing = () =>{
    return(
        <div className="routing">
        <BrowserRouter>
       
        <Header/>
        <Routes>
        
        <Route exact path="/" Component={Home}/>
        <Route path="about" Component={About}/>
        <Route path="service" Component={Service}/>
        <Route path="career" Component={Career}/>
        <Route path="internship-training" Component={Internshipandtraining}/>
        <Route path="team" Component={Team}/>
        <Route path="contact" Component={Contact}/>
        <Route path="blog" Component={Blog}/>
        <Route path="/list/:id" Component={ListingApi}/>
        
        </Routes>
        
        <Footer/>
        
        </BrowserRouter>
        </div>
    )
}

export default Routing;