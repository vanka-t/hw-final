class FloatingBars{
    constructor() {
        this.s = 100;
        this.x = width;
        this.y = height/2 - this.s;

    }

    show(){
       image(barIcon,this.x,this.y,this.s,this.s);
    }
}