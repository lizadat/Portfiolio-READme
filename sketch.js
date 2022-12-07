let x = 0;
let x_2 = -10000;
let color_circle = true;
let color_back = true;
let y;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight * 2);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");
  mic = new p5.AudioIn();
  mic.start();
  rectMode(CENTER);
}

function draw() {
  if (x_2 == -10000) {
    x_2 = -windowWidth - 5;
    // print("here");
  }

  noStroke();
  if (color_back) {
    background(255);
  } else {
    background(0);
  }
  for (let i = 0; i < windowWidth; i += 25) {
    for (let j = 0; j < windowHeight * 2; j += 25) {
      // if (x + i == mouseX || j == mouseY) {
      //   y = j;
      //   fill(255, 0, 0);
      //   circle(x + i, y, 20);
      //   y++;
      // }
      if (color_circle) {
        fill(0);
      } else {
        fill(255);
      }
      circle(x + i, j, 10);
      // fill(255, 0, 0);

      circle(x_2 + i, j, 10);
    }
  }

  // x_2++;
  if (x == windowWidth) {
    x = -windowWidth;
  } else {
    x++;
  }

  if (x_2 == windowWidth) {
    x_2 = -windowWidth - 5;
  } else {
    x_2++;
  }
  fill(255);
  circle(mouseX, mouseY, 100);
  fill(0);
  circle(mouseX, mouseY, 80);
  fill(255);
  circle(mouseX, mouseY, 60);
  fill(0);
  circle(mouseX, mouseY, 40);
  fill(255);
  circle(mouseX, mouseY, 20);
  // rect(mouseX, mouseY, 100, 100, 20);
  if (mouseIsPressed) {
    color_back = false;
    color_circle = false;
  }
}

function mouseReleased() {
  color_back = true;
  color_circle = true;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight * 2, true);
}

function scrollToProjects() {
  const allHiddenElements = document.querySelectorAll(".hidden");
  for (let elem of allHiddenElements) {
    elem.classList.remove("hidden");
  }
  const projectContainer = document.querySelector(".project-container");
  projectContainer.scrollIntoView();
}

function scrollToBeginning() {
  const projectContainer = document.querySelector(".intro");
  projectContainer.style.display = "grid";
  projectContainer.scrollIntoView();
}
