import "./Header.css";
import React from "react";

const Header = () => {
  return (
    <div className="ui padded segment title-row">
      <img className="ui tiny image item" src="https://dodo.ac/np/images/7/78/Biskit_NH.png" alt="Biskit"></img>
      <h1 className="ui green header item" id="header-title">
          Animal Crossing Events
      </h1>
      <img className="ui tiny image item" src="https://dodo.ac/np/images/9/91/Fauna_NH.png" alt="Fauna"></img>
    </div>
  );
};

export default Header;