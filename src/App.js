import React, { Component } from 'react';
import './App.css';
import Header from './component/Header/Header';
import Routes from './route';


class App extends Component {
  render() {
    return (
      <div className="full-container">
        <div className="header-container">
          <Header />
        </div>
        <div className="body-container">
          <Routes />
        </div>
      </div>
    );
  }
}

export default App;
