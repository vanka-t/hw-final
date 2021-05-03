class FloatingBars{
    constructor() {
        this.s = 50;//typical bar dimensions: x=150, y=50
        this.x = 250;
        this.y = height - 200;

    }

    show(){
       image(barIcon,this.x,this.y,this.s+100,this.s);
       //rect(this.x,this.y,this.s,this.s);
    }
}