class Dustbin {

    constructor(x,y,width,height){

        var options = {
            'friction':1.0,
            'density':1.0,
            isStatic: true,
            restitution : 0.3
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
   
       
    }
 
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("white");
        rect( 0, 0, this.width, this.height);
        pop();

    }
}