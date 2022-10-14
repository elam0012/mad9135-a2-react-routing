import React from "react"
import "./Daily.css"
import {useNavigate } from 'react-router-dom';

export default function Daily({data, searchValue}){
  const navigate = useNavigate();
  if(!data || !searchValue || !data.daily) {
    navigate("/")
    return 
  } else {
    let dailyData = data.daily.slice(0,6)
    return(
      <div className="daily">
        <h2>The next 6 days weather forecast is {searchValue}</h2>
        {dailyData.map((data, index) => {
          const dayTemp = `${parseInt(data.temp.day)} \u00B0`
          const nightTemp = `${parseInt(data.temp.night)} \u00B0`
          const dayFeel = `${parseInt(data.feels_like.day)} \u00B0`
          const nightFeel = `${parseInt(data.feels_like.night)} \u00B0`
          return (
            <ul key={index} id="daily-ul">
              <div id="daily-top">
                <div>
                  <li key={data.weather[0].icon + "index"}><img id="daily-img" src = {`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} /></li>
                </div>
                <div id="daily-temp-feel">
                  <li key={data.temp.day}><span>Day Temp: </span>{dayTemp}</li>
                  <li key={data.sunrise}><span>Night Temp: </span>{nightTemp}</li>
                </div>
              </div>
                  <li key={data.sunset}><span>Day Real Feel: </span>{dayFeel}</li>
                  <li key={data.moon_phase}><span>Night Real Feel: </span>{nightFeel}</li>
              <li key={data.dt}><span>Date-Time: </span>{new Date(data.dt * 1000).toLocaleString("en-CA")}</li>
              <li key={data.weather[0].description + "index"}><span>{data.weather[0].description}</span></li>
            </ul>
          )
        })}
      </div>
    )
  }
}