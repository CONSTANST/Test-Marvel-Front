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
          style={{color: "lightgray"}}
          onClick={() => {
            navigate("/");
          }}
        >
          Personnage
        </button>
        <button
          style={{color: "lightgray"}}
          onClick={() => {
            navigate("/comics");
          }}
        >
          Comics
        </button>
      </div>
    </div>
  );
};

export default Header;
