import React, {Component} from 'react';
import DashboardBox from '../components/DashboardBox';
import Header from '../components/Header';
import SideNav from '../components/SideNav';
import Main from '../components/Main';

class Layout extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="section">
          <div className="columns">
            <SideNav/>
            <main className="column">
           <Main />
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
