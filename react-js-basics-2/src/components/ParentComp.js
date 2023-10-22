import React, { Component } from 'react';
import PureComp from './PureComp';
import RegComp from './RegComp';

class ParentComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Pikachu'
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'Pikachu'
      });
    }, 2000);
  }

  render() {
    return (
      <div>
        <div>ParentComp</div>
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp