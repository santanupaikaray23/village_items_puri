import React, {Component} from 'react';
import './Search.css';

class Search extends Component{
    render(){
        return(
            <div className='imageContainer'>
               <div id='logo'>
                V
               </div>
               <div className='heading'>
                Plan Buy With Us
               </div>
               <div className='itemSelector'>
                <select className='itemDropDown'>
                    <option>---SELECT ITEM---</option>
                </select>
                <select className='typesDropDown'>
                    <option>---ITEM TYPES---</option>
                </select>
               </div>
            </div>
        )
    }
}
export default Search;