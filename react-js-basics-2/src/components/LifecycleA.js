import React, { Component } from 'react';
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Gresa'
    };
    console.log('LifecycleA constructor');
  }

  componentDidMount() {
    console.log('Component Did Mount');
    }


  shouldComponentUpdate() {
    console.log('LifecycleA shouldComponentUpdate');
    return true; // You need to return true or false here
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifecycleA getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('LifecycleA componentDidUpdate');
  }

  changeState = () => {
    this.setState({
      name: 'Code'
    });
  }
  render() {
    return (
      <div>
        <div>LifecycleA</div>
        <button onClick={this.changeState}>Change state</button>
        <LifecycleB />
      </div>
    );
}
}
export default LifecycleA;