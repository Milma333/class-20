var m,f;

function setup() {
  createCanvas(800,800);
  m=createSprite(200,200, 100, 50);
  f=createSprite(400,400,200,100);
  m.shapeColor="green";
  f.shapeColor="green";
  m.debug=1;
  f.debug=1;
}

function draw() {
  background("lightblue");
  m.x=mouseX;
  m.y=mouseY;
  if((m.x-f.x)<(m.width/2+f.width/2)&&(f.x-m.x)<(m.width/2+f.width/2)&&f.y-m.y<f.height/2+m.height/2&&m.y-f.y<f.height/2+m.height/2){
    m.shapeColor="red";
    f.shapeColor="red";
  }

  else{
    m.shapeColor="green";
    f.shapeColor="green";
  }
console.log(f.x-m.x);

  drawSprites();
}