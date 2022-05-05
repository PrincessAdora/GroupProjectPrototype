import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from "./NavBar";

function Page({ offset, color }) {
  return (
    <>
      {/* add reusable layers here as Page component*/}

      {/*Background Parallax layer -- behind all other layers */}
      <ParallaxLayer offset={offset} speed={1}>
        <div className="background"></div>
      </ParallaxLayer>

      {/*Color Parallax Layer -- over background layer */}
      <ParallaxLayer offset={offset} speed={2.1}>
        <div className={`shape ${color}`} />
      </ParallaxLayer>

      {/*Text Parallax Layer -- over color and backgronund layers */}
      <ParallaxLayer offset={offset} speed={1}>
        <div className="text">
          <span>Restaurant Reviews</span>
        </div>
      </ParallaxLayer>

      {/*Navbar Parallax layer -- behind all other layers */}

      <ParallaxLayer
        offset={offset}
        speed={3.5}
        style={{ marginTop: "-200px" }}
      >
        <Navbar />
      </ParallaxLayer>
    </>
  );
}

export default Page;
