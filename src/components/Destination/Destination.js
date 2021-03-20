import React, { Component} from 'react';
import Header from '../Header/Header';
import './Destination.css';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Link } from 'react-router-dom';


 class Destination extends Component {
        render() {
           
    return (
        <div className="container">
            <Header></Header>
            <div className="row">
                <div className="col-md-8">
                         
            <div className="destinatioon">
                <div className="pick-form ">
                    <label htmlFor="name">Pick From</label>
                    <br />
                    <input type="text" name="name" id="" />
                    <br />
                    <label htmlFor="name1">Pick To</label>
                    <br />
                    <input type="text" name="name1" id="" />
                    <br />
                    <label htmlFor="date">Date</label>
                    <br />
                    <input type="date" name="date" id="" />
                    <br />
                    <label for="country">Country</label>
                    <br />
                    <select id="country" name="country">
                        <option value="bangladesh">Bangladesh</option>
                        <option value="australia">Australia</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                    </select>
                    <br/>
                   <Link to="/rideDetail" className="login">search</Link>
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
};

export default GoogleApiWrapper({
    apiKey: ('AIzaSyC6qlQ9vkkSsg-qxnD-K1fKPq9n3MlEDIA')
  })(Destination)