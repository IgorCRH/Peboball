/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180
      }),
      new Costume("campo", "./Stage/costumes/campo.png", { x: 480, y: 326 })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.posicaodabola = -22.519214625609692;
    this.vars.golstimeazul = 0;
    this.vars.golstimevermelho = 0;

    this.watchers.posicaodabola = new Watcher({
      label: "posicaodabola",
      style: "normal",
      visible: false,
      value: () => this.vars.posicaodabola,
      x: 245,
      y: 175
    });
    this.watchers.golstimeazul = new Watcher({
      label: "golstimeazul",
      style: "large",
      visible: true,
      value: () => this.vars.golstimeazul,
      x: 369,
      y: 180
    });
    this.watchers.golstimevermelho = new Watcher({
      label: "golstimevermelho",
      style: "large",
      visible: true,
      value: () => this.vars.golstimevermelho,
      x: 557,
      y: 180
    });
  }
}
