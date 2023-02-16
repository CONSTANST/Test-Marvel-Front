import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// pages
import Characters from "./page/characters";
import CharacterDetail from "./page/characterdetail";
import Comics from "./page/comics";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Characters />}></Route>
        <Route path="/comics" element={<Comics />}></Route>
        <Route path="/characterdetails/:id" element={<CharacterDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
