class Score{
    constructor(){
this.x = 170;
this.y = 150;
this.r = 20;
    }

    show(){
        scoreSprite = createSprite(this.x,hh-this.y, this.r,this.r);
        scoreSprite.addImage(scoreIcon);
       
         drawSprite(scoreSprite);
    }
leave(){
    removeSprite(scoreSprite);
}
 
}