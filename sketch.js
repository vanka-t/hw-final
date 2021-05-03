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
// function keyTyped(){

//   if(key === "d"){
//     player.right();
//   }
  
// }

function draw() {
  if(random(1) <0.001){ //bars showing up irregularly -->decimal value = probability of bar showing up
    bars.push(new FloatingBars());
  }

  background(220);
  for (let b of bars){
    // b.move();
     b.show();
     if (player.hits(b)) {
      console.log('game over');
    }
   }

  image(barIcon,width/2,height/2);
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