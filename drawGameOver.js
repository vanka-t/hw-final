function drawGameOver() {
 //NOTES: keep this page static by disabling player motion
 player.stop();
 
    imageMode(CENTER);
    image(gameOverIcon,xPos,yPos);
    imageMode(CORNER);
    image(tryAgainIcon,xPos+50,yPos+100);
    //insert final banner here and then connecting buttons to pages as accordingly
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
      noStroke();
      rect(xPos+50,yPos+100,buttonSizeX+10,buttonSizeY+10,100);
    }
  } else {
    //console.log("ur the 2nd best")
    overButton = false;
  }

}