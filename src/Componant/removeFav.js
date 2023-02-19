const removeFavorite = (id, type) => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || {};
  favorites[type] = favorites[type] || [];
  const index = favorites[type].indexOf(id);
  if (index !== -1) {
    favorites[type].slice(index, 1);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
};
export default removeFavorite;
