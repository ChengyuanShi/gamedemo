
class Enemy {
  constructor(){
    this.r = 40;
    this.x = random(w);
    this.y = 0 - this.r;
  }

  display(){
        image(enemyImg, this.x, this.y, this.r, this.r);
    // rect(this.x, this.y, this.r, this.r);
  }

  move(){
    this.y++;
  }
}
