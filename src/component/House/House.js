import React from 'react';
import './house.css';

export default function House(props){
    return(
        <div className="house-container">
            <div >
                <div>Property Name: {props.propertyName} </div>
                <div>Address: {props.address} </div>
                <div>City: {props.city} </div>
                <div>State: {props.state} </div>
                <div>Zip: {props.zipcode}</div>
            </div>
            <div>
                <button onClick={props.deleteHouse}>Delete</button>
            </div>
        </div>
    )
}