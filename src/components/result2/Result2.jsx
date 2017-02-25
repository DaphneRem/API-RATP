import React, { Component } from 'react';

class Result2 extends Component {
  render() {
    return (
      <div className="result2">
          <h2>{this.props.destination}</h2>
          <p>{this.props.message}</p>
      </div>
    );
  }
}

export default Result2;
