import React from "react"

export default function Cards({data}) {

  // let hourlyData = []
  // if (Array.isArray(data)) {
    let hourlyData = data.hourly.slice(0,6)
  // } 

  // let dailyData = []
  // if (Array.isArray(data)) {
    let dailyData = data.daily.slice(0,6)
  // } 

  // console.log(data.current.weather[0].icon)
  // let imageURL = `http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`

  return(
    <div>
      <h2>Current Weather</h2>
      <p>Temp: {data.current.temp}</p>
      <p>Real Feel: {data.current.feels_like}</p>
      <p>Sunrise: {new Date(data.current.sunrise * 1000).toLocaleString("en-CA")}</p>
      <p>Sunset: {new Date(data.current.sunset * 1000).toLocaleString("en-CA")}</p>
      <img src = {`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`} />
      <h2>Next 6 Hours</h2>
      <p>{hourlyData.map((data) => {
        return (
          <div>
            <p>Date, Time: {new Date(data.dt * 1000).toLocaleString("en-CA")}</p>
            <p>Temp: {data.temp}</p>
            <p>Real Feel: {data.feels_like}</p>
            <p>Description: {data.weather[0].description}</p>
            <img src = {`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} />
          </div>
        )
      })}</p>
      <h2>Next 6 days</h2>
      <p>{dailyData.map((data) => {
        return (
          <div>
            <p>Date, Time: {new Date(data.dt * 1000).toLocaleString("en-CA")}</p>
            <p>Temp at day: {data.temp.day}</p>
            <p>Temp at night: {data.temp.night}</p>
            <p>Real Feel at day: {data.feels_like.day}</p>
            <p>Real Feel at night: {data.feels_like.night}</p>
            <p>Description: {data.weather[0].description}</p>
            <img src = {`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} />
          </div>
        )
      })}</p>
    </div>
  )
}