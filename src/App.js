import axios from 'axios';
import { useState } from 'react';
import './App.css';

function App() {

  const [cityName, setCityName] = useState("")
  const [cityData, setCityData] = useState({
    description: "",
    temp: 0,
    feels: 0
    

  })

  const searchCity = () => {
    try {
      axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?unitGroup=metric&key=2SXH4ZH9JMWV9DPW9HGNFSN4W&contentType=json`).then((response) => {
      setCityData({description: response.data.description, temp: response.data.currentConditions.temp, feels: response.data.currentConditions.feelslike })})
    } catch (err) {
      console.log(err)
    }
    
  }



  return (
    <div className="App">
      <div className='search-container'>
        <input placeholder='City please...' className='inp-search' onChange={(e) => setCityName(e.target.value)} ></input>
        <button className='btn-search' onClick={searchCity}>Search</button>
      </div>
      <div className='dataCont'>
        <p className='text-left'>Описание: {cityData.description}</p>
        <p className='text-left'>Температура: {cityData.temp}</p>
        <p className='text-left'>Ощущается как: {cityData.feels}</p>
      </div>
      
    </div>
  );
}

export default App;
