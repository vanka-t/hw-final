class FloatingBars{
    constructor() {
        this.length = 50;//random(150, 200);;//typical bar dimensions: x=150, y=50
        this.thick = 50;
        this.x = 100;//random(100,width);
        this.y = 100;//random(100, height - 100);

    }

    //make(){

    // }

    show(){
      
        barSprite = createSprite(this.x+300,hh-this.y, this.length,this.thick);
            barSprite.addImage(barIcon);
            drawSprite(barSprite);
   
    }

    move(){
      //  this.y = constrain(this.y, 100, height - 100); //player can only go from ground level to 'roof'
        //this.x = constrain(this.x, 200, 250); //make var out of parameters for spacing
    }
}