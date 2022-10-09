import './App.css';
import Header from "./components/Header/Header"
import {getGeolocation} from "./map.service"

function App() {

  async function handleSubmit(ev) {
    ev.preventDefault()
    console.log(ev.target[0].value)
    let location = await getGeolocation(ev.target[0].value)
    console.log(location)
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
