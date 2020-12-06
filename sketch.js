'use strict';

let state = 'title';
let cnv;
let points = 0;
let w = 600;
let h = 600;
let player;
let coins = [];
let enemy = [];
let playerImg;
let coinImg;
let bgImg;
let enemyImg;
let winImg;
let dieImg;
let bg3Img;


function preload(){
  playerImg = loadImage('image/slime.gif');
  coinImg = loadImage('image/coin.gif');
  enemyImg = loadImage('image/enemy.gif');
  bgImg = loadImage('image/BG.gif');
  winImg = loadImage('image/win.gif');
  dieImg = loadImage('image/die.gif');
  bg3Img = loadImage('image/bg3.gif');
}

function setup(){
cnv =  createCanvas(w, h);

textFont('monospace');
// imageMode(CENTER);
  player = new Player();

  // coins[0] = new Coin();
  coins.push(new Coin());

  enemy.push(new Enemy());
}

function draw() {

  switch (state){
    case'title':
    title();
    cnv.mouseClicked(titleMouseClicked);
    break;
  case 'level 1':
    level1();
    cnv.mouseClicked(level1MouseClicked);
    break;
    case 'level 2':
      level2();
      cnv.mouseClicked(level2MouseClicked);
    break;
    case 'level 3':
      level3();
      cnv.mouseClicked(level3MouseClicked);
    break;
  case 'you win':
  youWin();
  cnv.mouseClicked(youWinMouseClicked);
    break;
    case 'level up1':
     levelUp1();
    cnv.mouseClicked( levelUp1MouseClicked);
      break;
      case 'level up2':
      levelUp2();
      cnv.mouseClicked( levelUp2MouseClicked);
        break;
    case 'you lost':
    youLost();
    cnv.mouseClicked(youLostMouseClicked);
      break;
    default:
    break;
  }


}

function keyPressed(){
  if(keyCode == LEFT_ARROW){
    player.direction = 'left';
  } else if (keyCode == RIGHT_ARROW){
    player.direction = 'right';
}
// else if (keyCode == UP_ARROW){
//   player.direction = 'up'
// } else if (keyCode == DOWN_ARROW){
//   player.direction = 'down'
// }
else if (key = ' '){
  player.direction = 'still';
}
}

function keyReleased(){

    player.direction = 'still';
}

// function mousePressed(){
//   state = 'level 1';
// }


function title() {
  background(bgImg);
  textSize(80);
  fill(255);
  textAlign(CENTER);
  text('RAIN SLIME', w/2, h/5);

  textSize(40);
  text('Click Anywhere To Start', w/2, h/2.8);
  textSize(30);
  // text('Gain 21 points to win', w/2, h/2.3);
  // text('Rain +1 point', w/2.5, h/2.0);
  // text('Missing Rain -1 point', w/1.99, h/1.78);
  // text('Acid Rain -5 points', w/2.1, h/1.6);
  text('CONTROL: LEFT ARROW & RIGHT ARROW', w/2.2, h/1.09);
}

function titleMouseClicked(){
  console.log('canvas is clicked on title page');
  state = 'level 1'
  }


function level1(){
  background(bgImg);

  if (random(1) <= 0.01){
    coins.push(new Coin());
  }
if (random(2) <= 0.01){
    enemy.push(new Enemy());
  }

  player.display();
  player.move();

  for (let i = 0; i < coins.length; i++){
    coins[i].display();
    coins[i].move();

  }


  // coins.forEach(function(coin){
  //   coin.display();
  //   coin.move();
  // })

  // for (let coin of coins){
  //   coin.display();
  //   coin.move();
  // }

  for (let i = coins.length - 1; i >= 0; i--){

  if(dist(player.x, player.y, coins[i].x, coins[i].y) <= (player.r + coins[i].r)/2){
    player.r+= 2;
    points++;

    console.log(points);
    coins.splice(i, 1);
  } else if (coins[i]. y > h){
    coins.splice(i, 1);
      // points--;
    console.log('coin is out of town');

  }
}




for (let i = 0; i < enemy.length; i++){
  enemy[i].display();
  enemy[i].move();
}


for (let i = enemy.length - 1; i >= 0; i--){

if(dist(player.x, player.y, enemy[i].x, enemy[i].y) <= (player.r + enemy[i].r)/2){
  player.r-= 10;
  points-= 5;
  console.log(points);
  enemy.splice(i, 1);
} else if (enemy[i]. y > h){
  enemy.splice(i, 1);
  console.log('enemy is out of town');
}

if(points<=0){
  player.r=50;
}
if(points<=-1){
  state = 'you lost';
  coins = [];
  // enemy = [];
  // enemy.length = 0;
}
if(points>=11){
  state = 'level up1';
  coins = [];
  // enemy = [];
}



}text('points: ' + points, w/7, h - 560);
}

function level1MouseClicked(){
    console.log('points = ' + points);
}

