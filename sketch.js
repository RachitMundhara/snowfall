var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;

var snow = [];

var engine, world;

function preload (){
  background_img = loadImage ("snow2.jpg")

}


function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);
  //snow = new Snow(100,0,30)
}

function draw() {
  background(background_img);
  Engine.update(engine);  
  
  //snow.display()

  if(frameCount%100===0){
    snow.push(new Snow (random(100,700),0,50))

  }
  for (var k = 0; k < snow.length; k++) {
    snow[k].display();
  }

}
