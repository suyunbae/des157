console.log("this is a js comment");

function setup() {
  var myCanvas = createCanvas(800, 250);
  myCanvas.parent('mySketch');
  background(255, 255, 255);
}

function draw() {
   // fading out
   fill(0,1);
   rect(0,0,width, height);


  from = color(128, 234, 201, 0.2 * 255);
  to = color(96, 175, 150, 0.2 * 255);
  color_1 = lerpColor(from, to, .33);
  color_2 = lerpColor(from, to, .66);

  for (var i = 0; i < 30; i++) {
     if(mouseIsPressed){
       stroke(color_1);
       fill(color_1);
     } else {
         stroke(from);
         strokeWeight(5);
         noFill();
     }
   }
  ellipse(mouseX, mouseY, 100, 100);
}