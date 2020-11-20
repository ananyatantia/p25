
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,bin
function preload()
{
}

function setup() {
	createCanvas(800, 700);

  
	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100,600,50)
	bin = createSprite(650,600,100,100)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display()
  drawSprites();
 
  if(keyDown(DOWN_ARROW)){
	  Paper.isStatic(false)
  }
}



