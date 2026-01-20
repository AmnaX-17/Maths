function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);


  // Circle outline
  stroke("blue");
  strokeWeight(2);
  ellipse(200, 200, 100);

  // Main arc (arc length)
  stroke("red");
  strokeWeight(5);
  arc(200, 200, 100, 100, 0, 1);

  // Radius lines (central angle sides)
  stroke("blue");
  strokeWeight(3);
  line(200, 200, 250, 200);   // radius 1
  line(200, 200, 228, 243);   // radius 2

  // Small arc near center to represent central angle
  stroke("green");
  strokeWeight(3);
  noFill();
  arc(200, 200, 40, 40, 0, 1);  // smaller arc showing angle

  // Optional: add labels
  fill("black");
  noStroke();
  textSize(14);
  stroke("white")
  text("Arc length", 260, 250);
  text("Central angle", 210, 220);

}
