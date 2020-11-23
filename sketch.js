const Engine = Matter.Engine;
const World = Matter.World;
  //const Events = Matter.Events;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;
 
var particles=[];
var plinkos = [];
var divisions = [];
var Particle;

var divisionHeight=300;
var score =0;
var count = 0;
var gameState = "Play";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   //if(frameCount%60===0){
     //particles.push(new particle(random(width/2-30, width/2+30), 10,10));
     //score++;
 //  }
 console.log(count)
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
  }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
  // mousePressed()
   textSize(20)
   textStyle(BOLD)
   text("Scoring: "+score,5,50)
}
function mousePressed(){
  if(gameState !== "end"){
    //score++;
    //Particle = new particle(mouseX,10,10,10);
    count++
    particles.push(new particle(random(width/2-30, width/2+30), 10,10));
   if(particles.body.position.y>760){
      if(particles.body.position.x<300){
        score = score+500
      }
      if(particles.body.position.x>301&&particles.body.position.x<600){
       score=score+100
      }
      if(particles.body.position.x>601&&particles.body.position.x<900){
       score=score+200
      }
      if(count>=5){
        gameState === "end";
      }
    }
  }
}
