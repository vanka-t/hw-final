class Enemy{
    constructor(){
        this.x = 200;
        this.y = 0;
        this.r = 70;

    }

    show(){
        
       
        image(enemyIcon,this.x,this.y);
    }

    move(){
        this.y +=5;

    }
}