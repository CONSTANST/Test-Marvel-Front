import {Link} from "react-router-dom";
const Character = ({data}) => {
  return (
    <div style={{display: "flex", flexWrap: "wrap"}}>
      {data.results.map((character) => {
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
              </article>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default Character;
