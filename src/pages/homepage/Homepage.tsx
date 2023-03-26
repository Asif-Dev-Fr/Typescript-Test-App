import React, { useState } from "react";
import SearchBar from "./SearchBar";
import "../../assets/css/Homepage.css";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [city, setCity] = useState<string>("");
  const [weatherData, setWeatherData] = useState<{
    lat: number;
    lon: number;
    name: string;
    country: string;
    temp: number;
    weather: string;
    dataExist: boolean;
  }>({
    lat: 0,
    lon: 0,
    country: "",
    name: "",
    temp: 0,
    weather: "",
    dataExist: false,
  });

  // Methods :
  const selectCity = (value: string) => {
    setCity(value);
  };

  const search = async () => {
    if (city !== "") {
      await axios
        .post(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
        )
        .then((res) => {
          console.log(res);
          return res.data;
          // line below current = res.data
        })
        .then((current) =>
          current
            ? setWeatherData({
              lat: current.coord.lat,
              lon: current.coord.lon,
              name: current.name,
              country: current.sys.country,
              temp: current.main.temp,
              weather: current.weather[0].main,
              dataExist:
                current.coord.lat &&
                  current.coord.lon &&
                  current.name &&
                  current.sys.country &&
                  current.main.temp &&
                  current.weather[0].main
                  ? true
                  : false,
            })
            : alert("Try again")
        )
        .catch((error) => {
          let messsage = `This city does not exist (${error.message})`
          alert(messsage)
        });

      // let forcast = await axios.post(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`);
    }
  };

  return (
    <div className="homepage">
      <SearchBar city={city} selectCity={selectCity} search={search} />
      {weatherData.dataExist === true && (
        <CurrentWeather weatherData={weatherData} />
      )}
      {/* <div className="forecastButton">
        <Link to={"/forecast/" + city}>
          <Button variant="dark">See forecast</Button>
        </Link>
      </div> */}
    </div>
  );
};

export default Homepage;
