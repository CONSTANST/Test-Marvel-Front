import React, {useEffect, useState} from "react";
import axios from "axios";
import ComicsList from "../Componant/ComicsList";

const Comics = () => {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/comics");
        // console.log(response.data.results);
        setComics(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div style={{backgroundColor: "black"}}>
      <h1 style={{color: "lightgray"}}>Comics</h1>
      <ComicsList comics={comics} />
    </div>
  );
};

export default Comics;
