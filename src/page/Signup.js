import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

import axios from "axios";
const Singup = ({setUser}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const handleSingup = async (event) => {
    event.prenventDefault();
    try {
      const response = await axios.post(`http://localhost:3000/user/signup`, {
        email: email,
        password: password,
        username: userName,
      });
      if (response.data.token) {
        setUser(response.data.token);
        navigate("/");
      } else {
        alert("Une erreur est survenue, veuillez rééssayer");
      }
    } catch (error) {
      if (error.response.status === 409) {
        setErrorMessage("Cet email a déjà un compte");
      }
      console.log(error.message);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        marginTop: "50px",
      }}
    >
      <form onSubmit={handleSingup}>
        <input
          value={userName}
          onChange={(event) => {
            setUserName(event.target.value);
          }}
          type="text"
          placeholder="Nom d'utilisateur"
        />
        <input
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setErrorMessage("");
          }}
          type="email"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          type="password"
          placeholder="Mot de passe"
        />
        <p>{errorMessage}</p>
        <button onSubmit={handleSingup} type="submit">
          S'inscrire
        </button>
      </form>
      <Link to="/login"> Tu as déjà un compte? Connecte-toi!</Link>
    </div>
  );
};
export default Singup;
