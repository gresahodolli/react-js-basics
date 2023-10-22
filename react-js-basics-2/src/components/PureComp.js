import React, { PureComponent } from 'react';

class CustomPureComponent extends React.PureComponent {
  render() {
    return (
      <div>
        PureComponent {this.props.name}
      </div>
    );
  }
}

export default CustomPureComponent
