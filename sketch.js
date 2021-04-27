const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;

function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;
    pig1 = new Pig(220,200);
    bird1= new Bird(300,300);
    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,50);
    
    ground = new Ground(100,500,8000,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    bird1.display();
}
