function drawGame(){


background(220);
  player.show();
  player.move();

  for (let e of enemies){
     e.move();
     e.show();

      if (player.hits(e)){
        console.log("u suck");
        //noLoop();
        player = !immovable;
        imageMode(CENTER);
        image(gameOverIcon,xPos,yPos);
        image(tryAgainIcon,xPos+50,yPos+100);
      }
  }

  
   bar1.show();
   bar1.move();
  bar = createSprite(50,50,100,150);
   //  player.collide(bar1);
  //  }

  enemy1.show();
  enemy1.move();

  //BUTTON SETTINGS 
  if ( 
    mouseX > xPos+50 - buttonSizeX && //syncing mouse with button settings
    mouseX < xPos+100 + buttonSizeX &&
    mouseY > yPos+50 - buttonSizeY &&
    mouseY < yPos +100 +buttonSizeY
  ) {
    overButton = true;
    if (!locked) { //if mouse scrolls past buttons, WHITE RECTS show up in back
      ellipseMode(CENTER);
      fill(255);
      rect(xPos+50,yPos+100,buttonSizeX+10,buttonSizeY+10);
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
}