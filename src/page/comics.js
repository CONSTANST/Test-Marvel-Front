import React, {useEffect, useState} from "react";
import axios from "axios";
import ComicsList from "../Componant/ComicsList";
import Limit from "../Componant/limitSelect";
import Pagination from "../Componant/Pagination";

const Comics = () => {
  const [comics, setComics] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [pageCount, setPageCount] = useState();

  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/comics?limit=${limit}&skip=${skip * limit}`
        );
        // console.log(response.data.results);
        setPageCount(response.data);
        setComics(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [limit, skip]);
  console.log(comics);
  const handleLimitChange = (event) => {
    setLimit(event.target.value);
    setSkip(0);
    // reset skip to 0 when limit changes
  };

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div style={{backgroundColor: "black"}}>
      <h1 style={{color: "lightgray"}}>Comics</h1>
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
  );
};

export default Comics;
