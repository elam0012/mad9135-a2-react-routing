import './App.css';
import Header from "./components/Header/Header"
import { getGeolocation } from "./map.service"
import { getForecast } from "./weather.service"
import {useEffect, useState} from "react"
import Home from './components/pages/Home/Home';
import Current from './components/pages/Current/Current';
import Daily from "./components/pages/Daily/Daily"
import Hourly from './components/pages/Hourly/Hourly';
import NavBar from './components/NavBar/NavBar';
import Error from './components/pages/Error/Error';
import { Routes, Route, useNavigate } from 'react-router-dom';
import useLocalStorage from './hooks/useLocalStorage';

function App() {

  const [searchValue, setSearchValue] = useState("")
  const [data, setData] = useState("")
  const [list, setList] = useLocalStorage("last3Searches", [])
  const navigate = useNavigate();

  useEffect(() => { // to setup the current or initial location
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) =>{
      console.log(position.coords)
      const location = { lon: position.coords.longitude, lat: position.coords.latitude }
      getForecast({coord: location, units: 'metric'})
        .then(forecast => setData(forecast))
      setSearchValue("your location")
      })
    } 
  }, [])

  function handleSubmit(ev) {
    ev.preventDefault()
    if(ev.target[0].value == "") return
    setSearchValue(ev.target[0].value)
    navigate("/current")
    if (list.includes(ev.target[0].value)) { // to prevent duplication of buttons and their keys
      document.querySelector(".form").reset()
      return
    }
    if (list.length == 3)  setList(list.shift()) // maximize local storage elements to 3
    setList(list.concat(ev.target[0].value))
    document.querySelector(".form").reset()
  }

  function handleButton(ev) {
    setSearchValue(ev.target.innerText)
    navigate("/current")
  }

  useEffect(() => {
    if(searchValue) {
      getGeolocation(searchValue) // find coordinates for entered location
        .then( location => getForecast({coord: location, units: 'metric'})) // find weather for that location
        .then( forecast => setData(forecast))
    }
  }, [searchValue])
  

  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <form className='form' onSubmit={handleSubmit}>
        <input type="text"/>
        <button type='submit'>Search</button>
      </form>
      <aside className='aside'>
        <p>Previous Serach:</p>
        {list.map((item) => (
          <button key={item} onClick={handleButton}><a>{item}</a></button>
        ))}
      </aside>
      <Routes>
        <Route path="/" element={<Home data = {data} searchValue = {searchValue}/>} />
        <Route path="/current" element={<Current data = {data} searchValue = {searchValue}/>} />
        <Route path='hourly' element={<Hourly data = {data} searchValue = {searchValue}/>}/>
        <Route path='daily' element={<Daily data = {data} searchValue = {searchValue}/>}/>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
