// import {useState} from "react";
import {Link} from "react-router-dom";
// import addFavorite from "./addFav";
// import removeFavorite from "./removeFav";
const Character = ({data, search}) => {
  // const [query, setQuery] = useState("");

  // const handleInputChange = (event) => {
  //   const {value} = event.target;
  //   setQuery(value);
  //   search(value);
  // };

  return (
    <div style={{display: "flex", flexWrap: "wrap"}}>
      {/* <input type="text" value={query} onChange={handleInputChange} /> */}
      {data.map((character) => {
        return (
          <div
            key={character._id}
            style={{flex: "20%", margin: "0 50px 50px 0"}}
          >
            <Link key={character._id} to={`/characterdetails/${character._id}`}>
              <article key={character._id}>
                <p style={{color: "lightgray"}}>{character.name}</p>
                <img
                  src={
                    character.thumbnail.path +
                    "." +
                    character.thumbnail.extension
                  }
                  alt="character"
                  style={{
                    width: "400px",
                    height: "200px",
                    objectFit: "contain",
                  }}
                />
                <p tyle={{color: "lightgray"}}> {character.description}</p>
              </article>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default Character;
