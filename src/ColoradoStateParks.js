import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import { trees, wildlife } from "./parks/RockyMountain";


function ColoradoStateParks() {
  howManyParks(); // => "42 parks!
  console.log(trees);

  return (
    <div id="root"> 
  <h1>Colorado State Parks!</h1>
  <MesaVerde />
  </div>
  );
}
export default ColoradoStateParks