import { detectCollision } from "./collisionDetection";

export default class Lazer {
  constructor(game) {
    this.image = document.getElementById("img_lazer");

    this.width = 5;
    this.height = 20;    
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.game = game;
    this.reset();
  }

  reset() {
    this.position = {
        x: this.gameWidth / 2 - this.width / 2,
        y: this.gameHeight - this.height - 10
      };  
    this.speed = { x: 0, y: 10 };
  }

  draw(ctx) {
    ctx.fillStyle = "000";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    // wall on left or right
    if (this.position.x + this.width > this.gameWidth || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }

    // bottom of game
    if (this.position.y + this.width > this.gameHeight) {
      this.game.lives--;
      this.reset();
    } 

    if (detectCollision(this, this.game.starship)) {
      this.speed.y = -this.speed.y;
      this.position.y = this.game.starship.position.y - this.width;
    }
  }
}