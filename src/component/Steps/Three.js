import React, {Component} from 'react';
import axios from 'axios';

class stepThree extends Component{

    state = {
        monthlyMortgage: "",
        desiredRent: ""
    }
    
    handleChange = (key, value) => {
        this.setState({
            [key]: value
        })

    }

    addNewHouse = () => {
        axios.post('http://localhost:8000/houses', this.state)
        .then(response => {
            console.log(response.data)
        })
    }
    

    render(){
        return(
            <div className="view-container">

                <div>
                    <div>
                        <div>Monthly Mortgage Amount</div>
                        <input name="monthlyMortgate" onChange={(e) => this.handleChange(e.target.name, e.target.value)}/>
                    </div>
                    <div>
                        <div>Desired Monthly Rent</div>
                        <input name="desiredRent" onChange={(e) => this.handleChange(e.target.name, e.target.value)}/>
                    </div>                    
                </div>
                <div>
                    <button onClick={this.addNewHouse}>Complete</button>
                </div>
            </div>
        )
    }
}

export default stepThree;