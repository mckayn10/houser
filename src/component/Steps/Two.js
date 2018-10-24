import React, {Component} from 'react';


class stepTwo extends Component{

    state = {
        image: ""
    }
    
    handleChange = (key, value) => {
        this.setState({
            [key]: value
        })

    }
    

    render(){
        return(
            <div className="view-container">
                <div className="view-headers">
                    <div >Dashboard</div>
                    <button onClick={this.handleCancel}>Cancel</button>
                </div>
                <div>
                    <div>
                        <div>Image</div>
                        <input name="image" onChange={(e) => this.handleChange(e.target.name, e.target.value)}/>
                    </div>
                </div>
                <div>
                    <button>Previous Step</button>
                    <button>Next Step</button>
                </div>
            </div>
        )
    }
}

export default stepTwo;