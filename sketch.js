const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
var dropArray = []
var umbrella1, raindrop1, lightningImg
function preload(){
    
}

function setup(){
   var canvas = createCanvas(600,800);
 
    engine = Engine.create();
    world = engine.world;
    lightningImg = loadImage("lightning1.png")

umbrella1 = new Umbrella(300,600);


var x =100;
for(var i = 0; i<x; i++){
dropArray.push(new Raindrop(random(20,580), random(20,780)));
}
}

function draw(){
    Engine.update(engine);
    background(0);

    umbrella1.display();

  

    for(var y = 0;y<dropArray.length; y++){
        dropArray[y].display();
        dropArray[y].update();
    }

    if(frameCount%100 === 0){
image(lightningImg, 300,0,200,200);
    }

    fill("white");
    textSize(15);
    text("I could not open the images provdied in the project so I tried my best",100,720);
    text("to find other images but could not find more thunder or boy images", 100,750);
    //Raindrop.update();
}   

