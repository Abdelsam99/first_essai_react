import React from "react";

export default function Cars({children, color, year}) {
    // console.log(props);
  return (
    <div
      style={{
        backgroundColor: "pink",
        width: "400px",
        padding: "10px",
        margin: "5px auto",
      }}
    >
      {children ? <p>Marque : {children} </p> : <p>Marque : Rien </p> }
      {color ? <p>Couleur : {color} </p> : <p>Couleur : Néan </p> }
      Année: {year}
      
    </div>
  );
}
