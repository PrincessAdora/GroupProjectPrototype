import React from "react";
import Bronx from "../images/Inland.png";
import Manhattan from "../images/City.png";
import Brooklyn from "../images/Bridge.png";

function Icons() {
  return (
    <div className="icons">
      <img src={Bronx} width="100" height="100" alt="" />
      <img src={Manhattan} width="100" height="100" alt="" />
      <img src={Brooklyn} width="100" height="100" alt="" />
    </div>
  );
}

export default Icons;
