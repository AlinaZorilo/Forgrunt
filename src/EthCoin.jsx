import React from 'react';
import coin1 from './img/coin1.png';

class EthCoin extends React.Component {
  render() {
    const ethData = this.props.ethData;
    const isToggleOn = this.props.isToggleOn;
    const handleClick = this.props.handleClick;
    return (
      <div>
        <div className="block">
          <h3>Ethereum</h3>
          <img src={coin1} alt="" />
          <div className="info">
            <div className="row">
              <span className="left big white">Price:</span>
              <span className="left big white">${ethData.ask}</span>
            </div>
            <div className="row">
              <span className="left white">Percent change</span>
              <label class="switch" onInput={() => handleClick(1)}>
                <input type="checkbox" />
                <span class="slider round" />
              </label>
            </div>
            <div>
              <div className="row">
                <span className="left">Hour change</span>
                {isToggleOn ? (
                  <span className="right">${ethData.changes.price.hour}</span>
                ) : (
                  <span className="right">{ethData.changes.percent.hour}%</span>
                )}
              </div>
              <div className="row">
                <span className="left">Day change</span>
                {isToggleOn ? (
                  <span className="right">${ethData.changes.price.day}</span>
                ) : (
                  <span className="right">{ethData.changes.percent.day}%</span>
                )}
              </div>
              <div className="row">
                <span className="left">Week change</span>
                {isToggleOn ? (
                  <span className="right">${ethData.changes.price.week}</span>
                ) : (
                  <span className="right">{ethData.changes.percent.week}%</span>
                )}
              </div>
              <div className="row">
                <span className="left">Month change</span>
                {isToggleOn ? (
                  <span className="right">${ethData.changes.price.month}</span>
                ) : (
                  <span className="right">
                    {ethData.changes.percent.month}%
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default EthCoin;
