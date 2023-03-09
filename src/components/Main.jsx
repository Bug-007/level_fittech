import React from "react";
import "./main.css";

const Main = () => {
  return (
    <div className="container">
      <div className="center-container">
        <div className="left">
          <div className="left-title">AirNow</div>
          <div className="manage-list">
            <span className="list-title">MANAGE</span>
            <ul>
              <li className="list-item">
                <img src="./shovel.png" alt="" className="list-icon" />
                <span className="list-text">Proxy</span>
              </li>
              <li className="list-item">
                <img src="./shovel.png" alt="" className="list-icon" />
                <span className="list-text">Balance</span>
              </li>
              <li className="list-item">
                <img src="./shovel.png" alt="" className="list-icon" />
                <span className="list-text">Online Check</span>
              </li>
              <li className="list-item">
                <img src="./shovel.png" alt="" className="list-icon" />
                <span className="list-text">Affiliate System</span>
              </li>
            </ul>
          </div>

          <div className="support-list">
            <span className="list-title">SUPPORT</span>
            <ul>
              <li className="list-item">
                <img src="./shovel.png" alt="" className="list-icon" />
                <span className="list-text">Tickets</span>
              </li>
              <li className="list-item">
                <img src="./shovel.png" alt="" className="list-icon" />
                <span className="list-text">FAQ</span>
              </li>
            </ul>
          </div>

          <div className="help-center">
            <p className="help-title">HELP CENTER</p>
            <p className="help-text">Visit Our Help Center</p>

            <button className="help-btn">Start</button>
          </div>
        </div>

        <div className="right">
          <div className="chart-view">
            <div className="chart-header">
              <span className="header-text">Balance</span>
              <div className="badge-prof">
                <img src="./shovel.png" alt="" className="notification" />
                <img src="./shovel.png" alt="" className="badge" />
              </div>
            </div>

            <hr className="styled-hr" />

            <div className="chart-details">
              <span className="chart-detail-text">Daily Balance Overview</span>
              <div className="chart-opt">
                <span>Spent</span>
                <span>Refferal</span>
                <span>14 Days</span>
              </div>
            </div>
            <div className="chart-show">Here the Chart will be displayed.</div>
          </div>

          <div className="balance-stat">
            <span className="bal-text">Balance Statistics</span>
            <div className="bal-chart">
              <img src="" alt="" className="bal-chart-img" />
            </div>
          </div>

          <div className="bal-detail">
            <span className="bal-detail-text">Spent</span>
            <span className="bal-detail-text">Refferal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
