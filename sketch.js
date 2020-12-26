const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, leftdustbin, rightdustbin, lowerdustbin, paper, once;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400,690,800,20)

	leftdustbin = new Dustbin(520, 610, 20, 100, {isStatic:true});
	rightdustbin = new Dustbin(740, 610, 20, 100);
	lowerdustbin = new Dustbin(630, 670, 200, 20);
	paper = new Paper(100, 300);

	Engine.run(engine);
  
	once = 0;
}


function draw() {
  rectMode(CENTER);
  background(0);
	
	ground.display();
	leftdustbin.display();
	lowerdustbin.display();
	rightdustbin.display();
	paper.display();

	if (keyDown(UP_ARROW) && once === 0) {
		Matter.Body.applyForce(paper.body, paper.body.position,{x:15,y:-15})
		once=1;
	  }

  drawSprites();
 
}



