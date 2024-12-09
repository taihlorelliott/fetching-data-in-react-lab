// src/App.jsx

import {useState} from 'react'
import StarshipCard from './components/starshipCard';

const App = () => {

  const [ships, setShips] = useState([]);
  const [input, setInput] = useState('')
  // const [name, setName] = useState('');
  // const [starshipClass, setStarshipClass] = useState('');
  // const [creator, setCreator] = useState('');
  // const [model, setModel] = useState('');
 

  const displayShips = async () => {
    let response = await fetch (
      'https://swapi.dev/api/starships'
    )
    let JSONdata = await response.json();
    console.log(JSONdata)
    setShips(JSONdata.results)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    let response = await fetch (
      `https://swapi.dev/api/starships/?search=${input}`
    )
    let JSONdata = await response.json();
    console.log(JSONdata)
    setShips(JSONdata.results)
    // setName(JSONdata.results.name)
    // setStarshipClass(JSONdata.starship_class)
    // setCreator(JSONdata.manufacturer)
    // setModel(JSONdata.model)
  }

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  return (
    <>
    <button onClick={displayShips}>Show Ships</button>
    <div>
      {ships.map((ship, index) => (
        <StarshipCard key={index} ship={ship}/>
      ))}
    </div>
    <form onSubmit={handleSubmit}>
      Enter name or model of ship here to get information: {name}
      <input type="text" value={input} onChange={handleChange}/>
      <input type="submit" value="search"/>
    </form>
    {/* <h3>{name}</h3>
    <p>Class: {starshipClass}</p>
    <p>Manufacturer: {creator}</p>
    <p>Model: {model}</p> */}
    </>
    

  );
}

export default App
