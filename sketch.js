

var player; //class objects
var bar1;
var bar2;
var enemy1;
var score;

var barGroup;

var playerSprite; 
var barSprite;
var scoreSprite;

var locked = false; //

var scores = [];
var enemies = [];
var bars = [];
var backBar; //collider hidden behind floating bars

var backgroundIcon;
var scoreIcon;
var playerIcon; //icons
var barIcon;
var enemyIcon;
var gameOverIcon;
var tryAgainIcon;
var cursorIcon;


var points = 0;
var ww = 1000;
var hh = 500;
var xPos = ww/2; //controlling position for all text icons
var yPos = hh/2;
var paused = false; // will be used to pause

var myFont;

//BUTTON SETTINGS
var xPos, yPos, xOffset, yOffset, overButton, locked, buttonSizeX, buttonSizeY; //adjustments for mousePressed for buttonYes/No

buttonSizeX = 180;
buttonSizeY = 100;
xOffset = 0.0;
yOffset = 0.0;


function preload(){
  backgroundIcon = loadImage("images/background.jpg");//icons
  scoreIcon = loadImage("images/shmoney.png"); 
playerIcon = loadImage("images/bikerKween.png"); 
barIcon = loadImage("images/brickwall.jpg");
enemyIcon = loadImage("images/fire.png");
gameOverIcon = loadImage("images/game-over.jpg")
tryAgainIcon = loadImage("images/try-again.jpg")
cursorIcon = loadImage("images/cursorIcon.png")


myFont = loadFont("assets/ARCADECLASSIC.TTF") //font
}

function setup() {
  createCanvas(ww, hh);
 // frameRate(30);
player = new PlayerSettings();
bar1 = new FloatingBars();
enemy1 = new Enemy();
//score = new Score();

scoreIcon.resize(20,20);
cursorIcon.resize(40,40);
playerIcon.resize(75,75);
barIcon.resize(150,50);
enemyIcon.resize(70,70);
gameOverIcon.resize(400,270);
tryAgainIcon.resize(buttonSizeX,buttonSizeY);
console.log("ome");

//CREATING SPRITES
barSprite = createSprite(300,hh-100, 250,80); //floating bars
barSprite.addImage(barIcon);
scoreSprite = createSprite(200,hh-50,20,20); //money icons
scoreSprite.addImage(scoreIcon);

//TEXT SETTINGS
textSize(50);
fill(0);
textFont(myFont);
textAlign(CENTER);

//COLLISION SETTINGS
frameRate(60);
}

function keyPressed(){
  if(keyCode === UP_ARROW){ //&& !paused){ //player can only jump if game is not paused
    player.jump();
  } 
}

function draw() {
 
  if(random(1) <0.01){ //spikes showing up irregularly -->decimal value = probability of bar showing up
    enemies.push(new Enemy());
   // scores.push(new Score());
  }

//DRAW SPRITES
  drawSprite(barSprite); 
  drawSprite(scoreSprite);


image(cursorIcon, mouseX,mouseY); //cursor

if(keyDown(RIGHT_ARROW)) //player commands
player.right();

if(keyDown(LEFT_ARROW)) 
player.left();
fill(0);
}

function mousePressed(){ //restarting game
  if(tryAgainIcon){
    locked = true;
    console.log("oooooooooooh yeaaaaah");
  } else {
    locked = false;
  }

}

  function mouseReleased() {
    locked = false;
  }