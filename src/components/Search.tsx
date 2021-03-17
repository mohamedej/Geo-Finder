import React, { useState } from "react";
import "./Styles/Search.css";
import Arrow from "./Images/icon-arrow.svg";
import Data from "./Data";

interface SearchProps {
  callingApi: () => void;
  ip: string;
  setIp: (ip: string) => void;
  timezone: string;
  region: string;
  isp: string;
}

const Search: React.FC<SearchProps> = ({
  callingApi,
  ip,
  setIp,
  timezone,
  region,
  isp,
}) => {
  return (
    <div className="search-bar">
      <div className="form-container">
        <label htmlFor="input">IP Address Tracker</label>
        <div>
          <input
            className="input"
            placeholder=" Search for any IP address or domain"
            onChange={(event) => {
              setIp(event.target.value);
            }}
          ></input>
          <button className="input-button" type="submit" onClick={callingApi}>
            <img src={Arrow} alt="arrow" />
          </button>
        </div>
      </div>
      <Data ip={ip} isp={isp} region={region} timezone={timezone} />
    </div>
  );
};

export default Search;
