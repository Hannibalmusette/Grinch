import "../App.css";
import React from "react";

function CheckBox({ accept, Accept }) {
  
    return (
      <label>
        <input type="checkbox"
          onChange={() => Accept(!accept)}
        />
      </label>
    );
  }

export default CheckBox;