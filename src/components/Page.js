import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from "./NavBar";
import Bronx from "../images/Inland.png";
import Manhattan from "../images/City.png";
import Brooklyn from "../images/Bridge.png";

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
      {/* <ParallaxLayer offset={offset} speed={1}>
        <div className="text">
          <span>Restaurant Reviews</span>
        </div>
      </ParallaxLayer> */}

      {/*Navbar Parallax layer -- behind all other layers */}

      <ParallaxLayer
        offset={offset}
        speed={3.5}
        style={{ marginTop: "-200px" }}
      >
        <Navbar />
      </ParallaxLayer>

      <ParallaxLayer offset={offset} speed={3.5} style={{ marginTop: "100px" }}>
        <div className="icon1">
          <img src={Bronx} width="100" height="100" alt="" />
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={offset} speed={3.5} style={{ marginTop: "100px" }}>
        <div className="icon2">
          <img src={Manhattan} width="100" height="100" alt="" />
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={offset} speed={3.5} style={{ marginTop: "100px" }}>
        <div className="icon3">
          <img src={Brooklyn} width="100" height="100" alt="" />
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={offset}
        speed={3.5}
        style={{ marginTop: "200px", marginLeft: "-150px" }}
      >
        <div className="button1">
          {/* Bronx Button */}
          <button>BRONX</button>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={offset} speed={3.5} style={{ marginTop: "200px" }}>
        <div className="button2">
          {/* Manhattan Button */}
          <button>MANHATTAN</button>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={offset}
        speed={3.5}
        style={{ marginTop: "200px", marginLeft: "150px" }}
      >
        <div className="button3">
          {/* Brooklyn Button */}
          <button>BROOKLYN</button>
        </div>
      </ParallaxLayer>
    </>
  );
}

export default Page;
