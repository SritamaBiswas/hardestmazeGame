var cardboard1, cardboard2, cardboard3, cardboard4, cardboard5;
var cardboard6, cardboard7, cardboard8, cardboard9, cardboard10;
var cardboard11, cardboard12, cardboard13, cardboard14;
var cardboard15, cardboard16, cardboard17, cardboard18;
var cardboard19, cardboard20, cardboard21, cardboard22, man, cup, dog_walking,
  monster_walking, monster1, monster2, monster3;
var monster4, monster5, invi1, invi2, invi3, invi4, invi5,edges;
var invi6, invi7, invi8, invi9, invi10,reset;

function preload() {

  dog_walking = loadImage("dog.png");
  monster_walking = loadImage("monsterr.png");

}


function setup() {
 
  createCanvas(400, 400);
  cardboard1 = createSprite(45, 390, 15, 60);
  cardboard2 = createSprite(103, 350, 15, 110);
  cardboard3 = createSprite(27, 320, 80, 20);
  cardboard4 = createSprite(6, 253, 220, 20);
  cardboard5 = createSprite(164, 314, 20, 170);
  cardboard6 = createSprite(161, 340, 70, 20);
  cardboard7 = createSprite(222, 280, 20, 220);
  cardboard8 = createSprite(222, 58, 20, 140);
  cardboard9 = createSprite(54, 187, 260, 20);
  cardboard10 = createSprite(56, 206, 20, 40);
  cardboard11 = createSprite(0, 118, 160, 20);
  cardboard12 = createSprite(70, 82, 20, 55);
  cardboard13 = createSprite(54, 58, 50, 20);
  cardboard14 = createSprite(110, 90, 20, 75);
  cardboard15 = createSprite(140, 120, 70, 20);
  cardboard16 = createSprite(180, 100, 20, 100);
  cardboard17 = createSprite(145, 0, 20, 170);
  cardboard18 = createSprite(280, 0, 20, 470);
  cardboard19 = createSprite(280, 400, 20, 250);
  cardboard20 = createSprite(320, 128, 80, 20);
  cardboard21 = createSprite(400, 240, 140, 20);
  cardboard22 = createSprite(320, 328, 100, 20);
  invi1 = createSprite(20, 290, 5, 30);
  invi2 = createSprite(90, 290, 5, 30);
  invi3 = createSprite(70, 220, 5, 30);
  invi4 = createSprite(150, 220, 5, 30);
  invi5 = createSprite(250, 70, 30, 5);
  invi6 = createSprite(250, 210, 30, 5);
  invi7 = createSprite(310, 170, 30, 5);
  invi8 = createSprite(310, 290, 30, 5);
  invi9 = createSprite(300, 150, 5, 30);
  invi10 = createSprite(390, 150, 5, 30);


  dog = createSprite(13, 382, 10, 10);
  cup = createSprite(390, 40, 20, 80);
  dog.addImage(dog_walking);
  dog.scale = 0.1;
  monster1 = createSprite(50, 287, 10, 10);
  monster1.addImage(monster_walking);
  monster1.scale = 0.1;
  monster1.velocityX = 2.5;

  monster2 = createSprite(120, 220, 10, 10);
  monster2.addImage(monster_walking);
  monster2.scale = 0.1;
  monster2.velocityX = 2.5;

  monster3 = createSprite(250, 150, 10, 10);
  monster3.addImage(monster_walking);
  monster3.scale = 0.1;
  monster3.velocityY = 2.5;

  monster4 = createSprite(310, 250, 10, 10);
  monster4.addImage(monster_walking);
  monster4.scale = 0.1;
  monster4.velocityY = 2.5;

  monster5 = createSprite(350, 150, 10, 10);
  monster5.addImage(monster_walking);
  monster5.scale = 0.1;
  monster5.velocityX = 2.5;
  
  
  invi1.visible = false;
  invi2.visible = false;
  invi3.visible= false;
invi4.visible= false;
  invi5.visible= false;
invi6.visible= false;
  invi7.visible= false;
  invi8.visible= false;
  invi9.visible= false;
  invi10.visible= false;

}

function draw() {
  background("lightblue");
  edges=createEdgeSprites();
  
  dog.collide(edges);
  dog.collide(cardboard1);
  dog.collide(cardboard2);
  dog.collide(cardboard3);
  dog.collide(cardboard4);
  dog.collide(cardboard5);
  dog.collide(cardboard6);
  dog.collide(cardboard7);
  dog.collide(cardboard8);
  dog.collide(cardboard9);
  dog.collide(cardboard10);
  dog.collide(cardboard11);
  dog.collide(cardboard12);
  dog.collide(cardboard13);
  dog.collide(cardboard14);
  dog.collide(cardboard15);
  dog.collide(cardboard16);
  dog.collide(cardboard17);
  dog.collide(cardboard18);
  dog.collide(cardboard19);
  dog.collide(cardboard20);
  dog.collide(cardboard21);
  dog.collide(cardboard22);
  monster1.bounceOff(invi1);
  monster1.bounceOff(invi2);
  monster2.bounceOff(invi3);
  monster2.bounceOff(invi4);
  monster3.bounceOff(invi5);
  monster3.bounceOff(invi6);
  monster4.bounceOff(invi7);
  monster4.bounceOff(invi8);
  monster5.bounceOff(invi9);
  monster5.bounceOff(invi10);
  dog.collide(cup);



  dog.shapeColor = "green";
  cup.shapeColor = "yellow";

  if (keyDown("up")) {
    dog.y = dog.y - 2;
  }
  if (keyDown("down")) {
    dog.y = dog.y + 2;
  }
  if (keyDown("left")) {
    dog.x = dog.x - 2;
  }
  if (keyDown("right")) {
    dog.x = dog.x + 2;
  }
  
  if (dog.isTouching(cup)) {
    dog.velocityX = 0;
    dog.velocityY = 0;
    fill("yellow");
    textSize(30);
    text("You Win", 60, 150);
     
  }

  if (dog.isTouching(monster1)) {
   
    fill("green");
    textSize(30);
    text("Try Again", 40, 150);

     
  }
   if (dog.isTouching(monster2)) {
   
    fill("green");
    textSize(30);
    text("Try Again", 40, 150);
    
     
  }
  if (dog.isTouching(monster3)) {
   
    fill("green");
    textSize(30);
    text("Try Again", 40, 150);
  
     
  }
  if (dog.isTouching(monster4)) {
   
    fill("green");
    textSize(30);
    text("Try Again", 40, 150);
  
     
  }
   if (dog.isTouching(monster5)) {
   
    fill("green");
    textSize(30);
    text("Try Again", 40, 150);
   
  }
  if (dog.isTouching(monster1)||dog.isTouching(monster2)||dog.isTouching(monster3)|| 
  dog.isTouching(monster4)||dog.isTouching(monster5)){
    dog.x=10;
    dog.y=380;
  }

  
  
  drawSprites();
}