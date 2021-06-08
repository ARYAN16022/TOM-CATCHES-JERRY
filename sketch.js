var canvas,bgImg;
var cat,bg,mouse;

function preload() {
    //load the images here
    bg=loadImage("images/garden.png")
    catImg1=loadAnimation("images/cat1.png")
    mouseImg1=loadAnimation("images/mouse1.png")
    catImg2=loadAnimation("images/cat2.png","images/cat3.png")
    catImg3=loadAnimation("images/cat4.png")
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseImg3=loadAnimation("images/mouse4.png")


}

function setup(){
    createCanvas(1000,800);
    //create cat and mouse sprites here
    cat=createSprite(870,600)
    cat.addAnimation("catsleeping",catImg1)
    cat.scale=0.2;

    mouse=createSprite(200,600)
    mouse.addAnimation("mousestanding",mouseImg1)
    mouse.scale=0.2;

}

function draw() {

    background(bg);
    //Write condition here to evalute if cat and mouse collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimation("catlast",catImg3);
        cat.changeAnimation("catlast");
        cat.scale=0.2;
        cat.x=300;
        mouse.addAnimation("mouselast",mouseImg3);
        mouse.changeAnimation("mouselast")
        mouse.scale=0.15;


    }
    fill("white");
;    text("Press right arrow to watch Mouse Teasing",400,600);
text("Press left arrow to move cat",425,570);

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      cat.velocityX= -5;
      cat.addAnimation("catrunning",catImg2)
      cat.changeAnimation("catrunning")

  }
  if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseteasing",mouseImg2)
    mouse.changeAnimation("mouseteasing")
    mouse.frameDelay=25;
  }

}
