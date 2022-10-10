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
import { Routes, Route } from 'react-router-dom';
import useLocalStorage from './hooks/useLocalStorage';

function App() {

  const [searchValue, setSearchValue] = useState("")
  const [data, setData] = useState({current: {temp: 55}})
  const [list, setList] = useLocalStorage("last3Searches", [])
  console.log(list)

  async function handleSubmit(ev) {
    ev.preventDefault()
    setSearchValue(ev.target[0].value)
    setList(list.concat(ev.target[0].value))
    // document.getElementById("myForm").reset()
    document.querySelector(".form").reset()
  }

  function handleButton(ev) {
    console.log(ev.target.innerText)
    setSearchValue(ev.target.innerText)
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

      {list.map((item) => (
        <button key={item} onClick={handleButton}>{item}</button>
      ))}

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
