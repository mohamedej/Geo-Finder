import React from "react";
import "../assets/styles/data.css";

interface DataProps {
  ip: string;
  timezone: string;
  region: string;
  isp: string;
  data: any;
}

const Data: React.FC<DataProps> = ({ timezone, region, isp, ip, data }) => {
  return (
    <div className="main-container">
      <div className="data-container">
        <div className="Data">
          <p>IP ADDRESS</p>
          <h2>{ip}</h2>
        </div>
        <div className="Data">
          <p>LOCATION</p>
          <h2>{region}</h2>
        </div>
        <div className="Data">
          <p>TIMEZONE</p>
          <h2>{timezone}</h2>
        </div>
        <div className="Data">
          <p>ISP</p>
          <h2 className="last">{isp}</h2>
        </div>
      </div>
    </div>
  );
};

export default Data;
