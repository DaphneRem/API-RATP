import React, { Component } from 'react';
import axios from 'axios';
import Result from '../result/Result';
import Result2 from '../result2/Result2';


class ButtonChaveaux extends Component {

    constructor(props) {
            super(props);
            this.state = {
                showComponent : false,
                mairieMontreuil : [],
                pontSevres : []
        }
            this.miniModal = this.miniModal.bind(this);
            this.renderResult = this.renderResult.bind(this);
            this.renderResult2 = this.renderResult2.bind(this);
    }


    componentDidMount() {
        var url = `https://api-ratp.pierre-grimaud.fr/v2/metros/9/stations/365?destination=24`;
            axios.get(url).then((response) => {
                return this.setState({mairieMontreuil : response.data.response.schedules})
            });
        var url2 = `https://api-ratp.pierre-grimaud.fr/v2/metros/9/stations/365?destination=25`;
                axios.get(url2).then((response) => {
                    return this.setState({pontSevres : response.data.response.schedules})
                });
        }

        miniModal() {
            this.setState({ showComponent: !this.state.showComponent});
        };
        renderResult() {
        return this.state.mairieMontreuil.map((e, i) => {
            return (<Result
                        key={i} destination={e.destination}
                        message={e.message}
                    />);
            })
        }
        renderResult2() {
        return this.state.pontSevres.map((e, i) => {
            return (<Result2
                        key={i} destination={e.destination}
                        message={e.message}
                    />);
            })
        }

  render() {

        let result = this.renderResult();
        let result2 = this.renderResult2();


    return (
      <div className="input">
          <h1> Croix de Chaveaux</h1>
           <button className="btn" onClick={this.miniModal}>Prochains trains</button>
           <div className="list">
               {this.state.showComponent ? result : null }
               {this.state.showComponent ? result2 : null }
          </div>
      </div>
    );
  }
}

export default ButtonChaveaux;
