import React, { Component } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Page = ({ offset, color }) => (
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

    <ParallaxLayer offset={offset} speed={3.5}>
      <Navbar />
    </ParallaxLayer>
  </>
);

export default function Scroll() {
  return (
    <Parallax pages={4} className="container" horizontal>
      <Page offset={0} color="red" />
      <Page offset={1} color="red" />
      <Page offset={2} color="purple" />
      <Page offset={3} color="pink" />
    </Parallax>
  );
}
