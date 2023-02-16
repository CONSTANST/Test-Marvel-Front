import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
// import {Link} from "react-router-dom";
import axios from "axios";

const CharacterDetail = () => {
  //   const {id} = useParams();

  // Utilisez l'ID pour récupérer les détails du personnage depuis l'API

  //   return <div style={{color: "red"}}>"hello"</div>;
  // Afficher les détails du personnage
  const {id} = useParams();
  const [character, setCharacter] = useState(null);
  console.log(character);
  //   console.log(useParams());
  //   console.log(id);
  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/character/${id}`
        );
        // console.log(response);
        setCharacter(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCharacter();
  }, []);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{character.name}</h2>
      <p>{character.description}</p>
      <img
        src={character.thumbnail.path + "." + character.thumbnail.extension}
        alt="character"
        style={{
          width: "400px",
          height: "200px",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default CharacterDetail;

// je tombe sur cette erreur maintenant :react_devtools_backend.js:4012 Matched leaf route at location "/characterdetails/5fcf91f4d8a2480017b91453" does not have an element. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.
//L'erreur "No routes matched location" signifie que le router n'a pas trouvé de route correspondant à l'URL demandée. Cela peut être dû à une mauvaise configuration des routes ou à une erreur de typage dans l'URL.

// Dans votre cas, il est possible que l'URL que vous utilisez dans le Link ne corresponde pas exactement à la route que vous avez définie dans votre Router. Assurez-vous que l'URL dans le Link commence exactement par le préfixe de l'URL de la route, qui est généralement défini dans la balise Router.

// Par exemple, si vous avez défini la route pour CharacterDetail comme suit :

// php
// Copy code
// <Route path="/characterdetails/:id" component={CharacterDetail} />
// Vous devriez utiliser l'URL suivante dans votre Link pour accéder à la page de détails du personnage correspondant à l'ID donné :

// php
// Copy code
// <Link key={character._id} to={`/characterdetails/${character._id}`}>
// Assurez-vous également que la valeur de character._id est correcte et correspond à l'ID attendu dans l'URL.
