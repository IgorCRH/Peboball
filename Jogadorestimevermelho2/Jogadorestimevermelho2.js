/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Jogadorestimevermelho2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "jogadorestimevermelho",
        "./Jogadorestimevermelho2/costumes/jogadorestimevermelho.png",
        { x: 341, y: 326 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-20, 0);
  }

  *whenGreenFlagClicked2() {
    while (true) {
      yield* this.glide(0, -20, this.toNumber(this.stage.vars.posicaodabola));
      this.stage.watchers.posicaodabola.visible = false;
      yield;
    }
  }
}
