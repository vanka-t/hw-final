var player;
var bar1;
var bar2;
var playerIcon;
var barIcon;
var bars = [];
var bar;

function preload(){
playerIcon = loadImage("images/smiley.png");
barIcon = loadImage("images/brickwall.jpg");

}

function setup() {
  createCanvas(900, 500);
player = new PlayerSettings();
bar1 = new FloatingBars();
//bar2 = new FloatingBars();

playerIcon.resize(40,40);
barIcon.resize(150,50);

//bars.push(new FloatingBars());

}

function keyPressed(){
  if(keyCode === UP_ARROW){
    player.jump();
  }
}

function draw() {
  // if(random(1) <0.001){ //bars showing up irregularly -->decimal value = probability of bar showing up
  //   bars.push(new FloatingBars());
  // }
  

  background(220);
  // for (let b of bars){
  //   // b.move();
  //    b.show();
  bar1.show();
  //bar2.show();

     
   //  player.collide(bar1);
  //  }

  player.show();
  player.move();

  
//player basic controls (syntax found in p5.play reference examples)
  if(keyDown(RIGHT_ARROW))
  player.right();

  if(keyDown(LEFT_ARROW)) 
  player.left();
  fill(0);
  //push();
 


image(playerIcon, mouseX,mouseY);
// translate(mouseX,mouseY);
// pop();
}