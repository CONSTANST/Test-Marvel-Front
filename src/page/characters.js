import {useEffect, useState} from "react";
// import {Link} from "react-router-dom";
import axios from "axios";
import logo from "../img/logo.png";
import Limit from "../Componant/limitSelect";
import Character from "../Componant/Character";
const Characters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);

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
    // reset skip to 0 when limit changes
  };

  const handleCounterChange = (increment) => {
    const newSkip = skip + increment;
    if (newSkip >= 0) {
      setSkip(newSkip);
    }
  };

  // const handleLimitChange = (event) => {
  //   setLimit(event.target.value);
  //   setSkip(0);
  //   // reset skip to 0 when limit changes
  // };
  // const handleSkipChange = (newSkip) => {
  //   setSkip(newSkip);
  // };

  // // Determine the total number of pages
  // const pageCount = data ? Math.ceil(data.count / limit) : 0;
  // // console.log("limit :", limit);
  // // console.log("data.total :", data.total);
  // console.log(pageCount);

  // // Create an array of page numbers to display
  // const pageNumbers = [...Array(pageCount).keys()].map((num) => num + 1);
  // // console.log(pageNumbers);
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
      <Limit limit={limit} handleLimitChange={handleLimitChange} />

      {/* Pagination buttons */}
      <div>
        <div>
          <button onClick={() => handleCounterChange(-1)}>-</button>
          <span style={{margin: "0 10px"}}>
            Page {Math.ceil(skip / limit) + 1}
          </span>
          <button onClick={() => handleCounterChange(1)}>+</button>
        </div>

        {/* <button onClick={() => handleSkipChange(0)}>1</button>
        <button onClick={() => handleSkipChange(limit)}>2</button>
        {pageNumbers.slice(2, -2).map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => handleSkipChange((pageNum - 1) * limit)}
          >
            {pageNum}
          </button>
        ))}
        {pageCount > 5 && (
          <>
            <span>...</span>
            <button onClick={() => handleSkipChange((pageCount - 1) * limit)}>
              Last
            </button>
          </>
        )} */}
      </div>
      <Character data={data} />
    </div>
  );
};
export default Characters;
