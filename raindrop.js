class Raindrop{
    constructor(x,y){
    this.body = Bodies.circle(x,y,7.5, {friction:0.00000001});
    World.add(world, this.body);
    }

display(){
    fill("blue")
ellipse(this.body.position.x,this.body.position.y, 15)
}

    update(){
        if(this.body.position.y >800){
            Matter.Body.setPosition(this.body, {x:random(20,680), y:0})
        }
    }
}