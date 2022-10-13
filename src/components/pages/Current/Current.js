import React from "react"
import "./Current.css"

export default function Current({data, searchValue}){
  return(
    <div className="current">
      <h2>The current weather in {searchValue}</h2>
      <ul>
        <li>Temp: {data.current.temp}</li>
        <li>Real Feel: {data.current.feels_like}</li>
        <li>Sunrise: {new Date(data.current.sunrise * 1000).toLocaleString("en-CA")}</li>
        <li>Sunset: {new Date(data.current.sunset * 1000).toLocaleString("en-CA")}</li>
        <li><img src = {`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`} /></li>
      </ul>
    </div>
  )
}