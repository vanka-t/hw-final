

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

