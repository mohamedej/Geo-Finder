import React, { useState } from "react";
import Map from "./components/Map";
import Search from "./components/Search";
import "./assets/styles/main.css";
import axios from "axios";
import { useQuery } from "react-query";
import { getAddress } from "./api";

const App: React.FC = () => {
  const [ip, setIp] = useState("");
  const [isp, setIsp] = useState("");
  const [timeZone, setTimez] = useState("");
  const [region, setRegion] = useState("");
  const [lat, setLat] = useState("-0.09");
  const [lng, setlng] = useState("50.1");

  const { isLoading, data, refetch } = useQuery(
    "address",
    () => getAddress(ip),
    {
      enabled: false,
    }
  );

  if (!isLoading) {
    console.log(data);
  }

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
    <div className="App">
      <div className="contianter">
        <Search
          callingApi={refetch}
          data={data}
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
