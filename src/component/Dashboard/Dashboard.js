import React, {Component} from 'react';
import axios from 'axios';
import House from '../House/House';
import Wizard from '../Wizard/Wizard';
import './dashboard.css';

class Dashboard extends Component{

    state = {
        houseList: []
    }

    componentDidMount(){
        this.getHouses()
    }

    getHouses = () => {
        axios.get('http://localhost:8000/houses')
        .then(response => {
            this.setState({ houseList: response.data})
            console.log(this.state.houseList)
        })
    }

    handleClick = () => {
        return this.props.history.push('/wizard/step1')

    }

    onDeleteClick = (id) => {
        axios.delete(`http://localhost:8000/houses/${id}`)
        .then(response => {
            console.log(response.data)
            this.getHouses()
        })
    }

    render(){
        const houses = this.state.houseList.map((house, i) => {
            return(
                <House key={house.id} propertyName={house.property_name} address={house.address} city={house.city} state={house.state} zipcode={house.zipcode} id={house.id} deleteHouse={() => this.onDeleteClick(house.id)} />
            )
        })

        return(
            
            <div className="view-container">
                <div className="view-headers">
                    <div >Dashboard</div>
                    <button onClick={this.handleClick}>Add New Property</button>
                </div>
                
                {houses} 
            </div>
        )
    }
}

export default Dashboard;