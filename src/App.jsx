import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Weather from './components/Weather'
import Loader from './components/Loader'
import Input from './components/Input'


function App() {

  const [weather, setWeather] = useState(null)
  // const [bgImage, setBgImage] = useState('')

  // useEffect(() => {

  //     axios.get()
  // }, [])

  const success = (pos) => {
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude
    const API_KEY = "735749c9d4d5fd5e6f8cc48ef3ce4532"

    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    
    axios.get(URL)
    .then(({data}) => setWeather(data))
    .catch((err) => console.log(err))
  }
  
  useEffect(() => {

    navigator.geolocation.getCurrentPosition(success)
  }, [])

  
  return (
    <main className= {`min-h-screen text-white grid grid-rows-[1fr_3fr] place-content-center font-principal-font p-2 l${weather?.weather[0].icon} bg-cover`}>
  
      {
        <Input setWeather = {setWeather}/> 
      }

      {
        weather? <Weather weather = {weather}/> : <Loader />
       
      }


    </main>
  )
}

export default App
