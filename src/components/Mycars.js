import React, { Component } from "react";
import Cars from "./Cars";

export default class Mycars extends Component {
//   noCopy = () => {
//     alert("Ne pas copier le paragraphe");
//   };
  addStyle = (e) => {
    e.target.classList.toggle("styled");
  };
  state={
    voiture: [
        {'name': 'Ford', 'color': 'red', 'year': 2000},
        {'name': 'Asus', 'color': 'black', 'year': 2010},
        {'name': 'Toyota', 'color': 'green', 'year': 2013},
    ]
  }
  addYear=()=>{
    const addyear=this.state.voiture.map((e)=>e.year -=10)
    this.setState(addyear)
  }
  render() {
    const year=new Date().getFullYear()
    return (
      <div>
        <h1 onMouseOver={this.addStyle}>{this.props.titre}</h1>
        {/* <p onCopy={this.noCopy}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        </p> */}
        <button onClick={this.addYear}>+ 10</button>
        {this.state.voiture.map((e,index)=>{
            return(

                <Cars key={index} year={year - e.year + ' ans'} color={e.color}>{e.name}</Cars>
            )
        })}
        {/* <Cars year={year - this.state.voiture[1].year + ' ans'} color={this.state.voiture[1].color}>{this.state.voiture[1].name}</Cars>
        <Cars year={year - this.state.voiture[2].year + ' ans'} color={this.state.voiture[2].color}>{this.state.voiture[2].name}</Cars> */}
      </div>
    );
  } 
}
