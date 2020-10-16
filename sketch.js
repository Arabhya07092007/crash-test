
var car ,wall;
var speed, weight;


function setup() {
  createCanvas(750,200);

  speed  = Math.round(random(55,90));
  weight = Math.round(random(400,1500));

  wall  = createSprite(700,100,15,100);
  wall.shapeColor = "lightyellow";

  
  car = createSprite(100, 100, 15, 15);
  car.shapeColor = ("orange");
  car.velocityX  = speed;

}

function draw() {

  background(0); 

  if (wall.x-car.x<(car.width+wall.width)/2){

    car.velocityX = 0;

    var deformation = 0.5 * weight * speed * speed/22500;

    if (deformation > 180){
      car.shapeColor  = (rgb(255, 0, 0));
    }

    if (deformation < 180 &&  deformation >100){
      car.shapeColor = (rgb(230, 230, 0));
    }

    if (deformation <100){
      car.shapeColor = (rgb(0, 255, 0));
    }
  }

  drawSprites();
}