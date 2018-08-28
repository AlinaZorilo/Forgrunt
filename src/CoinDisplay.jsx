import React, { Component } from 'react';
import './const/index.js';
import EthCoin from './EthCoin.jsx';
import LtcCoin from './LtcCoin.jsx';
import BtcCoin from './BtcCoin.jsx';

class CoinDisplay extends Component {
  constructor() {
    super();
    this.state = {
      ethData: null,
      ltcData: null,
      btcData: null,
      isToggleOn: true,
      isToggleOn1: true,
      isToggleOn2: true,
    };
  }

  handleClick(a) {
    if (a === 1) {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn,
      }));
    } else if (a === 2) {
      this.setState(prevState => ({
        isToggleOn1: !prevState.isToggleOn1,
      }));
    } else if (a === 3) {
      this.setState(prevState => ({
        isToggleOn2: !prevState.isToggleOn2,
      }));
    }
  }

  componentDidMount() {
    const zip = this.props.zip;
    const URLBTC =
      'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTC' + zip;
    const URLETH =
      'https://apiv2.bitcoinaverage.com/indices/global/ticker/ETH' + zip;
    const URLLTC =
      'https://apiv2.bitcoinaverage.com/indices/global/ticker/LTC' + zip;
    fetch(URLBTC)
      .then(res => res.json())
      .then(json => {
        this.setState({ btcData: json });
      });
    fetch(URLETH)
      .then(res => res.json())
      .then(json => {
        this.setState({ ethData: json });
      });
    fetch(URLLTC)
      .then(res => res.json())
      .then(json => {
        this.setState({ ltcData: json });
      });
  }
  render() {
    var ethData = this.state.ethData;
    var ltcData = this.state.ltcData;
    var btcData = this.state.btcData;

    return (
      <div className="main">
        {this.state &&
          this.state.ethData && (
            <EthCoin
              ethData={ethData}
              isToggleOn={this.state.isToggleOn}
              handleClick={this.handleClick.bind(this)}
            />
          )}
        {this.state &&
          this.state.ltcData && (
            <LtcCoin
              ltcData={ltcData}
              isToggleOn1={this.state.isToggleOn1}
              handleClick={this.handleClick.bind(this)}
            />
          )}
        {this.state &&
          this.state.btcData && (
            <BtcCoin
              btcData={btcData}
              isToggleOn2={this.state.isToggleOn2}
              handleClick={this.handleClick.bind(this)}
            />
          )}
      </div>
    );
  }
}

export default CoinDisplay;
