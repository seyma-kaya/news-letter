import React, { Component } from "react";
import MiniGame from "./components/minigame1.js";
import Favorites from "./components/favorites.js";
import Info from "./components/info.js";
import background from "./img/background.jpg";
import "./style/App.css";

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
    };

    return (
      <>
        <div style={backgroundStyle} />
        <div style={contentStyle}>
          <div className="page-container">

            <section className="ui-card ui-card--wide">
              <Info />
            </section>

            <div className="row g-5 mt-0">
              <div className="col-12 col-md-6">
                <section className="ui-card ui-card--half">
                  <Favorites />
                </section>
              </div>
              <div className="col-12 col-md-6">
                <section className="ui-card ui-card--half">
                  <MiniGame />
                </section>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
