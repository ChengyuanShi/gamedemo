
class Player {
  constructor(){
    this.r = 70;
    this.x = w/2;
    this.y = h/1.08 - this.r;
    this.speed = 9;
    this.direction = 'still';
    }

  display(){
  image(playerImg, this.x, this.y, this.r, this.r);
    // rect(this.x, this.y, this.r, this.r);
  }

  move(){

    switch (this.direction){
      case 'still':
      break;

      case 'right':
        if (this.x < w - this.r/2){
      this.x += this.speed;
    }
      break;
      case 'left':
      if (this.x -this.r/2 > 0){
      this.x -= this.speed;
    }
      break;
      default:
      break;

    }
  }
}
