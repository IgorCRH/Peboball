/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Cabostimeazul extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "cabostimeazul",
        "./Cabostimeazul/costumes/cabostimeazul.png",
        { x: 480, y: 326.5 }
      )
    ];

    this.sounds = [];

    this.triggers = [];
  }
}
