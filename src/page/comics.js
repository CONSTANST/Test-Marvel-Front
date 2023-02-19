/// dependencies///
import React, {useEffect, useState} from "react";
// import {Navigate} from "react-router-dom";
import axios from "axios";
import Fuse from "fuse.js";
/// Components///
import ComicsList from "../Componant/ComicsList";
import Limit from "../Componant/limitSelect";
import Pagination from "../Componant/Pagination";

const Comics = ({token}) => {
  const [comics, setComics] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [pageCount, setPageCount] = useState();
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/comics?limit=${limit}&skip=${skip * limit}`
        );
        console.log(response.data);
        console.log(response.data.results);
        setPageCount(response.data);
        setComics(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [limit, skip]);

  // console.log(comics);

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
    setSkip(0);
    // reset skip to 0 when limit changes
    setSearchResults([]);
  };
  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (query.length > 0) {
      setIsSearching(true);
      const fuse = new Fuse(comics, {
        keys: ["name", "title"],
      });
      console.log(fuse);
      const results = fuse.search(query);
      console.log(results);
      setSearchResults(results);
      setIsSearching(false);
    } else setSearchResults([]);
  };
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div style={{backgroundColor: "black"}}>
      <h1 style={{color: "lightgray"}}>Comics</h1>
      <input type="texte" value={searchQuery} onChange={handleSearch} />
      {isSearching && <p> Loading search...</p>}
      {searchResults.length > 0 && (
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
          <ComicsList comics={searchResults.map((result) => result.item)} />
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
      {searchResults.length === 0 && (
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
          <ComicsList comics={comics} />
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

export default Comics;
