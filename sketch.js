var player;
var playerIcon;
var floatingBar;


function preload(){
playerIcon = loadImage("images/smiley.png");
}

function setup() {
  createCanvas(900, 500);
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
    this.r = 75; //player size
    this.x = 50;
    this.y = height-this.r;
    this.vy = 0;
    this.gravity = 0.7; //velocity when pulled back to ground
  }

  jump(){
    this.vy = -10; //velocity of jump

  }

  move(){
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r); //player can only go from ground level to 'roof'

  }

  show(){
    image(playerIcon, this.x,this.y,this.r,this.r);
  }
}