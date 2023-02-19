import "./App.css";
// import {useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import Cookies from "js-cookie";
// pages //
import Header from "./Componant/Header";
//Login/signup//
import Signup from "./page/signup";
import Login from "./page/loging";
//Corps du site //
import Comics from "./page/comics";
import Characters from "./page/characters";
import CharacterDetail from "./page/characterdetail";
import CharacterInComics from "./page/characterInComics";

function App() {
  // const [token, setToken] = useState(Cookies.get("token") || null);

  // const setUser = (token) => {
  //   if (token) {
  //     setToken(token);
  //     Cookies.set("token", token);
  //   } else {
  //     setToken(null);
  //     Cookies.remove("token");
  //   }
  // };

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/user/signup"
          element={
            <Signup
            // setUser={setUser}
            />
          }
        ></Route>
        <Route
          path="/login"
          element={
            <Login
            // setUser={setUser}
            />
          }
        ></Route>
        <Route
          path="/"
          element={
            <Characters
            // token={token}
            />
          }
        ></Route>
        <Route
          path="/comics"
          element={
            <Comics
            // token={token}
            />
          }
        ></Route>
        <Route
          path="/characterdetails/:id"
          element={
            <CharacterDetail
            // token={token}
            />
          }
        />
        <Route
          path="/characterInComics/:id"
          element={
            <CharacterInComics
            // token={token}
            />
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
