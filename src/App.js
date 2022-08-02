import React from "react";
import Header from "./Components/Header";
import "./Components/search.css";
import "./app.css";
import Cards from "./Components/Flags";

function App() {
  const [countries, setCountries] = React.useState([]);

  const [value, setValue] = React.useState([]);

  const [region, setRegion] = React.useState([])

  React.useEffect(() => {
    if (value.length) {
      fetch(`https://restcountries.com/v3.1/name/${value}`)
        .then((res) => res.json())
        .then((data) => setCountries(data))
        .catch((err) => console.log(err));
    } if(region.length){
      fetch(`https://restcountries.com/v3.1/region/${region}`)
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.log(err))
    }
    else {
      fetch(`https://restcountries.com/v3.1/all`)
        .then((res) => res.json())
        .then((data) => setCountries(data))
        .catch((err) => console.log(err));
    }
  }, [ region , value ]);

  return (
    <div className="App">
      <Header />
      <div className="search-wrapper search container">
        <input
          onKeyUp={(evt) => {
            if (evt.code === "Enter") {
              setValue(evt.target.value);
              evt.target.value = ""
            }
          }}
          className="search__input"
          type="search"
          placeholder="Search for a country…"
        />
        <select onChange={(evt) => {
          if(evt.value === countries.region) {
            setRegion(evt.target.value)
          }
        }} defaultValue="default" className="search__select">
          <option defaultValue="default">
            Filter By Region
          </option>
          <option defaultValue="Africa">Africa</option>
          <option defaultValue="America">America</option>
          <option defaultValue="Asia">Asia</option>
          <option defaultValue="Europe">Europe</option>
          <option defaultValue="Oceania">Oceania</option>
        </select>
      </div>
      <div className="container">
        <ul className="list">
          {countries.map((el) => (
            <Cards
              key={el.name.official}
              img={el.flags.png}
              title={el.name.common}
              pop={el.population}
              region={el.region}
              cap={el.capital}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
