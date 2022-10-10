import React from "react"

export default function Home({data}){
  return(
    <div>
      <h2>Current Weather</h2>
      <p>Temp: {data.current.temp}</p>
      <p>Real Feel: {data.current.feels_like}</p>
      <p>Sunrise: {new Date(data.current.sunrise * 1000).toLocaleString("en-CA")}</p>
      <p>Sunset: {new Date(data.current.sunset * 1000).toLocaleString("en-CA")}</p>
      {/* <img src = {`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`} /> */}
    </div>
  )
}