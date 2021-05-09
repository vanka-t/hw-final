//BUTTON SETTINGS
buttonSizeX = 180;
buttonSizeY = 100;
xOffset = 0.0;
yOffset = 0.0;



function mousePressed() {
    if (overButton) {
      locked = true;
      loop();
      
    } else {
      locked = false;
    }
}
  
    function mouseReleased() {
      locked = false;
    }

