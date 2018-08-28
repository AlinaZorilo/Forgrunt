import React, { Component } from 'react';
import './const/index.js';

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
    this.handleClick = this.handleClick.bind(this);
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
            <div className="block">
              <h3>Ethereum</h3>
              <img src="http://127.0.0.1:8887/src/img/coin1.png" alt="" />
              <div className="info">
                <div className="row">
                  <span className="left big white">Price:</span>
                  <span className="left big white">${ethData.ask}</span>
                </div>
                <div className="row">
                  <span className="left white">Percent change</span>
                  <label class="switch" onInput={() => this.handleClick(1)}>
                    <input type="checkbox" />
                    <span class="slider round" />
                  </label>
                </div>
                <div>
                  <div className="row">
                    <span className="left">Hour change</span>
                    {this.state.isToggleOn ? (
                      <span className="right">
                        ${ethData.changes.price.hour}
                      </span>
                    ) : (
                      <span className="right">
                        {ethData.changes.percent.hour}%
                      </span>
                    )}
                  </div>
                  <div className="row">
                    <span className="left">Day change</span>
                    {this.state.isToggleOn ? (
                      <span className="right">
                        ${ethData.changes.price.day}
                      </span>
                    ) : (
                      <span className="right">
                        {ethData.changes.percent.day}%
                      </span>
                    )}
                  </div>
                  <div className="row">
                    <span className="left">Week change</span>
                    {this.state.isToggleOn ? (
                      <span className="right">
                        ${ethData.changes.price.week}
                      </span>
                    ) : (
                      <span className="right">
                        {ethData.changes.percent.week}%
                      </span>
                    )}
                  </div>
                  <div className="row">
                    <span className="left">Month change</span>
                    {this.state.isToggle ? (
                      <span className="right">
                        ${ethData.changes.price.month}
                      </span>
                    ) : (
                      <span className="right">
                        {ethData.changes.percent.month}%
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        {this.state &&
          this.state.ltcData && (
            <div className="block">
              <h3>Litecoin</h3>
              <img src="http://127.0.0.1:8887/src/img/coin2.png" alt="" />
              <div className="info">
                <div className="row">
                  <span className="left big white">Price:</span>
                  <span className="left big white">${ltcData.ask}</span>
                </div>
                <div className="row">
                  <span className="left white">Percent change</span>
                  <label class="switch" onInput={() => this.handleClick(2)}>
                    <input type="checkbox" />
                    <span class="slider round" />
                  </label>
                </div>
                <div>
                  <div className="row">
                    <span className="left">Hour change</span>
                    {this.state.isToggleOn1 ? (
                      <span className="right">
                        ${ltcData.changes.price.hour}
                      </span>
                    ) : (
                      <span className="right">
                        {ltcData.changes.percent.hour}%
                      </span>
                    )}
                  </div>
                  <div className="row">
                    <span className="left">Day change</span>
                    {this.state.isToggleOn1 ? (
                      <span className="right">
                        ${ltcData.changes.price.day}
                      </span>
                    ) : (
                      <span className="right">
                        {ltcData.changes.percent.day}%
                      </span>
                    )}
                  </div>
                  <div className="row">
                    <span className="left">Week change</span>
                    {this.state.isToggleOn1 ? (
                      <span className="right">
                        ${ltcData.changes.price.week}
                      </span>
                    ) : (
                      <span className="right">
                        {ltcData.changes.percent.week}%
                      </span>
                    )}
                  </div>
                  <div className="row">
                    <span className="left">Month change</span>
                    {this.state.isToggleOn1 ? (
                      <span className="right">
                        ${ltcData.changes.price.month}
                      </span>
                    ) : (
                      <span className="right">
                        {ltcData.changes.percent.month}%
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        {this.state &&
          this.state.btcData && (
            <div className="block">
              <h3>Bitcoin</h3>
              <img src="http://127.0.0.1:8887/src/img/coin3.png" alt="" />
              <div className="info">
                <div className="row">
                  <span className="left big white">Price:</span>
                  <span className="left big white">${btcData.ask}</span>
                </div>
                <div className="row">
                  <span className="left white">Percent change</span>
                  <label class="switch" onInput={() => this.handleClick(3)}>
                    <input type="checkbox" />
                    <span class="slider round" />
                  </label>
                </div>
                <div>
                  <div className="row">
                    <span className="left">Hour change</span>
                    {this.state.isToggleOn2 ? (
                      <span className="right">
                        ${btcData.changes.price.hour}
                      </span>
                    ) : (
                      <span className="right">
                        {btcData.changes.percent.hour}%
                      </span>
                    )}
                  </div>
                  <div className="row">
                    <span className="left">Day change</span>
                    {this.state.isToggleOn2 ? (
                      <span className="right">
                        ${btcData.changes.price.day}
                      </span>
                    ) : (
                      <span className="right">
                        {btcData.changes.percent.day}%
                      </span>
                    )}
                  </div>
                  <div className="row">
                    <span className="left">Week change</span>
                    {this.state.isToggleOn2 ? (
                      <span className="right">
                        ${btcData.changes.price.week}
                      </span>
                    ) : (
                      <span className="right">
                        {btcData.changes.percent.week}%
                      </span>
                    )}
                  </div>
                  <div className="row">
                    <span className="left">Month change</span>
                    {this.state.isToggleOn2 ? (
                      <span className="right">
                        ${btcData.changes.price.month}
                      </span>
                    ) : (
                      <span className="right">
                        {btcData.changes.percent.month}%
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
      </div>
    );
  }
}

export default CoinDisplay;
