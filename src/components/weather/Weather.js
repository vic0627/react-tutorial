import React from "react";
import axios from "axios";
const { useState, useEffect } = React;

const url = (lat, lng) =>
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=c70ca7daee44c4591d990ac4fe8b6e3b&lang=zh_tw`;

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const getWeather = () => {
    if ("geolocation" in navigator) {
      setWeather("123");
      // navigator.geolocation.getCurrentPosition((geo) => {
      //   axios
      //     .get(url(geo.coords.latitude, geo.coords.longitude))
      //     .then((result) => console.log(result.data))
      //     .catch((error) => console.log("error", error));
      // });
    } else {
      console.log("geolocation is not supported");
    }
  };
  useEffect(() => {
    getWeather();
  })
  return (
    <div
      className='weeather'
      style={{ width: "100%", height: "100vh" }}
    >
      <div>{weather}</div>
    </div>
  );
};
export default Weather;
