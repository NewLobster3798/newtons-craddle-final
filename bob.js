class bob{
    constructor(x, y,radius){ 
        var options={
            isStatic:false,
            friction:0.4,
            density:3,
            restitution:1.2,
        }
        this.body = Bodies.circle(x, y,radius/2,options);
        this.radius = radius;
        
        World.add(world,this.body)
        
    }
    display(){
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
}