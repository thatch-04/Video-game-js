export default class Starship {
    constructor(game) {
      this.image = document.getElementById("img_starship");
      this.gameWidth = game.gameWidth;
  
      this.height = 75;
      this.width = 75;
  
      this.maxSpeed = 7;
      this.speed = 0;
  
      this.position = {
        x: game.gameWidth / 2 - this.width / 2,
        y: game.gameHeight - this.height - 10
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
          this.height, 
          this.width);
    }
  
    update(deltaTime) {
      this.position.x += this.speed;
  
      if (this.position.x < 0) this.position.x = 0;
  
      if (this.position.x + this.width > this.gameWidth)
        this.position.x = this.gameWidth - this.width;
    }
  }