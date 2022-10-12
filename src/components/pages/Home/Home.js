import React from "react"
import "./Home.css"

export default function Home({data, searchValue}){
  return(
    <div className="home">
      <p>Welcome to the best weather app. to find a wether information at any city in the world,
        please insert the city name including the province and country if needed, And git all the weather
        information for that city. Enjoy the App!! To start you can either insert your current location or allow the permission 
        for our app to get it automatically.
      </p>
    </div>
  )
}