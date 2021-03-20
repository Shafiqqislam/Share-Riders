import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [loggedInUser,setLoggedInUser]=useState({});
    return (
       <div className="">
            <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light ">
                <a class="navbar-brand " href="#">Share Riders</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                        <Link to="/home">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/destination">Destination</Link>
                        </li>
                        <li class="nav-item">
                        <Link to="/blog">Blog</Link>
                        </li>
                        <li class="nav-item">
                        <Link to="/contact">Contact</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/login" type="button" class="btn btn-outline-success login">Login</Link>
                            <p style={{color:'red'}}>{loggedInUser.name}</p>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
       </div>
    );
};

export default Header;