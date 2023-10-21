import React, { Component } from 'react'

class LifecycleB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Gresa'
    }
    console.log('LifecycleB constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleB getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('Component Did Mount');
  }

  render() {
    return (
      <div>LifecycleB</div>
    )
  }
}

export default LifecycleB
