import React, { Component } from 'react';

class LifecycleB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Gresa'
    };
    console.log('LifecycleB constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleB getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('Component Did Mount');
  }

  shouldComponentUpdate() {
    console.log('LifecycleB shouldComponentUpdate');
    return true; // You need to return true or false here
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifecycleB getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('LifecycleB componentDidUpdate');
  }

  render() {
    return (
      <div>LifecycleB</div>
    );
  }
}

export default LifecycleB;