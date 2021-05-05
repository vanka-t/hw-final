var player;
var bar1;
var bar2;
var enemy1;

var enemies = [];
var bars = [];
var bar;

var playerIcon;
var barIcon;
var enemyIcon;
var gameOverIcon;
var tryAgainIcon;

var bx, by, xOffset, yOffset, overButton, locked, overButton2, locked2, buttonSizeX, buttonSizeY; //adjustments for mousePressed for buttonYes/No



function preload(){
playerIcon = loadImage("images/smiley.png");
barIcon = loadImage("images/brickwall.jpg");
enemyIcon = loadImage("images/fire.png");
gameOverIcon = loadImage("images/game-over.jpg")
tryAgainIcon = loadImage("images/try-again.jpg")

}

function setup() {
  createCanvas(900, 500);
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


//bars.push(new FloatingBars());

}

function yay(){
  console.log(yay);
} 

function keyPressed(){
  if(keyCode === UP_ARROW){
    player.jump();
  }
}



function draw() {
  var xPos = width/2; //controlling position for all text icons
  var yPos = height/2;


   if(random(1) <0.01){ //bars showing up irregularly -->decimal value = probability of bar showing up
    enemies.push(new Enemy());
  }
  
  background(220);
  player.show();
  player.move();

  for (let e of enemies){
     e.move();
     e.show();

      if (player.hits(e)){
        console.log("u suck");
        noLoop();
        imageMode(CENTER);
        image(gameOverIcon,xPos,yPos);
        //image(tryAgainIcon,xPos+50,yPos+100);
        image(tryAgainIcon, bx,by);
      }
  }


  
   bar1.show();
   bar1.move();
  //bar = createSprite(50,50,100,150);
   //  player.collide(bar1);
  //  }

  enemy1.show();
  enemy1.move();

  //BUTTON SETTINGS 
  if ( 
    mouseX > bx - buttonSizeX && //syncing mouse with button settings
    mouseX < bx + buttonSizeX &&
    mouseY > by - buttonSizeY &&
    mouseY < by + buttonSizeY
  ) {
    overButton = true;
    if (!locked) { //if mouse scrolls past buttons, WHITE RECTS show up in back
      ellipseMode(CENTER);
      fill(255);
      rect(bx,by,buttonSizeX+10,buttonSizeY+10);
    }
  } else {
    //console.log("ur the 2nd best")
    overButton = false;
  }


//PLAYER CONTROLS (syntax found in p5.play reference examples)
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