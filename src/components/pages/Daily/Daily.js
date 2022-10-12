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
          <ul key={index}>
            <li key={data.dt}>Date, Time: {new Date(data.dt * 1000).toLocaleString("en-CA")}</li>
            <li key={data.temp.day}>Temp at Day: {data.temp.day}</li>
            <li key={data.sunrise}>Temp at Night: {data.temp.night}</li>
            <li key={data.sunset}>Real Feel at Day: {data.feels_like.day}</li>
            <li key={data.moon_phase}>Real Feel at Night: {data.feels_like.night}</li>
            <li key={data.weather[0].description + "index"}>Description: {data.weather[0].description}</li>
            <li key={data.weather[0].icon + "index"}><img src = {`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} /></li>
          </ul>
        )
      })}
    </div>
  )
}