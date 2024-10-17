import styles from "./CityCard.module.css";

function CityCard({ city }) {
  const isEmptyCity = Object.keys(city).length === 0;

  return (
    <div className={styles.cityCard}>
      <h1>{city.name}</h1>
      {city.imageUrl && <img src={city.imageUrl} alt={city.name} />}
      <p>{city.description}</p>
      <ul>
        {isEmptyCity ? (
          <p className={styles.emptyMessage}>Выберите город из списка</p>
        ) : (
          city.facts.map((fact, idx) => <li key={idx}>{fact}</li>)
        )}
      </ul>
    </div>
  );
}

export default CityCard;
