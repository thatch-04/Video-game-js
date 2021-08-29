export default class Starship {
    constructor(game) {
      this.image = document.getElementById("img_starship");
  
      this.size = 100;
  
      this.maxSpeed = 7;
      this.speed = 0;
  
      this.position = {
        x: game.gameWidth / 2 - this.size / 2,
        y: game.gameHeight - this.size - 10
      };
    }
  
    moveLeft() {
      this.speed = -this.maxSpeed;
    }
  
    moveRight() {
      this.speed = this.maxSpeed;
    }
  
    stop() {
      this.speed = 0;
    }
  
    draw(ctx) {
      ctx.drawImage(
          this.image,
          this.position.x, 
          this.position.y, 
          this.size, 
          this.size);
    }
  
    update(deltaTime) {
      this.position.x += this.speed;
  
      if (this.position.x < 0) this.position.x = 0;
  
      if (this.position.x + this.size > this.gameWidth)
        this.position.x = this.gameWidth - this.size;
    }
  }