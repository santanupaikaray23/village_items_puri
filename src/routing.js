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
import ListingApi from './Component/listing/listingApi';
import DetailComponent from './Component/details/details';
import PlaceBooking from './Component/booking/placeBooking';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';




const Routing = () =>{
    const theme = {
        colors: {
          heading: "rgb(24 24 29)",
          text: "rgb(24 24 29)",
          white: "#fff",
          black: " #212529",
          helper: "#8490ff",
          bg: "rgb(249 249 255)",
          footer_bg: "#0a1435",
          btn: "rgb(98 84 243)",
          border: "rgba(98, 84, 243, 0.5)",
          hr: "#ffffff",
          gradient:
            "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
          shadow:
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
          shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
        },
        media: { mobile: "400px", tab: "388px" },
      };
    return(
        
        <div className="routing">
            <ThemeProvider theme={theme}>
            
            <GlobalStyle/>
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
        <Route path='/details/:id' Component={DetailComponent}/>
        <Route path="/booking/:check_name" Component={PlaceBooking}/>
        
        
        </Routes>
        
        <Footer/>
        
        </BrowserRouter>
        </ThemeProvider>
        </div>
       
    )
}

export default Routing;