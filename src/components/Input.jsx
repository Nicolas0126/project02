import axios from "axios";

const Input = ({ setWeather }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const cityTemp = e.target.cityName.value;
    const API_KEY = "735749c9d4d5fd5e6f8cc48ef3ce4532";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityTemp}&appid=${API_KEY}`;
    console.log(URL);

    axios
      .get(URL)
      .then(({ data }) => setWeather(data))
      .catch((err) => console.log(err));
  };

  return (
    <section className="text-black m-auto ">
      <form className="flex gap-3" onSubmit={handleSubmit}>
        <input className="bg-white/80 border-2 border-black px-7 rounded-3xl " id="cityName" type="text" placeholder="Enter your City"/>
        <button className="bg-white/80 border-2 border-black p-2 rounded-lg">Search</button>
      </form>
    </section>
  );
};
export default Input;
