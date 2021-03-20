import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Rider.css';

const Rider = (props) => {
    const { name, image } = props.user;

    const history =useHistory();
    const handleProceed = () =>{
        history.push('/destination');
    }

    return (
        <div className="container riders">
            <div className="row">
                <div className="col-md-12">
                    <img src={image} alt="" />
                    <h2>{name}</h2>
                    <button onClick={handleProceed} className="login">BOOK NOW</button>
                </div>
            </div>

        </div>
    );
};

export default Rider;