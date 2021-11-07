import "../App.css";
import React from "react";
import logo from "../grinchsneaky.png";

function Header({ dontgoback, sayYes, }) {

      return (
        <header
          className="App-header"
          onClick={() => sayYes(false)}
        >
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Site officiel de la mairie de Whoville</h1>
          
        </header>
      );
    }

export default Header;