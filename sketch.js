var player;
var bar1;
var bar2;
var enemy1;

var enemies = [];
var bars = [];
var bar;
var backBar; //collider hidden behind floating bars

var playerIcon;
var barIcon;
var enemyIcon;
var gameOverIcon;
var tryAgainIcon;

var ww = 1000;
var hh = 500;
var xPos = ww/2; //controlling position for all text icons
var yPos = hh/2;
var paused = false; // will be used to pause

var myFont;

function preload(){
playerIcon = loadImage("images/smiley.png");
barIcon = loadImage("images/brickwall.jpg");
enemyIcon = loadImage("images/fire.png");
gameOverIcon = loadImage("images/game-over.jpg")
tryAgainIcon = loadImage("images/try-again.jpg")

myFont = loadFont("assets/ARCADECLASSIC.TTF")
}

function setup() {
  createCanvas(ww, hh);
player = new PlayerSettings();
bar1 = new FloatingBars();
enemy1 = new Enemy();
//bar2 = new FloatingBars();

playerIcon.resize(40,40);
barIcon.resize(150,50);
enemyIcon.resize(70,70);
gameOverIcon.resize(400,270);
tryAgainIcon.resize(buttonSizeX,buttonSizeY);
console.log("ome");
//tryAgainIcon.mousePressed(yay);

//TEXT SETTINGS
textSize(50);
fill(0);
textFont(myFont);
textAlign(CENTER);

//bars.push(new FloatingBars());

}

//BUTTON SETTINGS
var xPos, yPos, xOffset, yOffset, overButton, locked, buttonSizeX, buttonSizeY; //adjustments for mousePressed for buttonYes/No

buttonSizeX = 180;
buttonSizeY = 100;
xOffset = 0.0;
yOffset = 0.0;




function keyPressed(){
  if(keyCode === UP_ARROW && !paused){ //player can only jump if game is not paused
    player.jump();
  } else if(keyCode === "p"){
    paused = !paused;
  }
}



function draw() {
  if(random(1) <0.01){ //spikes showing up irregularly -->decimal value = probability of bar showing up
    enemies.push(new Enemy());
  }

  if( !paused ){ //disable controls
//frameCount(0); //?? maybe??
//or return all keycodes to false??
  }



//drawIntro();
// drawChoosePlayer();
// drawConfirmPlayer();
drawGame();

for (let e of enemies){
  e.move();
  e.show();

   if (player.hits(e)){
    player.stop();
     console.log("u suck");
     //noLoop();
    // player = !immovable;
    drawGameOver();

   }
}

image(playerIcon, mouseX,mouseY);

if(keyDown(RIGHT_ARROW))
player.right();

if(keyDown(LEFT_ARROW)) 
player.left();
fill(0);
//push();
}

function mousePressed(){
  if(tryAgainIcon){
    console.log("oooooooooooh yeaaaaah");
  } else {
    locked = false;
  }
}