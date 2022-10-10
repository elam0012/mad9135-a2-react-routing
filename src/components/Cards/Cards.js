import React from "react"

export default function Cards({data}) {
  // console.log(data.hourly.slice(0,6))

  // let hourlyData = data.hourly.slice(0,6)
  // console.log("yasir", hourlyData)

  return(
    <div>
      <h2>Current Weather</h2>
      <p>Temp: {data.current.temp}</p>
      <p>Real Feel: {data.current.feels_like}</p>
      <p>Sunrise: {new Date(data.current.sunrise * 1000).toLocaleString("en-CA")}</p>
      <p>Sunset: {new Date(data.current.sunset * 1000).toLocaleString("en-CA")}</p>
      <h2>Next 6 Hours</h2>
      {/* <p>Sunset: {hourlyData.map((data) => data.temp)}</p> */}
    </div>
  )
}