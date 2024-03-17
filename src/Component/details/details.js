import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./details.css";
const url = "http://localhost:9600/check";

const Details = () => {
    const [check, setCheck] = useState('');
    const { id } = useParams(); // Directly obtaining `id` from URL parameters

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${url}/${id}`);
            setCheck(response.data[0]);
        };

        fetchData().catch(console.error);
    }, [id]);

    return (
        <div className='container'>
            <div className='panel panel-primary'>
                <div className='panel-heading'>
                    <h3>{check.name}</h3>
                    <div className='panel-body'>
                        <div className='row'>
                              <div className='col-md-12'>
                                <img className='img-responsive' src={check.image} style={{height:400,width:1500}} alt=''/>
                              </div>
                        </div>
                    </div>
                </div>
                <h6>Do you want to take this service?</h6>
                <Link to="/" className="btn btn-danger">Back</Link>&nbsp;
            <Link to={`/booking/${Details.name}`} className="btn btn-success">
                Proceed
            </Link>
            </div>
            
        </div>
    );
};

export default Details;