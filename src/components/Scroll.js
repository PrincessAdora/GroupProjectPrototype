import React from "react";
import Page from "./Page.js";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function Scroll() {
  return (
    <Parallax pages={2} className="container" horizontal>
      <Page offset={0} color="red" />
      <Page offset={1} color="red" />
      {/* <Page offset={2} color="purple" />
      <Page offset={3} color="pink" /> */}
    </Parallax>
  );
}

export default Scroll;
