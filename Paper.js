class Paper{
    constructor(x,y){
        var options={
            isStatic:false,
           restitution:0.3,
           friction:0.5,
           density:1.2
        }
        this.body=Bodies.circle(x,y,10,options);
        World.add(world, this.body);
    }
    display(){
        var paperPos=this.body.position;

        push();
        translate(paperPos.x, paperPos.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill("pink");
        ellipse(0,0,this.r, this.r);
        pop();
    }
}