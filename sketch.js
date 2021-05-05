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

function preload(){
playerIcon = loadImage("images/smiley.png");
barIcon = loadImage("images/brickwall.jpg");
enemyIcon = loadImage("images/fire.png");

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
console.log("ome");

//bars.push(new FloatingBars());

}

function keyPressed(){
  if(keyCode === UP_ARROW){
    player.jump();
  }
}

function draw() {
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