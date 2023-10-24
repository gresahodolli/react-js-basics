import React, { Component } from 'react';

export class ClickCounterTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    const { count } = this.state; // Corrected placement
    return (
      <div>
        <button onClick={this.incrementCount}>
          Clicked {count} times
        </button>
      </div>
    );
  }
}

export default ClickCounterTwo;