const addFavorite = (id, type) => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || {};
  favorites[type] = favorites[type] || [];
  if (!favorites[type].includes(id)) {
    favorites[type].push(id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
};
export default addFavorite;
