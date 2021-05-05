class FloatingBars{
    constructor() {
        this.length = 50;//random(150, 200);;//typical bar dimensions: x=150, y=50
        this.thick = 50;
        this.x = 100;//random(100,width);
        this.y = 100;//random(100, height - 100);

    }

    show(){
       bar = createSprite(this.x,this.y,this.length,this.thick);
       bar.addImage(loadImage("images/brickwall.jpg"));
       //rect(this.x,this.y,this.s,this.s);
    }
}