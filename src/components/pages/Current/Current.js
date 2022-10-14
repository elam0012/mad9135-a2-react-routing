import React from "react"
import "./Current.css"
import {useNavigate } from 'react-router-dom';
import Spinner from "../../Spinner/Spinner";

export default function Current({data, searchValue}){
  const navigate = useNavigate();
  if(!data || !searchValue || !data.current.weather) {
    navigate("/")
    return <Spinner/>
  } else {
    const temp = `${parseInt(data.current.temp)} \u00B0`
    const feel = `${parseInt(data.current.feels_like)} \u00B0`
    const description =  data.current.weather[0].description.toUpperCase()
    return(
      <div className="current">
        <h2>The current weather in {searchValue}</h2>
        <ul id="current-ul">
          <li id="description"><span>{description}</span></li>
          <li ><span>Current Time:</span> {new Date(data.current.dt * 1000).toLocaleString("en-CA")}</li>
          <div id="current-top">
            <div>
              <li ><img src = {`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`} id="current-img" /></li>
            </div>
            <div id="current-temp-feel">
              <li><span>Temp: </span>{temp}</li>
              <li><span>Real Feel: </span> {feel}</li>
            </div>
          </div>
          <li id="sunrise"><span>Sunrise:</span> {new Date(data.current.sunrise * 1000).toLocaleString("en-CA")}</li>
          <li id="sunset"><span>Sunset: </span>{new Date(data.current.sunset * 1000).toLocaleString("en-CA")}</li>
        </ul>
      </div>
    )
  }
}