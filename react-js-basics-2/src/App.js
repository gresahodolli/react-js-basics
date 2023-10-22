import React, {Component} from 'react';
import './App.css';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';


function App() {
  return (
    <div className='App'>
      <FRParentInput></FRParentInput>
      {/* <RefsDemo /> */}
      {/* <FocusInput></FocusInput> */}
    </div>
  );
}

export default App;