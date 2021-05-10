
var points = 0;

function drawGame(FloatingBars){

background(backgroundIcon);
fill(255);
textSize(35);

drawSprites();
//score.show();
  player.show();
  player.move();

    bar1.show();
    bar1.move();

//  player.collide(bar1);
  //  }

  enemy1.show();
  enemy1.move();

  for (let e of enemies){ //if player hits spikes, its game over
    e.move();
    e.show();
  
     if (player.hits(e)){
      player.stop();
      // player = !immovable;
      drawGameOver();
     }
  }
  

  // for (let s of scores){ // player hits scores, points go up!
  //   s.show();
  
  //    if (player.hits(s)){
  //      s.leave();
  //     // player = !immovable;
  //    points ++;
  //    }
  // }
  player.overlap(collectibles, collect);

//PLAYER CONTROLS (syntax found in p5.play reference examples)

}