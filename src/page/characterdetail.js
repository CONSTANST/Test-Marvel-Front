import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
// import {Link} from "react-router-dom";
import axios from "axios";
// import {Navigate} from "react-router-dom";
const CharacterDetail = ({token}) => {
  //   const {id} = useParams();

  //   return <div style={{color: "red"}}>"hello"</div>;
  // Afficher les détails du personnage
  const {id} = useParams();
  const [character, setCharacter] = useState(null);
  const [characterId, setCharacterId] = useState();

  console.log(character);
  //   console.log(useParams());
  //   console.log(id);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/character/${id}`
        );
        // console.log(response);
        setCharacter(response.data);
        setCharacterId(response.data._id);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);
  // console.log(character.comics);
  console.log(character);
  console.log(characterId);
  // const characterId = character._id;
  return !character ? (
    <div>Loading...</div>
  ) : (
    <div style={{display: "flex", backgroundColor: "black"}}>
      <div>
        <h2 style={{color: "lightgray"}}>{character.name}</h2>
        <ul>
          {character.comics.map((comic, index) => (
            <Link key={index} to={`/characterInComics/${characterId}`}>
              <li style={{color: "lightgray"}} key={comic}>
                {comic}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      <p style={{color: "lightgray"}}>{character.description}</p>

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
  //   token ? (
  //* Si token alors corps du site
  // ) : (
  //   <Navigate to="/login" />
  // );
};

export default CharacterDetail;
