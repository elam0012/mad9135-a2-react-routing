import React from "react"
import "./Home.css"

export default function Home({data, searchValue}){
  return(
    <div className="home">
      <h2>The current weather in {searchValue}</h2>
      <p>Temp: {data.current.temp}</p>
      <p>Real Feel: {data.current.feels_like}</p>
      <p>Sunrise: {new Date(data.current.sunrise * 1000).toLocaleString("en-CA")}</p>
      <p>Sunset: {new Date(data.current.sunset * 1000).toLocaleString("en-CA")}</p>
      {/* <img src = {`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`} /> */}
    </div>
  )
}