import React, {Component} from 'react';
import MainHeader from './MainHeader';
import Form from './Form';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <MainHeader/>
        <Form/>
      </div>
    );
  }
}

export default Main;
