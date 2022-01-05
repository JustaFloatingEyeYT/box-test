//Declaring variables
var box;

//Anything that needs to be created will be done in setup
//Predifined function that runs only once at the start of the game
function setup() {
  //Creating the base of the game
  createCanvas(400,400);

  //Creating a box sprite
  box = createSprite(200,200,20,20);
  box.shapeColor = "white";
}
//Predifined function that runs constantly for every frame
function draw() {
  //Adds a background and fixes sprites duplicating
  background("black");

  if(keyIsDown(LEFT_ARROW)){
    box.x = box.x -4;
  }
  if(keyIsDown(RIGHT_ARROW)){
    box.x = box.x +4;
  }
  if(keyIsDown(UP_ARROW)){
    box.y = box.y -4;
  }
  if(keyIsDown(DOWN_ARROW)){
    box.y = box.y +4;
  }
  drawSprites();
}




