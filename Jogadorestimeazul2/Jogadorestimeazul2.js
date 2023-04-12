/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Jogadorestimeazul2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "jogadorestimeazul",
        "./Jogadorestimeazul2/costumes/jogadorestimeazul.png",
        { x: 380, y: 326 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(30, 0);
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.keyPressed("s")) {
        this.y -= 10;
      }
      if (this.keyPressed("w")) {
        this.y += 10;
      }
      yield;
    }
  }
}
