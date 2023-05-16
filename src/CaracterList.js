import React from "react";

export const CaracterList = (character) => {
  return (
    <div className="character">
     {character.character?.map(element => {
      return(
        <div key={element.id}>
        <img src={element.image} alt="" />
     <h2>${element.name}</h2>
     <div>
       <p>${element.species}</p>
       <p className={element.status}></p>
     </div>
     <a href={element.id}>Ver Detalle</a>
       </div>
      )
     })}
    </div>
  );
};