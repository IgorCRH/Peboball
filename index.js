

import { Project } from "./index.esm.js";

import Stage from "./Stage/Stage.js";
import Jogadorestimeazul2 from "./Jogadorestimeazul2/Jogadorestimeazul2.js";
import Jogadorestimevermelho2 from "./Jogadorestimevermelho2/Jogadorestimevermelho2.js";
import Bola from "./Bola/Bola.js";
import Balizadir from "./Balizadir/Balizadir.js";
import Balizaesq from "./Balizaesq/Balizaesq.js";
import Cabostimeazul from "./Cabostimeazul/Cabostimeazul.js";
import Cabostimevermelho from "./Cabostimevermelho/Cabostimevermelho.js";
import Timevermelho from "./Timevermelho/Timevermelho.js";
import Timeazul from "./Timeazul/Timeazul.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Jogadorestimeazul2: new Jogadorestimeazul2({
    x: 30,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3
  }),
  Jogadorestimevermelho2: new Jogadorestimevermelho2({
    x: -20,
    y: -22.519214625609692,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 5
  }),
  Bola: new Bola({
    x: -51.03300858899106,
    y: 17.480785374390308,
    direction: -45,
    costumeNumber: 1,
    size: 15,
    visible: true,
    layerOrder: 9
  }),
  Balizadir: new Balizadir({
    x: 0,
    y: 3,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  Balizaesq: new Balizaesq({
    x: 0,
    y: 3,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2
  }),
  Cabostimeazul: new Cabostimeazul({
    x: 3,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 4
  }),
  Cabostimevermelho: new Cabostimevermelho({
    x: 9,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 6
  }),
  Timevermelho: new Timevermelho({
    x: -163,
    y: 171,
    direction: 90,
    costumeNumber: 1,
    size: 30,
    visible: true,
    layerOrder: 7
  }),
  Timeazul: new Timeazul({
    x: 159,
    y: 171,
    direction: 90,
    costumeNumber: 1,
    size: 30,
    visible: true,
    layerOrder: 8
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
