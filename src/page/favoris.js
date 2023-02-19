const Favoris = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  return (
    <div>
      <h1>Mes favoris</h1>
      <ul>
        {Object.keys(favorites).map((type) =>
          favorites[type].map((item) => (
            <li key={item.id}>
              <img
                src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                alt={item.name}
              />
              <p>{item.name || item.title}</p>
              <p>{item.description}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
export default Favoris;
