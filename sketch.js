var dogImg, happyDogImg, dog, database, foodS, foodStock, canvas, lastFed, fedTime, foodObj, feed, addFood, food1, foodCount, input, milk, milkImg;
var value


function preload() {
  dogImg = loadImage('Images/dogImg.png');
  happyDogImg = loadImage('Images/dogImg1.png');
  milkImg = loadImage('Images/Milk.png');
}

function setup() {
  
  database = firebase.database();
  canvas = createCanvas(800, 600);

  dog = createSprite(620, 400);
  dog.scale = 0.3;
  dog.addImage(dogImg);

  milk = createSprite(525, 470);
  milk.addImage(milkImg);
  milk.scale = 0.1;
  milk.visible = false;
  milk.rotation = 0;
  
  food1 = new Food();
  
  food1.start();

  addFood = createButton("Add food");
  addFood.position(530, 65);
  addFood.mousePressed(addFoods);

  input = createInput("Your Dog's Name");
  input.position(900, 570);
   input.value = value

  feed = createButton("Feed your Dog");
  feed.position(840, 65);
  feed.mousePressed(feedDog);

  
}

function draw() {  
  background("turquoise");
  textSize(20)
  fill ("purple")
   stroke (1)
  text(" Press the button to feed your dog",400,80)

  food1.display();

  drawSprites();
}

function feedDog() {
  food1.getFoodStock();
  food1.updateFedTime();

  if(foodCount === 0) {
    foodCount = 0;
    milk.visible = false;
    dog.addImage(dogImg);
  } else {
    food1.updateFoodStock(foodCount - 1);
    milk.visible = true;
    dog.addImage(happyDogImg);
  }
}

function addFoods() {
 food1.getFoodStock();

 food1.updateFoodStock(foodCount + 1); 
}


