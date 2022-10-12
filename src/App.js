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
import Spinner from './components/Spinner/Spinner';

function App() {

  const [searchValue, setSearchValue] = useState("")
  const [data, setData] = useState({current: {temp: 55}})
  const [list, setList] = useLocalStorage("last3Searches", [])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => { // temporarily to test the loader
    setTimeout(setLoaded, 2000, true)
  },[])

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
  //   else {
  //   console.log("GeoLocation is not available")/* geolocation IS NOT available */
  // }
}, [])

  function handleSubmit(ev) {
    ev.preventDefault()
    if(ev.target[0].value == "") return
    setSearchValue(ev.target[0].value)
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
        <button type='submit'>Submit</button>
      </form>

      <aside className='aside'>
        <p>Previous Serach:</p>
        {list.map((item) => (
          <button key={item} onClick={handleButton}><a>{item}</a></button>
        ))}
      </aside>

      <Routes>
        <Route path="/home" element={<Home data = {data} searchValue = {searchValue}/>} />
        <Route path='hourly' element={<Hourly data = {data} searchValue = {searchValue}/>}/>
        <Route path='daily' element={<Daily data = {data} searchValue = {searchValue}/>}/>
        <Route path="*" element={<Error />} />
      </Routes>

      <p>Welcome to the best weather app. to find a wether information at any city in the world,
        please insert the city name including the province and country if needed, And git all the weather
        information for that city. Enjoy the App!! To start you can either insert your current location or allow the permission 
        for our app to get it automatically </p>

      {!loaded && <Spinner/>}
    </div>
  );
}

export default App;
