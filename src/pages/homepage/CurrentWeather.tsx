import React from "react";
import "../../assets/css/CurrentWeather.css";

interface currentWeatherProps {
  weatherData: {
    lat: number;
    lon: number;
    country: string;
    name: string;
    temp: number;
    weather: string;
    dataExist: boolean;
  };
}

const CurrentWeather = (props: currentWeatherProps) => {
  const { weatherData } = props;

  // Methods :
  const dateBuilder = () => {
    let d = new Date();
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div
      className={
        weatherData.temp > 16
          ? "warm containerCurrentWeather"
          : "containerCurrentWeather"
      }
    >
      <div className="location-box">
        <div className="location">
          {" "}
          {weatherData.name}, {weatherData.country}{" "}
        </div>
        <div className="date">{dateBuilder()}</div>
      </div>

      <div className="weather-box">
        <div className="temp">{Math.round(weatherData.temp)}°c</div>
        <div className="weather">{weatherData.weather}</div>
      </div>
    </div>
  );
};

export default CurrentWeather;
