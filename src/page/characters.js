import {useEffect, useState} from "react";
// import {Link} from "react-router-dom";
import axios from "axios";
import logo from "../img/logo.png";
import Limit from "../Componant/limitSelect";
import Character from "../Componant/Character";
import Pagination from "../Componant/Pagination";
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
        <Pagination
          limit={limit}
          data={data}
          currentPage={skip}
          setCurrentPage={setSkip}
        />
      </div>
      <Character data={data} />
      <div>
        <Pagination
          limit={limit}
          data={data}
          currentPage={skip}
          setCurrentPage={setSkip}
        />
      </div>
    </div>
  );
};
export default Characters;
