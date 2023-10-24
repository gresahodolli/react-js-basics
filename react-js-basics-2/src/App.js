import React, { Component } from 'react';
import './App.css'
import ComponentC from './components/ComponentC'
//import { UserProvider } from './components/UserContext';

class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* <UserProvider value="Arbresha"> */}
        <ComponentC />
        {/* </UserProvider> */}
       </div>
    );
  }
}

export default App;