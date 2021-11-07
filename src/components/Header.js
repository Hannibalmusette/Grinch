import "../App.css";
import React from "react";
import logo from "../grinchsneaky.png";

export default class Header extends React.Component {
    render() {
      return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.props.title}</h1>
          
        </header>
      );
    }
  }