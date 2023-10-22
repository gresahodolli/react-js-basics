import React, {Component} from 'react';
import './App.css';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';

function App() {
  return (
    <div>
      <ParentComp/>
    </div>
  );
}

export default App;