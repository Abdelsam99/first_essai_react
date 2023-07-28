import React, { Component } from "react";
import "./App.css";
import Mycars from "./components/Mycars";
class App extends Component {
  state = {
    title: "Mon catalogue Voitures",
  };
  changStateButon = (titre) => {
    this.setState({
      title: titre,
    });
  };
  changState = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  render() {
    return (
      <div className="App">
        <Mycars titre={this.state.title} />
        <button onClick={()=>this.changStateButon("Mon nouveau catalogue")}>Changer le nom en dur</button>
        <input type="text" onChange={this.changState} />
      </div>
    );
  }
}

export default App;
