import React from "react";
import { NavLink } from "react-router-dom";

export default function Header({ home }) {
  const selectHome = {
    backgroundColor: home ? "#F0F0F0" : "",
    color: home ? "black" : "white",
    paddingLeft: "25px",
    paddingRight: "25px"
  };

  return (
    <div
      style={{
        paddingRight: "100px",
        paddingLeft: "50px",
        display: "flex",
        backgroundColor: "#1c1c1c",
        color: "white"
      }}
    >
      <NavLink style={selectHome} className="tab" id="home-icon" to="/">
        MyGuitarHub
      </NavLink>

      <nav style={{ display: "flex" }}>
        <NavLink className="tab" id="addGuitar" to="/newguitar">
          New Guitar
        </NavLink>
        <NavLink className="tab" id="addGuitar" to="/guitars">
          Collection
        </NavLink>
        <NavLink className="tab" id="compareGuitar" to="/compare">
          Compare
        </NavLink>
      </nav>
    </div>
  );
}
