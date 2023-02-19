import {useEffect, useState} from "react";
// import {Navigate} from "react-router-dom";
import axios from "axios";
import Fuse from "fuse.js";
// import logo from "../img/logo.png";
import Limit from "../Componant/limitSelect";
import Character from "../Componant/Character";
import Pagination from "../Componant/Pagination";

const Characters = ({token}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // const [searchResults, setSearchResults] = useState([]);
  const [pageCount, setPageCount] = useState([]);
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchQueryResults, setSearchQueryResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/characters?limit=${limit}&skip=${skip * limit}`
        );
        // console.log(response);
        console.log(response.data.results);
        setPageCount(response.data);
        setData(response.data.results);
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
    setSearchQueryResults([]);
  };
  const handleSearch = (event) => {
    const query = event.target.value;
    // console.log(query);
    setSearchQuery(query);
    if (query.length > 0) {
      setIsSearching(true);
      const fuse = new Fuse(data, {
        keys: ["name", "description"],
      });
      console.log(fuse);
      const results = fuse.search(query);
      console.log(results);
      setSearchQueryResults(results);
      setIsSearching(false);
    } else setSearchQueryResults([]);
  };
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div style={{backgroundColor: "black"}}>
      <input
        type="text"
        placeholder="Search characters"
        value={searchQuery}
        onChange={handleSearch}
      />
      {isSearching && <p> Loading search...</p>}
      {searchQueryResults.length > 0 && (
        <div>
          <Limit limit={limit} handleLimitChange={handleLimitChange} />

          <div>
            <Pagination
              limit={limit}
              data={pageCount}
              currentPage={skip}
              setCurrentPage={setSkip}
            />
          </div>
          <Character data={searchQueryResults.map((result) => result.item)} />
          <div>
            <Pagination
              limit={limit}
              data={pageCount}
              currentPage={skip}
              setCurrentPage={setSkip}
            />
          </div>
        </div>
      )}
      {searchQueryResults.length === 0 && (
        <div>
          <Limit limit={limit} handleLimitChange={handleLimitChange} />

          <div>
            <Pagination
              limit={limit}
              data={pageCount}
              currentPage={skip}
              setCurrentPage={setSkip}
            />
          </div>
          <Character data={data} />
          <div>
            <Pagination
              limit={limit}
              data={pageCount}
              currentPage={skip}
              setCurrentPage={setSkip}
            />
          </div>
        </div>
      )}
    </div>
  );
  //   token ? (
  //* Si token alors corps du site
  // ) : (
  //   <Navigate to="/login" />
  // )
};

export default Characters;
