import React, { Component } from 'react';
import './App.css'
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <ClickCounterTwo ></ClickCounterTwo>
        <HoverCounterTwo ></HoverCounterTwo>
      </div>
    );
  }
}

export default App;