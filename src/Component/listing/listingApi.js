import React, {Component} from 'react';
import axios from 'axios';
import ListingDisplay from './listingDisplay';


const url = "http://localhost:9600/services";
class Listing extends Component{
    constructor(){
        super()

        this.state={
            servicesdetails:''

        }
    }
    render(){
        return(
            <div className='row'>
                <div className='col-md-1'>
                    <ListingDisplay listdata={this.state.servicesdetails}/>


                </div>

            </div>
        )
    }
    componentDidMount(){
      let serviceId = this.props.match.params.id;
      axios.get(`${url}/${serviceId}`)
      .then((res)=>{this.setState({servicesdetails:res.data})})
    

    }
}

export default Listing;