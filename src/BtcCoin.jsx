import React from 'react';
import coin3 from './img/coin3.png';

class BtcCoin extends React.Component {
  render() {
    const btcData = this.props.btcData;
    const isToggleOn = this.props.isToggleOn2;
    const handleClick = this.props.handleClick;
    return (
      <div>
        <div className="block">
          <h3>Bitcoin</h3>
          <img src={coin3} alt="" />
          <div className="info">
            <div className="row">
              <span className="left big white">Price:</span>
              <span className="left big white">${btcData.ask}</span>
            </div>
            <div className="row">
              <span className="left white">Percent change</span>
              <label class="switch" onInput={() => handleClick(3)}>
                <input type="checkbox" />
                <span class="slider round" />
              </label>
            </div>
            <div>
              <div className="row">
                <span className="left">Hour change</span>
                {isToggleOn ? (
                  <span className="right">${btcData.changes.price.hour}</span>
                ) : (
                  <span className="right">{btcData.changes.percent.hour}%</span>
                )}
              </div>
              <div className="row">
                <span className="left">Day change</span>
                {isToggleOn ? (
                  <span className="right">${btcData.changes.price.day}</span>
                ) : (
                  <span className="right">{btcData.changes.percent.day}%</span>
                )}
              </div>
              <div className="row">
                <span className="left">Week change</span>
                {isToggleOn ? (
                  <span className="right">${btcData.changes.price.week}</span>
                ) : (
                  <span className="right">{btcData.changes.percent.week}%</span>
                )}
              </div>
              <div className="row">
                <span className="left">Month change</span>
                {isToggleOn ? (
                  <span className="right">${btcData.changes.price.month}</span>
                ) : (
                  <span className="right">
                    {btcData.changes.percent.month}%
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
export default BtcCoin;