function level2(){
  background(bgImg);

  if (random(1) <= 0.01){
    coins.push(new Coin());
  }
if (random(1) <= 0.01){
    enemy.push(new Enemy());
  }

  player.display();
  player.move();

  for (let i = 0; i < coins.length; i++){
    coins[i].display();
    coins[i].move();

  }


  // coins.forEach(function(coin){
  //   coin.display();
  //   coin.move();
  // })

  // for (let coin of coins){
  //   coin.display();
  //   coin.move();
  // }

  for (let i = coins.length - 1; i >= 0; i--){

  if(dist(player.x, player.y, coins[i].x, coins[i].y) <= (player.r + coins[i].r)/2){
    player.r+= 2;
    points++;

    console.log(points);
    coins.splice(i, 1);
  } else if (coins[i]. y > h){
    coins.splice(i, 1);
    points--;
    console.log('coin is out of town');

  }
}




for (let i = 0; i < enemy.length; i++){
  enemy[i].display();
  enemy[i].move();
}


for (let i = enemy.length - 1; i >= 0; i--){

if(dist(player.x, player.y, enemy[i].x, enemy[i].y) <= (player.r + enemy[i].r)/2){
  player.r-= 10;
  points-= 5;
  console.log(points);
  enemy.splice(i, 1);
} else if (enemy[i]. y > h){
  enemy.splice(i, 1);
  console.log('enemy is out of town');
}

if(points<=0){
  player.r=50;
}
if(points<=-1){
  state = 'you lost';
  coins = [];
  // enemy = [];
  // enemy.length = 0;
}
if(points >= 11){
  state = 'level up2';
  coins = [];
  // enemy = [];
}



}text('points: ' + points, w/7, h - 560);
}

function level2MouseClicked(){
    console.log('points = ' + points);
}

function level3(){
  background(bgImg);

  if (random(1) <= 0.01){
    coins.push(new Coin());
  }
if (random(0.3) <= 0.01){
    enemy.push(new Enemy());
  }

  player.display();
  player.move();

  for (let i = 0; i < coins.length; i++){
    coins[i].display();
    coins[i].move();

  }


  // coins.forEach(function(coin){
  //   coin.display();
  //   coin.move();
  // })

  // for (let coin of coins){
  //   coin.display();
  //   coin.move();
  // }

  for (let i = coins.length - 1; i >= 0; i--){

  if(dist(player.x, player.y, coins[i].x, coins[i].y) <= (player.r + coins[i].r)/2){

    player.r+= 2;

    points++;

    console.log(points);
    coins.splice(i, 1);
  } else if (coins[i]. y > h){
    coins.splice(i, 1);
    points--;

    console.log('coin is out of town');

  }
}




for (let i = 0; i < enemy.length; i++){
  enemy[i].display();
  enemy[i].move();
}


for (let i = enemy.length - 1; i >= 0; i--){

if(dist(player.x, player.y, enemy[i].x, enemy[i].y) <= (player.r + enemy[i].r)/2){

  player.r-= 20;
  points-= 10;
  console.log(points);
  enemy.splice(i, 1);
} else if (enemy[i]. y > h){
  enemy.splice(i, 1);
  console.log('enemy is out of town');
}

if(points<=0){
  player.r=50;
}
if(points <= -1){
  state = 'you lost';
  coins = [];
  // enemy = [];
  // enemy.length = 0;
}
if(points >= 11){
  state = 'you win';
  coins = [];
  // enemy = [];
}



}text('points: ' + points, w/7, h - 560);
}

function level3MouseClicked(){
    console.log('points = ' + points);
}

function levelUp1(){
  background(winImg);
  textSize(80);
  fill(255);
  textAlign(CENTER);
  text('LEVEL TWO', w/2, h/5);

  textSize(30);
  text('click anywhere to start', w/2, h/2.8);

}

function levelUp1MouseClicked(){
  state = 'level 2';
  points = 0;
}

function levelUp2(){
  background(winImg);
  textSize(80);
  fill(255);
  textAlign(CENTER);
  text('LEVEL THREE', w/2, h/5);

  textSize(30);
  text('click anywhere to start', w/2, h/2.8);

}

function levelUp2MouseClicked(){
  state = 'level 3';
  points = 0;
}

function youWin(){
  background(bg3Img);
  textSize(80);
  fill(255);
  textAlign(CENTER);
  text('YOU WIN', w/2, h/5);

  textSize(30);
  text('click anywhere to restart', w/2, h/2.8);

}

function youWinMouseClicked(){
  state = 'title';
  points = 0;
}



function youLost(){
  background(dieImg);
  textSize(80);
  fill(255);
  textAlign(CENTER);
  text('YOU LOST', w/2, h/5);

  textSize(30);
  text('click anywhere to restart', w/2, h/1.02);

}
function youLostMouseClicked(){
  state = 'title';
  points = 0;
}
