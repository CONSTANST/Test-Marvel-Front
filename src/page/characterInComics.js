import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import addFavorite from "../Componant/addFav";
import removeFavorite from "../Componant/removeFav";
// import {Link} from "react-router-dom";
import axios from "axios";
// import {Navigate} from "react-router-dom";

const CharacterInComics = ({token}) => {
  const {id} = useParams();
  const [comics, setComics] = useState(null);
  // console.log(characterId);
  // console.log(comics);
  // console.log(useParams());
  // console.log(id);
  // console.log(comic);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/comics/${id}`);
        // console.log(response);
        console.log(response.data);
        setComics(response.data.comics);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);
  //   const result = comics.results.map((comic) => {
  //     console.log(comic); // affiche chaque élément de results dans la console
  //     return comic; // retourne l'élément pour stockage dans result
  //   });
  //   console.log(result); // affiche le tableau complet dans la console
  // Affiche les comics s'ils sont disponibles, sinon affiche un message de chargement

  // Si les comics sont disponibles, créez un élément pour chaque résultat

  return !comics ? (
    <p>Loading...</p>
  ) : (
    <div style={{display: "flex", flexWrap: "wrap", backgroundColor: "black"}}>
      {comics.map((comic) => {
        return (
          <div key={comic._id} style={{flex: "20%", margin: "0 50px 50px 0"}}>
            <p style={{color: "lightgray"}}>{comic.title}</p>
            <img
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={comic.title}
              style={{
                width: "400px",
                height: "200px",
                objectFit: "contain",
              }}
            />
            <p style={{color: "lightgray"}}>{comic.description}</p>
            <button onClick={addFavorite}> Ajouter au favoris?</button>
            <button onClick={removeFavorite}> Retirer des favoris</button>
          </div>
        );
      })}
    </div>
  );
  //   token ? (
  //* Si token alors corps du site
  // ) : (
  //   <Navigate to="/login" />
  // )
};
export default CharacterInComics;
