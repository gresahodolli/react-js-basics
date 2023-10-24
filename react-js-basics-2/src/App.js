import React, { Component } from 'react';
import './App.css'
import ComponentC from './components/ComponentC'
import { UserProvider } from './components/UserContext';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <UserProvider value="Gresa">
        <ComponentC />
        </UserProvider>
       </div>
    );
  }
}

export default App;