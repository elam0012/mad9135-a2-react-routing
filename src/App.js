import './App.css';
import Header from "./components/Header/Header"
import { getGeolocation } from "./map.service"
import { getForecast } from "./weather.service"
import {useEffect, useState} from "react"
import Home from "./components/pages/Home/Home"
import Daily from "./components/pages/Daily/Daily"
import Hourly from './components/pages/Hourly/Hourly';
import NavBar from './components/NavBar/NavBar';
import Error from './components/pages/Error/Error';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {

  const [searchValue, setSearchValue] = useState("")
  const [data, setData] = useState({current: {temp: 55}})

  async function handleSubmit(ev) {
    ev.preventDefault()
    setSearchValue(ev.target[0].value)
  }

  useEffect(() => {
    if(searchValue) {
      getGeolocation(searchValue)
        .then( location => getForecast({coord: location, units: 'metric'}))
        .then( forecast => setData(forecast))
    }
  }, [searchValue])
  

  return (
    <div className="App">
      <Header/>
      <NavBar/>

      <p>Welcome to your favorite weather app. to find a wether information at any city in the world,
        please insert the city name including the province and country if needed, And git all the weather
        information for that city. Enjoy the App!!</p>

      <form className='form' onSubmit={handleSubmit}>
        <input type="text"/>
        <button type='submit'>Submit</button>
      </form>

      <Routes>
        <Route path="/home" element={<Home data = {data}/>} />
        <Route path='hourly' element={<Hourly data = {data}/>}/>
        <Route path='daily' element={<Daily data = {data}/>}/>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
