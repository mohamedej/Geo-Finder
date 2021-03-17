import React, { useEffect, useState } from "react";
import Map from "./components/Map";
import Search from "./components/Search";
import "./components/Styles/Styles.css";
import axios from "axios";

const App: React.FC = () => {
  const [ip, setIp] = useState("");
  const [isp, setIsp] = useState("");
  const [timeZone, setTimez] = useState("");
  const [region, setRegion] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setlng] = useState("");

  const callingApi = async () => {
    const response = await axios.get(
      `https://geo.ipify.org/api/v1?apiKey=at_HitWtrHXnloR4MGqHbqhd9hq1GOec&ipAddress=${ip}`
    );
    setIsp(response.data.isp);
    setTimez(response.data.location.timezone);
    setRegion(
      `${response.data.location.city}, ${response.data.location.country} ${
        response.data.location.postalCode
          ? response.data.location.postalCode
          : ""
      }`
    );
    setLat(response.data.location.lat);
    setlng(response.data.location.lng);
  };

  return (
    <div
      className="App"
      // style={{
      //   display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
      // }}
    >
      <div className="contianter">
        <Search
          callingApi={callingApi}
          setIp={setIp}
          ip={ip}
          isp={isp}
          region={region}
          timezone={timeZone}
        />
        <Map lng={lng} lat={lat} />
      </div>
    </div>
  );
};

export default App;
