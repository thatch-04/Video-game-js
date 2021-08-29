export function detectCollision(lazer, gameObject) {
    let bottomOfLazer = lazer.position.y + lazer.size;
    let topOfLazer = lazer.position.y;
  
    let topOfObject = gameObject.position.y;
    let leftSideOfObject = gameObject.position.x;
    let rightSideOfObject = gameObject.position.x + gameObject.width;
    let bottomOfObject = gameObject.position.y + gameObject.height;
  
    if (
      bottomOfLazer >= topOfObject &&
      topOfLazer <= bottomOfObject &&
      lazer.position.x >= leftSideOfObject &&
      lazer.position.x + lazer.size <= rightSideOfObject
    ) {
      return true;
    } else {
      return false;
    }
  }