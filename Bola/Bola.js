/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bola extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("bola", "./Bola/costumes/bola.png", { x: 203, y: 153 })
    ];

    this.sounds = [
      new Sound("campione2000", "./Bola/sounds/campione2000.wav"),
      new Sound("somdegol", "./Bola/sounds/somdegol.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked6)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.golstimeazul = 0;
    this.stage.vars.golstimevermelho = 0;
    yield* this.playSoundUntilDone("campione2000");
    this.goto(2, 0);
    this.direction = 45;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.move(5);
      this.stage.vars.posicaodabola = this.y - 40;
      /* TODO: Implement motion_ifonedgebounce */ null;
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.touching(this.sprites["Jogadorestimeazul2"].andClones())) {
        this.direction = this.direction * -1;
      } else {
        this.direction = this.direction;
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      if (this.touching(this.sprites["Balizaesq"].andClones())) {
        if (this.compare(this.y, 24) < 0) {
          if (this.compare(this.y, -19) > 0) {
            if (this.compare(this.x, 4) < 0) {
              this.stage.vars.golstimevermelho++;
              yield* this.startSound("somdegol");
              this.goto(2, 0);
            }
          }
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked5() {
    while (true) {
      if (this.touching(this.sprites["Jogadorestimevermelho2"].andClones())) {
        this.direction = this.direction * -1;
      } else {
        this.direction = this.direction;
      }
      yield;
    }
  }

  *whenGreenFlagClicked6() {
    while (true) {
      if (this.touching(this.sprites["Balizadir"].andClones())) {
        if (this.compare(this.y, 24) < 0) {
          if (this.compare(this.y, -19) > 0) {
            if (this.compare(this.x, 4) > 0) {
              this.stage.vars.golstimeazul++;
              yield* this.startSound("somdegol");
              this.goto(2, 0);
            }
          }
        }
      }
      yield;
    }
  }
}
