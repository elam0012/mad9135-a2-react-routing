import React from "react"
import "./Hourly.css"
import {useNavigate } from 'react-router-dom';
import Spinner from "../../Spinner/Spinner";

export default function Hourly({data, searchValue}){
  const navigate = useNavigate();
  if(!data || !searchValue || !data.hourly) {
    navigate("/")
    return <Spinner/>
  } else {
    let hourlyData = data.hourly.slice(0,6)
    return(
      <div className="hourly">
        <h2> The next 6 hours weather forecast in {searchValue} </h2>
        {hourlyData.map((data, index) => {
          const temp = `${parseInt(data.temp)} \u00B0`
          const feel = `${parseInt(data.feels_like)} \u00B0`
          const description = data.weather[0].description.toUpperCase()
          return (
            <ul key={index} id="hourly-ul">
              <li key={data.weather[0].description + "index"}><span id="description">{description}</span></li>
              <div id="hourly-top">
                <div>
                  <li key={data.weather[0].icon + "index"}><img id="hourly-img" src = {`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} /></li>
                </div >
                <div id="hourly-temp-feel">
                  <li key={data.sunrise}><span>Temp:</span> {temp}</li>
                  <li key={data.sunset}><span>Real Feel:</span> {feel}</li>
                </div>
              </div>
              <li key={data.dt} id="hourly-date"><span>Date-Time:</span> {new Date(data.dt * 1000).toLocaleString("en-CA")}</li>
            </ul>
          )
        })}
      </div>
    )
  }
}