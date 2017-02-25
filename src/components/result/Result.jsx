import React, { Component } from 'react';

class Result extends Component {
  render() {
    return (
      <div className="result">
         <h2> {this.props.destination}</h2>
          <p>{this.props.message}</p>
      </div>
    );
  }
}

export default Result;
