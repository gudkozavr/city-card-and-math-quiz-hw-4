import styles from "./CitySelector.module.css";

export default function CitySelector({ citiesData, setCity }) {
  function handleChange(e) {
    setCity(citiesData[e.target.value]);
  }

  return (
    <div className={styles.div}>
      <h1>Cities:</h1>

      <select onChange={handleChange} name="" id="">
        <option value=""></option>
        {citiesData.map((city, idx) => (
          <option key={city.name} value={idx}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
}
