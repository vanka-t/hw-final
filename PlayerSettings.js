class PlayerSettings{
    constructor(){
      this.r = 75; //player size
      this.x = 50;
      this.y = height-this.r;
      this.vy = 0;
      this.gravity = 0.7; //velocity when pulled back to ground
    }
  
    jump(){
        if (this.y>height-200){ //restricts to only double jump
            this.vy = -10; //velocity of jump
        }
     
  
    }

    hits(bar){
        return collideRectRect(this.x,this.y,this.r,this.r,bar.x,bar.y,bar.r,bar.r);
    }
  
    move(){
      this.y += this.vy;
      this.vy += this.gravity;
      this.y = constrain(this.y, 0, height - this.r); //player can only go from ground level to 'roof'
      this.x = constrain(this.x, 0, width); //player can only go from ground level to 'roof'
  
    }

    right(){
        this.x += 5;
    }

    left(){
        this.x -= 5;
    }
  
    show(){
      image(playerIcon, this.x,this.y,this.r,this.r);
    }
  }