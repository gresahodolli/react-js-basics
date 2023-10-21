import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Gresa'
    }
    console.log('LifecycleA constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleA getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('Component Did Mount');
  }

  render() {
    return (
      <div>
        <div>LifecycleA</div>
        <LifecycleB />
      </div>
    )
  }
}

export default LifecycleA