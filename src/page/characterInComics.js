import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
// import {Link} from "react-router-dom";
import axios from "axios";

const CharacterInComics = () => {
  const {id} = useParams();
  const [comics, setComics] = useState(null);
  console.log(comics);

  //   console.log(useParams());
  //   console.log(id);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/comics/${id}`);
        // console.log(response);
        setComics(response.data);
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
      {comics.results.map((comic) => {
        return (
          <div style={{flex: "20%", margin: "0 50px 50px 0"}}>
            <p key={comic._id} style={{color: "lightgray"}}>
              {comic.title}
            </p>
            <img
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={comic.title}
              style={{
                width: "400px",
                height: "200px",
                objectFit: "contain",
              }}
            />
          </div>
        );
      })}
    </div>
  );
};
export default CharacterInComics;
