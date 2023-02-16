import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import logo from "../img/logo.png";

const Characters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [limit, setLimit] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/characters");
        // console.log(response.data)
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [limit]);
  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div style={{backgroundColor: "black"}}>
      <img
        src={logo}
        alt="logo marvel"
        style={{
          width: "400px",
          maxWidth: "100%",
          height: "auto",
        }}
      />
      <label htmlFor="limit-select" style={{color: "lightgray"}}>
        Characters per page:
      </label>
      <select id="limit-select" value={limit} onChange={handleLimitChange}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      <div style={{display: "flex", flexWrap: "wrap"}}>
        {data.results.map((character) => {
          return (
            <div
              key={character._id}
              style={{flex: "20%", margin: "0 50px 50px 0"}}
            >
              <Link
                key={character._id}
                to={`/characterdetails/${character._id}`}
              >
                <article key={character._id}>
                  <p>{character.name}</p>
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
                      objectFit: "cover",
                    }}
                  />
                </article>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Characters;
