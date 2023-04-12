/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Timeazul extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("timeazul", "./Timeazul/costumes/timeazul.png", {
        x: 400,
        y: 80
      })
    ];

    this.sounds = [];

    this.triggers = [];
  }
}
