import React, { Component } from 'react';
import './scss/App.scss';
import CoinDisplay from './CoinDisplay.jsx';
import { CURRENCY } from './const/index';

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0,
    };
  }
  handleChange = e => this.setState({ activePlace: e.target.value });
  render() {
    const activePlace = this.state.activePlace;
    return (
      <div className="App">
        <div className="body">
          <div className="head">
            <span>Select currency to exchange:</span>
            <select onChange={this.handleChange}>
              {CURRENCY.map((place, index) => (
                <option key={index} value={index}>
                  {place.name}
                </option>
              ))}
            </select>
          </div>
          {console.log(activePlace)}
          <CoinDisplay key={activePlace} zip={CURRENCY[activePlace].zip} />
          {console.log(CURRENCY[activePlace].zip)}
        </div>
      </div>
    );
  }
}

export default App;
