import React, { Component } from 'react';
import './App.css'
import ClickCounterTwo from './components/ClickCounterTwo';
import Counter1 from './components/Counter1';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';

class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* Uncomment these lines if you want to use these components */}
        {/* <ClickCounterTwo />
        <HoverCounterTwo />
        <User render={(IsLoggedIn) => IsLoggedIn ? 'Arberesha' : 'Guest'} /> */}

        <Counter1 render={(count, incrementCount) => <ClickCounterTwo count={count} incrementCount={incrementCount} />} />
        <HoverCounterTwo render={(count, incrementCount) => <ClickCounterTwo count={count} incrementCount={incrementCount} />} />
      </div>
    );
  }
}

export default App;