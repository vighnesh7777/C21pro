var canvas;
var music;
var S1,S2,S3,S4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
S1=createSprite(100,585,190,15);
S2=createSprite(295,585,190,15);
S3=createSprite(490,585,190,15);
S4=createSprite(685,585,190,15);


    //create box sprite and give velocity

    box=createSprite(random(20,750),300,50,50);

}

function draw() {
    background(rgb(169,169,169));

    S1.shapeColor="blue";
    S2.shapeColor="orange";
    S3.shapeColor="magenta";
    S4.shapeColor="green";
box.shapeColor="white";
box.velocityY=10;
box.velocityX=2
/*box.bounceOff(S1);
box.bounceOff(S2);
box.bounceOff(S3);
box.bounceOff(S4);*/

if (S1.isTouching(box) && box.bounceOff(S1))
{
    box.shapeColor="blue";
    box.velocityY=-10;
}

if (S2.isTouching(box) && box.bounceOff(S2))
{
    box.shapeColor="orange";
    box.velocityY=-10;
}

if (S3.isTouching(box) && box.bounceOff(S3))
{
    box.shapeColor="magenta";
    box.velocityY=-10;
}

if (S4.isTouching(box) && box.bounceOff(S4))
{
    box.shapeColor="green";
    box.velocityY=-10;
}
    //create edgeSprite



    //add condition to check if box touching surface and make it box

    drawSprites()
}
