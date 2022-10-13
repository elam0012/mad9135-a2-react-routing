import React from "react"
import "./Current.css"

export default function Current({data, searchValue}){
  return(
    <div className="current">
      <h2>The current weather in {searchValue}</h2>
      <ul id="current-ul">
        <div id="current-top">
          <div>
            <li ><img src = {`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`} id="current-img" /></li>
          </div>
          <div id="current-temp-feel">
            <li><span>Temp: </span>{data.current.temp}</li>
            <li><span>Real Feel: </span> {data.current.feels_like}</li>
          </div>
        </div>
        <li><span>Sunrise:</span> {new Date(data.current.sunrise * 1000).toLocaleString("en-CA")}</li>
        <li><span>Sunset: </span>{new Date(data.current.sunset * 1000).toLocaleString("en-CA")}</li>
      </ul>
    </div>
  )
}