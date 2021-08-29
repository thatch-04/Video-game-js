import Alien from "/src/alien";

export function buildLevel(game, level) {
    let aliens = [];
  
    level.forEach((row, rowIndex) => {
      row.forEach((alien, alienIndex) => {
        if (alien === 1) {
          let position = {
            x: 80 * alienIndex,
            y: 75 + 50 * rowIndex
          };
          aliens.push(new Alien(game, position));
        }
      });
    });
  
    return aliens;
  }
  
  export const level1 = [
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]
  ];
  
  export const level2 = [
    [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ];
  