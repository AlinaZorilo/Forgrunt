import React from 'react';

class LtcCoin extends React.Component {
  render() {
    const ltcData = this.props.ltcData;
    const isToggleOn = this.props.isToggleOn1;
    const handleClick = this.props.handleClick;
    return (
      <div>
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
              <label class="switch" onInput={() => handleClick(2)}>
                <input type="checkbox" />
                <span class="slider round" />
              </label>
            </div>
            <div>
              <div className="row">
                <span className="left">Hour change</span>
                {isToggleOn ? (
                  <span className="right">${ltcData.changes.price.hour}</span>
                ) : (
                  <span className="right">{ltcData.changes.percent.hour}%</span>
                )}
              </div>
              <div className="row">
                <span className="left">Day change</span>
                {isToggleOn ? (
                  <span className="right">${ltcData.changes.price.day}</span>
                ) : (
                  <span className="right">{ltcData.changes.percent.day}%</span>
                )}
              </div>
              <div className="row">
                <span className="left">Week change</span>
                {isToggleOn ? (
                  <span className="right">${ltcData.changes.price.week}</span>
                ) : (
                  <span className="right">{ltcData.changes.percent.week}%</span>
                )}
              </div>
              <div className="row">
                <span className="left">Month change</span>
                {isToggleOn ? (
                  <span className="right">${ltcData.changes.price.month}</span>
                ) : (
                  <span className="right">
                    {ltcData.changes.percent.month}%
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
export default LtcCoin;
