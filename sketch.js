const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,plane,rubber,newStone,newIron,sand1;
var sand2,sand3,sand4,sand5,sand6,sand7,sand8;
var sand9,sand10;


function setup(){
    var canvas = createCanvas(1200,600);

    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    rubber = new Rubber(500,500,50,50);
    newStone = new Stone(700,320,100,100);

    newIron = new Iron (750,420,25,70);

    sand1 = new Sand(510,500,10,10);
    sand2 = new Sand(515,500,10,10);
    sand3 = new Sand(523,500,10,10);
    sand4 = new Sand(525,500,10,10);
    sand5 = new Sand(519,500,10,10);
    sand6 = new Sand(532,500,10,10);
    sand7 = new Sand(543,500,10,10);
    sand8 = new Sand(536,500,10,10);
    sand9 = new Sand(540,500,10,10);
    sand10 = new Sand(545,500,10,10);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    newStone.display();
    newIron.display();
    sand1.display();
    sand2.display();
    sand3.display();
    sand4.display();
    sand5.display();
    sand6.display();
    sand7.display();
    sand8.display();
    sand9.display();
    sand10.display();
    
}