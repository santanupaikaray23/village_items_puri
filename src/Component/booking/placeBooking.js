import React, {Component} from 'react';


class PlaceOrder extends Component{
    constructor(props){
        super(props)

        this.state={
            check_name: this.props.match.params.check_name,
            name:'',
            phone:'',

        }

    }
    render(){
        return(
            <div className='container'>
                <div className='panel panel-primary'>

                </div>
            </div>
        )
    }
}
export default PlaceOrder;