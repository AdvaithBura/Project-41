class Umbrella{
    constructor(x,y){
    this.body = Bodies.circle(x,y,100, {isStatic:true});
    this.image = loadImage("umbrella.png")
    World.add(world, this.body);
    }

    display(){
       // ellipse(this.body.position.x,this.body.position.y, 200);
       imageMode(CENTER);
       image(this.image,this.body.position.x,this.body.position.y, 200,200);
        }
}