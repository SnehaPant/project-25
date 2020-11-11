
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var papers;
var grounds;
var box1,box2,box3;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

  papers= new paper(100,200,30)
  grounds=new ground()
  box1=new Box(600,290,200,200)
  
}


function draw() {
  rectMode(CENTER);
  background('white');
  papers.display()
  grounds.display()
   box1.display()
 
  drawSprites();
 keyPressed()
}
function keyPressed(){
  if (keyCode===UP_ARROW){
    Body.applyForce(papers.body,papers.body.position,{x:-20,y:-20})
  }

}



