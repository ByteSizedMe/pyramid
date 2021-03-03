const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var stand1,stand2;
var polygon;
var slingShot;
var polygon_img;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
  b1 = new Block(288,285,30,40);
  b2 = new Block(301,285,30,40);
  b3 = new Block(337,285,30,40);
  b4 = new Block(353,285,30,40);
  b5 = new Block(381,285,30,40);
  b6 = new Block(403,285,30,40);
  b7 = new Block(427,285,30,40);
  b8 = new Block(451,285,30,40);
  b9 = new Block(475,285,30,40);
  b10 = new Block(500,285,30,40);

 // b11 = new Block(301,234,30,40);
  b12 = new Block(337 ,234,30,40);
  b13 = new Block(353,234,30,40);
  b14 = new Block(381,234,30,40);
  b15 = new Block(403,234,30,40);
  b16 = new Block(427,234,30,40);
  b17= new Block(451,234,30,40);
  b18 = new Block(475,234,30,40);

  b19 = new Block(360 ,190,30,40);
  b20 = new Block(400,190,30,40);
  b21 = new Block(430,190,30,40);

  b22 = new Block(633,186,30,40);
  b23 = new Block(661,186,30,40);
  b24 = new Block(692,186,30,40);
  b25 = new Block(721,186,30,40);
  b26 = new Block(753,186,30,40);

  b27 = new Block(661,160,30,40);
  b28 = new Block(692,160,30,40);
  b29 = new Block(721,160,30,40);

  b30 = new Block(692,120,30,40);


  
  //polygon holder with slings
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  
  slingShot = new Slingshot(this.polygon,{x:100,y:200});

}
function draw() {
  background(56,44,44); 
 
  //Engine.update(engine);
  text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
  fill("lightyellow");
  text("Drag the polygon to destroy the blocks",300,30);
  textSize(10);
  text("Press Space to get a second Chance to Play!!",650 ,350);
  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  fill("green");
 // b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();
  fill("blue");
  b19.display();
  b20.display();
  b21.display();
  fill("black");
  b22.display();
  b23.display();
  b24.display();
  b25.display();
  b26.display();
  fill("grey");
  b27.display();
  b28.display();
  b29.display();
  b30.display();
  






  
}
