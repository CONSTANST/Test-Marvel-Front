import React from "react";
import {useNavigate} from "react-router-dom";
// logo//
import logo from "../img/logo.png";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div
      className="header-container"
      style={{display: "flex", backgroundColor: "black"}}
    >
      <div
        onClick={() => {
          navigate("/");
        }}
      >
        <img
          src={logo}
          alt="logo marvel"
          style={{
            width: "400px",
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>
      <div>
        <button
          style={{color: "black"}}
          onClick={() => {
            navigate("/");
          }}
        >
          Personnage
        </button>
        <button
          style={{color: "black"}}
          onClick={() => {
            navigate("/comics");
          }}
        >
          Comics
        </button>
        <button
          style={{color: "black"}}
          onClick={() => {
            navigate("/favoris");
          }}
        >
          Favoris
        </button>
        <button
          style={{color: "black"}}
          onClick={() => {
            navigate("/user/signup");
          }}
        >
          S'enregistrer
        </button>
        <button
          style={{color: "black"}}
          onClick={() => {
            navigate("/login");
          }}
        >
          Se connecter
        </button>
      </div>
    </div>
  );
};

export default Header;
