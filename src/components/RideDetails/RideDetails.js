import React, { Component, useEffect, useState } from 'react';
import Header from '../Header/Header';
import './RideDetails.css';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import bus from "../../images/Frame-1.png";
import peopleIcon from "../../images/peopleicon.png";



// const RideDetails = () => {
    class RideDetails  extends Component {
        render() {
    return (
        <div className="container">
        <Header></Header>
        <div className="row">
            <div className="col-md-8">
                     
        <div className="destinatioon ride-info">
            <div className="pick-form car-info  ">
                  <h3>Mirpur</h3>
                  <h3>Banani</h3>
                  <div className="details">
                      <div>
                      <img src={bus} alt=""/>
                      <img className="icon" src={peopleIcon} alt=""/>
                      <h5>4</h5>
                      <h5>$350</h5>
                      </div>
                  </div>
                  <div className="details">
                      <div>
                      <img src={bus} alt=""/>
                      <img className="icon" src={peopleIcon} alt=""/>
                      <h5>4</h5>
                      <h5>$350</h5>
                      </div>
                  </div>
                 

              
            </div>

            <div className="map">
                <Map google={this.props.google} zoom={14}>

                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

                    <InfoWindow onClose={this.onInfoWindowClose}>
                      
                    </InfoWindow>
                </Map>
               
            </div>
        </div>
     
            </div>
        </div>

    </div>
    );
};
    }
export default GoogleApiWrapper({
    apiKey: ('AIzaSyC6qlQ9vkkSsg-qxnD-K1fKPq9n3MlEDIA')
})(RideDetails)