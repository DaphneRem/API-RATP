import React, { Component } from 'react';
import ButtonChaveaux from './components/buttonChaveaux/ButtonChaveaux';
import ButtonRobespierre from './components/buttonRobespierre/ButtonRobespierre';
import ButtonVincennes from './components/buttonVincennes/ButtonVincennes';

class App extends Component {
  render() {
    return (
      <div className="App">
          <ButtonChaveaux/>
          <ButtonRobespierre/>
          <ButtonVincennes/>
      </div>
    );
  }
}

export default App;
