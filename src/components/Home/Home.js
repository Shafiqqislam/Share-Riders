import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import userData from '../../Data/data.json'
import Rider from '../Rider/Rider';


const Home = () => {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
       setUsers(userData)
    },[])
   
    return (
        <div className="banner">
            <Header></Header>
            {
                users.map(user=> <Rider user={user}></Rider> )
            }
           
           
        </div>
    );
};

export default Home;