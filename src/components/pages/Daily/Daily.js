import React from "react"
import "./Daily.css"

export default function Daily({data, searchValue}){
  // let dailyData = []
  // if (Array.isArray(data)) {
    let dailyData = data.daily.slice(0,6)
  // } 
  return(
    <div className="daily">
      <h2>The next 6 days weather forecast is {searchValue}</h2>
      {dailyData.map((data, index) => {
        return (
          <ul key={index} id="daily-ul">
            <div id="daily-top">
              <div>
                <li key={data.weather[0].icon + "index"}><img id="daily-img" src = {`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} /></li>
              </div>
              <div id="daily-temp-feel">
                <li key={data.temp.day}><span>Day Temp: </span>{data.temp.day}</li>
                <li key={data.sunrise}><span>Night Temp: </span>{data.temp.night}</li>
              </div>
            </div>
                <li key={data.sunset}><span>Day Real Feel: </span>{data.feels_like.day}</li>
                <li key={data.moon_phase}><span>Night Real Feel: </span>{data.feels_like.night}</li>
            <li key={data.dt}><span>Date-Time: </span>{new Date(data.dt * 1000).toLocaleString("en-CA")}</li>
            <li key={data.weather[0].description + "index"}><span>{data.weather[0].description}</span></li>
          </ul>
        )
      })}
    </div>
  )
}