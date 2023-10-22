import React, {Component} from 'react';
import './App.css';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';

function App() {
  return (
    <div className='App'>
      <RefsDemo />
    </div>
  );
}

export default App;