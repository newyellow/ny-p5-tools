
function setup () {
  createCanvas(800, 1000);

  background(30);
  rect(300, 300, 200, 200);
}

function draw() {

}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
