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
tryAgainIcon.resize(200,120);
console.log("ome");
tryAgainIcon.mousePressed(yay);


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

// function mousePressed(){
//   if(tryAgainIcon){
//     console.log("yay");
//   }
// }

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
        image(tryAgainIcon,xPos+50,yPos+100);
      }
  }



  // bar1.make();

  
   bar1.show();
   bar1.move();
  //bar = createSprite(50,50,100,150);
   //  player.collide(bar1);
  //  }



  enemy1.show();
  enemy1.move();

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