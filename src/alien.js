import { detectCollision } from "./collisionDetection";

export default class Alien {
  constructor(game, position) {
    this.image = document.getElementById("img_alien");

    this.game = game;

    this.position = position;
    this.width = 50;
    this.height = 50;

    this.markedForDeletion = false;
  }

  update() {
    if (detectCollision(this.game.lazer, this)) {
      this.game.lazer.speed.y = -this.game.lazer.speed.y;

      this.markedForDeletion = true;
    }
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}