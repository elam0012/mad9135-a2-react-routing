import React from "react"

export default function Cards({data}) {

  // let hourlyData = []
  // let hourlyData = data.hourly.slice(0,6)
  // if (Array.isArray(data)) {
    let hourlyData = data.hourly.slice(0,6)
  // } 

  console.log(data.hourly)

  return(
    <div>
      <h2>Current Weather</h2>
      <p>Temp: {data.current.temp}</p>
      <p>Real Feel: {data.current.feels_like}</p>
      <p>Sunrise: {new Date(data.current.sunrise * 1000).toLocaleString("en-CA")}</p>
      <p>Sunset: {new Date(data.current.sunset * 1000).toLocaleString("en-CA")}</p>
      <h2>Next 6 Hours</h2>
      <p>{hourlyData.map((data) => {
        return (
          <div>
            <p>Date, Time: {new Date(data.dt * 1000).toLocaleString("en-CA")}</p>
            <p>Temp: {data.temp}</p>
            <p>Real Feel: {data.feels_like}</p>
            <p>Description: {data.weather[0].description}</p>
          </div>
        )
      })}</p>
    </div>
  )
}