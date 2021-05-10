var dolphin,dodo,dolphinI,dodoI;
var dolphinFoodI;
var foodGroup;
var dolphinFood;
var eg,lbs,wbs;
var mediKit,mi,xio;
var dolp,lsb,laserbeam;

var rand ,rando
var score = 0;
var dolphinH = 5;
var laserShooter,laserShooterI;
var gameOver,gaveOverI;
var waterBall,wbi;

function preload(){
dolphinI = loadImage("dolphin-0007.png");
dodoI = loadImage("dodo.png");
dolphinFoodI = loadImage("budo.png");
laserShooterI = loadImage("images.png");
mi = loadImage("medikit.png");
lsb = loadImage("las.png");
wbi = loadImage("images.jpg");

}

function setup() {
  createCanvas(1400,800);
  dodo = createSprite(1000,400,200,200);
  dodo.addImage(dodoI);
  dodo.scale = 5.3;
  
  dolphin = createSprite(200,400);
  dolphin.addImage(dolphinI);
  dolphin.scale = 1.2;

  rand = random(100,900);
  rando = (400,800);

  foodGroup = createGroup();
  eg =  createGroup();
  xio = createGroup();
  mk = createGroup();
  lbs = createGroup();



  dolphin.setCollider("circle",20,0,40)
  dolphin.debug = false;

}

function draw(){
  
  background("blue");
  
  dodo.velocityX = -3;
  
  if(dodo.x<300){
    dodo.x = dodo.width*2;
  }

  if(keyDown("Down_Arrow")){
    dolphin.velocityY = 2
  }
    if(keyDown("space")){
       dolphin.velocityY = 0
    }
    

    if(keyDown("Up_Arrow")){
      dolphin.velocityY = -2
   }

   if(foodGroup.isTouching(dolphin)){
     foodGroup.destroyEach();
     score =score+1

   }
   if(eg.isTouching(dolphin)){
    eg.destroyEach();
    dolphinH = dolphinH-1

  }

 if(xio.isTouching(dolphin)){
   dolphinH = dolphinH+1;
   xio.destroyEach();
 }
 if(lbs.isTouching(dolphin)){
    dolphinH = dolphinH - 3

    lbs.destroyEach()
 }
 if(wbs.isTouching(laserShooter)){
   eg.destroyEach();
 }





  drawSprites();
  SpawnAttack();
  spawnVillan();
  spawnMidk();
  spawnlaserbeam();
  waterball();

if(dolphinH == 0){
  textSize(70);
  text("khel khatam", 600,600);
  dolphin.velocvityY = 0 ;
  dolphinFood
}

  textSize(30);
  text("score :"+score, 400,400);
  text("Dolphin Health :"+ dolphinH,700,200);
}

function SpawnAttack(){
if(frameCount % 220 === 0){
   dolphinFood = createSprite(1200,rand,200,200);
   dolphinFood.y = random(100,700)
  dolphinFood.addImage(dolphinFoodI);
  dolphinFood.scale = 0.4
  dolphinFood.velocityX = -4;
  dolphinFood.lifetime = 500;

  foodGroup.add(dolphinFood)
}

}
function spawnVillan(){
  if(frameCount % 160 === 0){

    laserShooter = createSprite(1200,rando,200,200);
    laserShooter.y = random(100,800)
    laserShooter.addImage(laserShooterI);
    laserShooter.scale = 0.4;
    laserShooter.velocityX = -4;
    laserShooter.lifetime = 400;


   eg.add(laserShooter)
  }
}
function spawnMidk(){
  if(frameCount % 750 === 0){

    mediKit = createSprite(1200,rando,200,200);
    mediKit.y = random(100,800)
    mediKit.addImage(mi);
    mediKit.scale = 0.4;
    mediKit.velocityX = -4;
    mediKit.lifetime = 400;
    
    xio.add(mediKit)
  }

}
  function spawnlaserbeam(){
    if(frameCount % 560 === 0){
      
    laserbeam = createSprite(1200,laserShooter.y,40,20);
    laserbeam.shapeColor = "red"
    laserbeam.x = laserShooter.x
    laserbeam.y = laserShooter.y
    laserbeam.velocityX = -4;
    laserbeam.lifetime = 400;
    laserbeam.width = width+ 20

    if(laserbeam.x<300){
      laserbeam.width++
    }
    lbs.add(laserbeam)
    }
  }
  function waterball(){
  if(score > 1){
    if(keyDown("left_arrow")){
      score = score-2
      waterBall = createSprite(dolphin.x,dolphin.y,20,70);
      waterBall.addImage(wbi);
      waterBall.scale = 0.4
      waterBall.velocityX = 3;
      waterBall.lifetime = 360
      
      wbs.add(waterBall);
    }
  }
  }