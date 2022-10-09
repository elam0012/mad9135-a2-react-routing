import './App.css';
import Header from "./components/Header/Header"
import { getGeolocation } from "./map.service"
import { getForecast } from "./weather.service"

function App() {

  async function handleSubmit(ev) {
    ev.preventDefault()
    let location = await getGeolocation(ev.target[0].value)
    let forecast = await getForecast({coord: location, units: 'metric'})
    console.log(forecast)
  }

  return (
    <div className="App">
      <Header/>
      <form className='form' onSubmit={handleSubmit}>
        <input type="text"/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
