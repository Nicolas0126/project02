import { useState } from "react"
import { kelvinToCelsius, kelvinToFahrenheit } from "../utils/temp"
import './styles/weather.css'

const weatherIcons = {
    '01d': "/icons/01d.svg",
    '01n': "/icons/01n.svg",
    '02d': "/icons/02d.svg",
    '02n': "/icons/02n.svg",
    '03d': "/icons/03.svg",
    '03n': "/icons/03.svg",
    '04d': "/icons/04d.svg",
    '04n': "/icons/04n.svg",
    '09d': "/icons/09.svg",
    '09n': "/icons/09.svg",
    '10d': "/icons/10.svg",
    '10n': "/icons/10.svg",
    '11d': "/icons/11d.svg",
    '11n': "/icons/11n.svg",
    '13d': "/icons/13.svg",
    '13n': "/icons/13.svg",
    '50d': "/icons/50.svg",
    '50n': "/icons/50.svg",
}
    
const Weather = ({weather}) => {

    const [isCelsius, setIsCelsius] = useState(true)

    const toggleIsCelsius = () => {
            setIsCelsius(!isCelsius)
    }

  return (
    <section className="text-center grid  p-5 rounded-2xl items-center grid-rows-[1fr_4fr_3fr]">
        
        <h2 className=" title font-bold text-4xl flex justify-center items-center">{weather?.name}, {weather?.sys.country}</h2>

        <section className="grid gap-4 sm:grid-cols-[1fr_auto]">
        
            <article className="bg-black/60 p-4 rounded-3xl grid grid-cols-2 items-center ">

                <h3 className=" text-2xl col-span-2 capitalize">{weather?.weather[0].description}</h3>

                <span className="text-4xl sm:text-6xl">{isCelsius ? kelvinToCelsius(weather?.main.temp) : kelvinToFahrenheit(weather?.main.temp)}</span>

                <div>
                    <img src={weatherIcons[weather?.weather[0].icon]} alt="" />
                </div> 

            </article>

       
            <section className="bg-black/60 p-2 py-4 rounded-3xl grid grid-cols-3 items-center  sm:grid-cols-1  sm:items-center">

                <article className = 'flex gap-2 m-auto sm:items-center'>
                    <div>
                        <img src="/images/wind.png" alt="" />
                    </div>
                    <span>{weather?.wind.speed} m/s</span>
                </article>

                <article className = 'flex gap-2 m-auto sm:items-center'>
                    <div>
                        <img src="/images/humidity.png" alt="" />
                    </div>
                    <span>{weather?.main.humidity} %</span>
                </article>

                <article className = 'flex gap-2 m-auto sm:items-center'>
                    <div>
                        <img src="/images/pressure.png" alt="" />
                    </div>
                    <span>{weather?.main.humidity} hpa</span>
                </article>

            </section>

        </section>

        <button className= "text-black font-bold bg-white/70 mx-auto my-0 p-2 rounded-lg hover:bg-orange-300 hover:translate-y-1 hover:duration-50 hover:shadow-md hover:shadow-black  " onClick={toggleIsCelsius}>Change °F / °C</button>

    </section>
  )
}
export default Weather