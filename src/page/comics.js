import React, {useEffect, useState} from "react";
import axios from "axios";

const Comics = () => {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchComics = async () => {
      try {
        const response = await axios.get("http://localhost:3000/comics");
        // console.log(response.data.results);
        setComics(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchComics();
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div style={{backgroundColor: "black"}}>
      <h1 style={{color: "lightgray"}}>Comics</h1>
      <div style={{display: "flex", flexWrap: "wrap"}}>
        {comics
          .sort((a, b) => a.title.localeCompare(b.title))
          .map((comic) => (
            <div key={comic._id} style={{flex: "20%", margin: "0 50px 50px 0"}}>
              <h2 style={{color: "lightgray"}}>{comic.title}</h2>
              <img
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                alt={comic.title}
                style={{
                  width: "400px",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <p key={comic._id} style={{color: "lightgray"}}>
                {comic.description}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Comics;
