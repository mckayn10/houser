import React, {Component} from 'react';


class stepOne extends Component{

    state = {
        name: '',
        address: '',
        city: '',
        state: '',
        zipcode: ''
    }
    
    handleChange = (key, value) => {
        this.setState({
            [key]: value
        })

    }

    clickNext = () => {
        this.props.history.push('/wizard/step2')
    }

    handleCancel = () => {
        this.props.history.push('/')
    }
    

    render(){
        return(
            <div className="view-container">

                <div>
                    <div>
                        <div>Property Name</div>
                        <input name="name" onChange={(e) => this.handleChange(e.target.name, e.target.value)}/>
                    </div>
                    <div>
                        <div>Address</div>
                        <input name="address" onChange={(e) => this.handleChange(e.target.name, e.target.value)}/>
                    </div>
                    <div>
                        <div>
                            <div>City</div>
                            <input name="city" onChange={(e) => this.handleChange(e.target.name, e.target.value)}/>
                        </div>
                        <div>
                            <div>State</div>
                            <input name="state" onChange={(e) => this.handleChange(e.target.name, e.target.value)}/>
                        </div>
                        <div>
                            <div>Zip</div>
                            <input name="zipcode" onChange={(e) => this.handleChange(e.target.name, e.target.value)}/>
                        </div>
                    </div>
                    <div>
                        <button onClick={this.clickNext}>Next Step</button> 
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default stepOne;