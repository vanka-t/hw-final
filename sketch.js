var player;
var playerIcon;

function preload(){
playerIcon = loadImage("images/smiley.png");
}

function setup() {
  createCanvas(400, 400);
player = new PlayerSettings();
playerIcon.resize(40,40);

}

function keyPressed(){
  if(keyCode === UP_ARROW){
    player.jump();
  }
  
}

function draw() {
  background(220);
  player.show();
  player.move();
  fill(0);
  //push();

image(playerIcon, mouseX,mouseY);
// translate(mouseX,mouseY);
// pop();
}


class PlayerSettings{
  constructor(){
    this.r = 50;
    this.x = 50;
    this.y = height-this.r;
    this.vy = 0;
    this.gravity = 0.7;
  }

  jump(){
    this.vy = -10;

  }

  move(){
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r);

  }

  show(){
    rect(this.x,this.y,this.r,this.r);
  }
}