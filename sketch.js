
var bgImg,cat,mouse
var bgimg1,catimg1,catimg2,catimg1,mouseimg1,mouseimg2,mouseimg3


function preload() {
    //load the images here
 bgImg = loadImage("images/garden.png");
 catimg1 = loadAnimation("images/cat1.png");
 catimg2 = loadAnimation("images/cat2.png","images/cat3.png");
 catimg3 = loadAnimation("images/cat4.png");
 mouseimg1 = loadAnimation("images/mouse1.png");
 mouseimg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
 mouseimg3 = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite(870,600);
cat.addAnimation("gatoSentado",catimg1);
cat.scale = 0.2;
mouse = createSprite(170,600);
mouse.addAnimation("ratoEqueijo",mouseimg1);
mouse.scale = 0.2;

}

function draw() {

    background(bgImg);
     if(cat.x - mouse.x < (cat.width - mouse.width)/2){
     cat.velocityX=0;
     cat.addAnimation("ultimaImagemGato", catimg3);
     cat.x = 300;
     cat.scale=0.2;
     cat.changeAnimation("ultimaImagemGato");
     
     mouse.addAnimation("ratovendo",mouseimg3);
    mouse.changeAnimation("ratovendo");
    mouse.scale = 0.2;

     }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

    if(keyCode === LEFT_ARROW){
    mouse.addAnimation("ratoProvocando",mouseimg2);
    mouse.changeAnimation("ratoProvocando");
    mouse.frameDelay = 25;

    cat.velocityX = -5;

    cat.addAnimation("ratoProvocando1",catimg2);
    cat.changeAnimation("ratoProvocando1");

    }
}
