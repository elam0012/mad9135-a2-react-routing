import React from "react"
import "./Home.css"

export default function Home({data, searchValue}){
  return(
    <div className="home">
      <h2>Welcome to the best weather app.</h2>
      <p>To find a weather information at any city in the world,
        please insert the city name including the province and country if needed, And git all the weather
        information for that city. Enjoy the App!! </p>
      <p>To start, you can type your desired location, or just click on one of the top navigation options to get
        your current location weather information "if you give the permission for the app to get your current location
        information automatically".</p>
    </div>
  )
}