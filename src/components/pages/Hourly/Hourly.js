import React from "react"

export default function Hourly({data}){
  // let hourlyData = []
  // if (Array.isArray(data)) {
    let hourlyData = data.hourly.slice(0,6)
  // } 
  return(
    <div>
      <h2>Next 6 Hours</h2>
      {hourlyData.map((data, index) => {
        return (
          <ul key={index}>
            <li key={data.dt}>Date, Time: {new Date(data.dt * 1000).toLocaleString("en-CA")}</li>
            <li key={data.sunrise}>Temp: {data.temp}</li>
            <li key={data.sunset}>Real Feel: {data.feels_like}</li>
            <li key={data.weather[0].description + "index"}>Description: {data.weather[0].description}</li>
            <li key={data.weather[0].icon + "index"}><img src = {`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} /></li>
          </ul>
        )
      })}
    </div>
  )
}