import React, { useState } from "react";
import "../assets/styles/search.css";
import Arrow from "../assets/Images/icon-arrow.svg";
import Data from "./Data";

interface SearchProps {
  callingApi: () => void;
  ip: string;
  setIp: (ip: string) => void;
  timezone: string;
  region: string;
  data: any;
  isp: string;
}

const Search: React.FC<SearchProps> = ({
  callingApi,
  ip,
  setIp,
  timezone,
  region,
  isp,
  data,
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
          <button
            className="input-button"
            type="submit"
            disabled={false}
            onClick={callingApi}
          >
            <img src={Arrow} alt="arrow" />
          </button>
        </div>
      </div>
      <Data data={data} ip={ip} isp={isp} region={region} timezone={timezone} />
    </div>
  );
};

export default Search;
