/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Balizaesq extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("balizaesq", "./Balizaesq/costumes/balizaesq.png", {
        x: 480,
        y: 326.5
      })
    ];

    this.sounds = [];

    this.triggers = [];
  }
}
