import {useEffect, useState} from "react";
import axios from "axios";
import Fuse from "fuse.js";
// import logo from "../img/logo.png";
import Limit from "../Componant/limitSelect";
import Character from "../Componant/Character";
import Pagination from "../Componant/Pagination";

const Characters = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchResults, setSearchResults] = useState([]);
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);
  const [query, setQuery] = useState("");

  const fuse = new Fuse(data, {
    keys: ["name", "description", "comics.items.name"],
    includeScore: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/characters?limit=${limit}&skip=${skip * limit}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [limit, skip]);

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
    setSkip(0);
    setSearchResults([]);
  };

  const handleInputChange = (event) => {
    const {value} = event.target;
    setQuery(value);
    const results = fuse.search(value);
    setSearchResults(results.map((result) => console.log(result)));
  };

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div style={{backgroundColor: "black"}}>
      <Limit limit={limit} handleLimitChange={handleLimitChange} />
      <input
        type="text"
        placeholder="Search characters"
        value={query}
        onChange={handleInputChange}
      />
      <div>
        <Pagination
          limit={limit}
          data={searchResults}
          currentPage={skip}
          setCurrentPage={setSkip}
        />
      </div>
      <Character data={data} />
      <div>
        <Pagination
          limit={limit}
          data={searchResults}
          currentPage={skip}
          setCurrentPage={setSkip}
        />
      </div>
    </div>
  );
};

export default Characters;
