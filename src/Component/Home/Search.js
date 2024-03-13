import React, {Component} from 'react';
import './Search.css';

class Search extends Component{
    render(){
        return(
            <div className='imageContainer'>
             <div className='logo'>
             <img src="assets/gkcityinfo.png" alt=""/>
                
               </div> 
               <div className='heading'>
                <h2>Welcome</h2>
                <h1>Website Development</h1>
                <p>Ensuring the best return on investment for your bespoke Internship and
                    Training.
                </p>
               </div>
              
            </div>
        )
    }
}
export default Search;