import {useState} from "react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Login = ({setUser}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.prenventDefault();
    try {
      // setIsLoading(true);
      const response = await axios.post(`http://localhost:3000/user/login`, {
        email: email,
        password: password,
      });
      if (response.data.token) {
        setUser(response.data.token);
        // setIsLoading(false);
        navigate("/");
      }
    } catch (error) {
      if (error.response.status === 401 || error.response.status === 400) {
        setErrorMessage("Veuillez renseigner les bons mails & mot de passe");
        // setIsLoading(false);
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
      <h2>Se connecter</h2>
      <form
        onSubmit={handleLogin}
        style={{
          display: "flex",
          width: "300px",
          margin: "auto",
          flexDirection: "column",
        }}
      >
        <input
          onChange={(event) => {
            setEmail(event.target.value);
            setErrorMessage("");
          }}
          type="text"
          placeholder="Adresse email"
        />
        <input
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          type="password"
          placeholder="Mot de passe"
        />
        <p>{errorMessage}</p>
        <button onSubmit={handleLogin} type="submit">
          Se connecter
        </button>
      </form>
      {/*  {isLoading ? ( */}
      {/* //   <>
          
      // ) : (
       
      // )} */}{" "}
      <Link to="/user/signup"> Pas encore de compte? Inscris-toi!</Link>
    </div>
  );
};
export default Login;
