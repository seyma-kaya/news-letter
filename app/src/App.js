import React, { Component } from "react";
import MiniGame from "./components/minigame1.js";
import background from "./img/background1.jpg";

class App extends Component {
  render() {
    const backgroundStyle = {
      position: "fixed",
      inset: 0,
      backgroundImage: `url(${background})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      zIndex: 0,
      pointerEvents: "none",
    };

    const contentStyle = {
      position: "relative",
      zIndex: 1,
      minHeight: "100vh",
      fontSize: "50px",
    };

    return (
      <>
        <div style={backgroundStyle} />
        <div style={contentStyle}>
          <MiniGame />
        </div>
      </>
    );
  }
}

export default App;
