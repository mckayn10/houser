import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import './wizard.css';
import stepOne from '../Steps/One';
import stepTwo from '../Steps/Two';
import stepThree from '../Steps/Three';

class Wizard extends Component{

    handleCancel = () => {
        this.props.history.push('/')
    }
    

    render(){
        return(
            <div className="view-container">
                <div className="view-headers">
                    <div >Add New Listing</div>
                    <button onClick={this.handleCancel}>Cancel</button>
                </div>
                <Switch>
                    <Route exact path="/wizard/step1" component={stepOne} />
                    <Route path="/wizard/step2" component={stepTwo} />
                    <Route path="/wizard/step3" component={stepThree} />
                </Switch>
            </div>
        )
    }
}

export default Wizard;