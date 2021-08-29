export default class InputHandler {
    constructor(starship, game, lazer) {
      document.addEventListener("keydown", event => {
        switch (event.keyCode) {
          case 37:
            starship.moveLeft();
            break;
  
          case 39:
            starship.moveRight();
            break;
        
          case 38:
            lazer.fire();
            break; 
  
          case 27:
            game.togglePause();
            break;
  
          case 32:
            game.start();
            break; 
        }
      });
  
      document.addEventListener("keyup", event => {
        switch (event.keyCode) {
          case 37:
            if (starship.speed < 0) starship.stop();
            break;
  
          case 39:
            if (starship.speed > 0) starship.stop();
            break;
        }
      });
    }
  }