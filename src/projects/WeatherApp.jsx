import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const getWeather = (city) => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=eb3e45369ea4ca4b45dd43ba83cf4c68`)
      .then((res) => {
        setWeather(res.data);

      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
        setWeather(null); // Set empty weather data in case of an error
      });
  };

 

  const onClick = () => {
    getWeather(city); // Fetch weather data for the new city
   setCity('')
  };
  useEffect(()=>{
    getWeather("Patna")
  })
  return (
    <div className="container my-3">
      <div className="row">
        <h2 className="text-center mb-2">Weather App</h2>
        <div className="col-lg-6 mx-auto">
          <div className="d-flex gap-2">
            <input
              type="text"
              className="form-control"
              placeholder="Enter City Name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button className="btn btn-primary" onClick={onClick}>
              Submit
            </button>
          </div>
        </div>
      </div>
     <div className="row my-3 p-3">
     {
        weather && <div className="col-lg-6 mx-auto position-relative  bg-light rounded p-3 ">
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} width={100} alt='logo' className='position-absolute border m-2'  id='weather-logo'/>
        <h2>Weather of {weather.name}</h2>
        <p className='fs-5'>Temperature: {weather.main && `${weather.main.temp}`}&deg;C</p>
        <p className='fs-5'>Humidity: {weather.main && `${weather.main.humidity}%`}</p>
        <p className='fs-5'>Description: {weather.weather && weather.weather[0].description}</p>
        <p className='fs-5'>Wind Speed: {weather.wind.speed && weather.wind.speed}m/s</p>
      </div>
      }
     </div>
    </div>
  );
};

export default WeatherApp;
