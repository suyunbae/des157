console.log("this is a js comment");

function setup() {
  var myCanvas = createCanvas(800, 250);
  myCanvas.parent('mySketch');
  background(255);
}

function draw() {
   // fades out
   fill(0,10);
   rect(0,0,width, height);


  from = color(235, 23, 129, 0.2 * 255);
  to = color(0, 0, 255, 0.2 * 255);
  c1 = lerpColor(from, to, .33);
  c2 = lerpColor(from, to, .66);

  for (var i = 0; i < 20; i++) {
     if(mouseIsPressed){
       stroke(c1);
       fill(c1);
     } else {
         stroke(from);
         strokeWeight(6);
         noFill();
     }
   }
  ellipse(mouseX, mouseY, 100, 100);
}