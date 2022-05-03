import styles from "./styles.css";
import React, { Component } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from "./components/NavBar";
import Footer from "./components/footer";
import Scroll from "./components/Scroll";
import { render } from "react-dom";
// import { IParallax } from "@react-spring/web";
// import { animated, useSpring } from "react-spring";

// const Page = ({ offset, color }) => (
//   <>
//     {/* add reusable layers here as Page component*/}

//     {/*Background Parallax layer -- behind all other layers */}
//     <ParallaxLayer offset={offset} speed={1}>
//       <div className="background"></div>
//     </ParallaxLayer>

//     {/*Color Parallax Layer -- over background layer */}
//     <ParallaxLayer offset={offset} speed={2.1}>
//       <div className={`shape ${color}`} />
//     </ParallaxLayer>

//     {/*Text Parallax Layer -- over color and backgronund layers */}
//     <ParallaxLayer offset={offset} speed={1}>
//       <div className="text">
//         <span>Restaurant Reviews</span>
//       </div>
//     </ParallaxLayer>

//     {/*Navbar Parallax layer -- behind all other layers */}

//     <ParallaxLayer offset={offset} speed={3.5}>
//       <Navbar />
//     </ParallaxLayer>
//   </>
// );

class App extends Component {
  /* your return here to call what is shown on the page*/
  constructor(props) {
    super(props);
    this.state = {
      // Add data state here
      data: []
    };
  }

  // Code your API request here
  componentDidMount = () => {
    fetch(
      "https://data.cityofnewyork.us/resource/43nn-pn8j.json?$$app_token=Ee7bibJxma3jcUJjogz19BnXK"
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data: data });
        console.log(this.state.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  render() {
    return (
      <div>
        <Scroll />
        {/* PUT API RESPONSE DATA HERE */}
        <section className="list">
          {this.state.data.map((application) => (
            <li>
              {application.boro}:{application.building}
            </li>
          ))}
        </section>
      </div>
    );
  }
}

export default App;
