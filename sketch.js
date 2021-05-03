var player;
var bar1;
var playerIcon;
var barIcon;
var bars = [];


function preload(){
playerIcon = loadImage("images/smiley.png");
barIcon = loadImage("images/brickwall.jpg");

}

function setup() {
  createCanvas(900, 500);
player = new PlayerSettings();
//bar1 = new FloatingBars();
playerIcon.resize(40,40);
barIcon.resize(150,50);

}

function keyPressed(){
  if(keyCode === UP_ARROW){
    player.jump();
  }
  
}

function draw() {
  if(random(1) <0.001){ //bars showing up irregularly -->decimal value = probability of bar showing up
    bars.push(new FloatingBars());
  }

  background(220);
  image(barIcon,width/2,height/2);
  player.show();
  player.move();
  fill(0);
  //push();
 
  for (let b of bars){
   // b.move();
    b.show();
  }

image(playerIcon, mouseX,mouseY);
// translate(mouseX,mouseY);
// pop();
}