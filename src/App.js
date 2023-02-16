import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// pages
import Characters from "./page/characters";
import CharacterDetail from "./page/characterdetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Characters />}></Route>
        <Route path="/characterdetails/:id" element={<CharacterDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
