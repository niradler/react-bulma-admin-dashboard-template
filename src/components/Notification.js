import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <div className="dash-list">
         <div class="columns is-multiline">
          <div class="column">
        
          </div>
            <div class="column">
        <DashboardBox boxHeading="Top Seller Total" type="is-warning" levels={[{heading:"Sales",title:"250k"},{heading:"Sales",title:"450K"},{heading:"Sales",title:"250k"}]} boxTitle="59,950"/>
          </div>
            <div class="column">
        <DashboardBox boxHeading="Top Seller Total" type="is-primary" levels={[{heading:"Sales",title:"250k"},{heading:"Sales",title:"450K"},{heading:"Sales",title:"250k"}]} boxTitle="59,950"/>
          </div>
             <div class="column">
        <DashboardBox boxHeading="Top Seller Total" type="is-primary" levels={[{heading:"Sales",title:"250k"},{heading:"Sales",title:"450K"},{heading:"Sales",title:"250k"}]} boxTitle="59,950"/>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
