

var player; //class objects
var bar1;
var bar2;
var enemySprite;
var enemyGroup;
var enemy3;
var score;

var barGroup;

var playerSprite; 
var barSprite;
var scoreSprite;

var locked = false; //

var scores = [];
var enemies = [];
var enemies2 = [];
var enemies3 = [];
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

var GRAVITY = 1;
var direction = 90;
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
 enemyGroup = new Group();

//score = new Group();

scoreIcon.resize(20,20);
cursorIcon.resize(40,40);
playerIcon.resize(75,75);
barIcon.resize(150,50);
enemyIcon.resize(70,70);
gameOverIcon.resize(400,270);
tryAgainIcon.resize(buttonSizeX,buttonSizeY);
console.log("ome");

//CREATING SPRITES
barGroup = new Group();
for(var i=0; i<600; i+=10){
  barSprite = createSprite(300,hh-100, 250,80); //floating bars
  barSprite.addImage(barIcon);
  barSprite.setCollider("rectangle", -2, 2, 155,80);
  barSprite.immovable = true;
  barGroup.add(barSprite);
} 

playerSprite = createSprite(50, height-75); //player
playerSprite.addImage(playerIcon);
drawSprite(playerSprite);
playerSprite.position.x = 100


scoreSprite = createSprite(200,hh-50,20,20); //money icons
scoreSprite.addImage(scoreIcon);

for(var i = 0; i<height-100; i+=55) {
  var enemySprite = createSprite(random(150, width), random(0, height));
  enemySprite.addImage(enemyIcon);
 
  enemyGroup.add(enemySprite);
}

//TEXT SETTINGS
textSize(50);
fill(0);
textFont(myFont);
textAlign(CENTER);

//COLLISION SETTINGS
frameRate(60);
}



function draw() {
  //STARTUP COMMANDS
  background(backgroundIcon);
  fill(255);
  textSize(35);

//ENEMY FALLING RANDOMLY
  if(random(1) <0.01){ //spikes showing up irregularly -->decimal value = probability of bar showing up
    for(var i = 0; i<enemyGroup.length; i++) {
      var e = enemyGroup[i];
      //moving all the enemies y following a sin function (sinusoid)
      e.position.y += sin(frameCount/10);
    }
  }
  playerSprite.collide(barGroup);
 enemyGroup.overlap(playerSprite, drawGameOver);
  //if enemy + player touch, its game over
//   function drawGameOver(playerSprite, enemySprite){
//     playerSprite.remove();
// points ++;
//   }
  

//DRAW SPRITES
drawSprite(scoreSprite); //referring to points and enemy(?)
drawSprite(playerSprite);
// player.show();
// player.move();
drawSprites(enemyGroup);
playerSprite.velocity.y = 0;
//playerSprite.position.y = height-75;
// if(playerSprite.bounce(barGroup)){
//   playerSprite.velocity.y += GRAVITY;
// }


if(playerSprite.collide(barSprite)) {
  playerSprite.velocity.y = 0;
}

//playerSprite.position.x += 5;
if(keyDown('d')){
  playerSprite.position.x += 5;
} 
if (keyDown('a')){
  playerSprite.position.x -= 5;
} 
if (keyDown('w')){
  //playerSprite.position.y -= 55 + playerSprite.velocity.y;//playerSprite.velocity.y;
  playerSprite.velocity.y -= 7; //goes up
  playerSprite.velocity.y += GRAVITY; //falls
  if (playerSprite.position.y<308){ //restricts to only double jump
    playerSprite.velocity.y += 10;
    playerSprite.position.x += 5; //velocity of jump
  }
  
  // if (keyDown('s')){
  //   playerSprite.velocity.y += 7; //goes down
  // } 

}
console.log(mouseY);

//CALLING ON TEXT
text("Score      " + points, 100,50);

//CURSOR
image(cursorIcon, mouseX,mouseY); 



// for (let e of enemies){ //if player hits spikes, its game over
//   e.move();
//   e.show();
    
//     if (player.hits(e)){
//       player.stop();
//       drawGameOver();
//   }
// }

for(var i=0; i<allSprites.length; i++) {
  var s = allSprites[i];
  if(s.position.x<0) {
    s.position.x = 1;
    s.velocity.x = abs(s.velocity.x);
  }

  if(s.position.x>width) {
    s.position.x = width-1;
    s.velocity.x = -abs(s.velocity.x);
  }

  if(s.position.y<0) {
    s.position.y = 1;
    s.velocity.y = abs(s.velocity.y);
  }

  if(s.position.y>height) {
    s.position.y = height-1;
    s.velocity.y = -abs(s.velocity.y);
  }
}

//PLAYER COMMANDS
if(keyDown(RIGHT_ARROW)) 
player.right();

if(keyDown(LEFT_ARROW)) 
player.left();
fill(0);

if(keyDown( UP_ARROW)) 
player.jump();

}


//RESTARTING GAME
function mousePressed(){ 
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