let snake;
let snakeSpeed;

let food;
let s = 20;

function setup() {
  createCanvas(400, 400);
  frameRate(5);

  snake = [
    createVector(width / 2, height / 2),
    createVector(width / 2, height / 2 + s),
    createVector(width / 2 + s, height / 2 + s),
  ];

  snakeSpeed = createVector(0, 0);
  food = createVector(
    s * floor(random(width) / s),
    s * floor(random(width) / s)
  );

  /* let randomNumber = random(400)
console.log(randomNumber)*/

  let randomNumber = s * floor(random(width) / s);
  console.log(randomNumber);
}

function placeFood() {
  food.x = s * floor(random(width) / s);
  food.y = s * floor(random(width) / s);
}

function keyPressed() {
  if (keyCode == 37) {
    // I pressed the Left arrow

    snakeSpeed.x = -s;
    snakeSpeed.y = 0;
    console.log("The Left arrow is pressed");
  }

  if (keyCode == 38) {
    // I pressed the Up arrow

    snakeSpeed.x = 0;
    snakeSpeed.y = -s;
    console.log("The Up arrow is pressed");
  }

  if (keyCode == 39) {
    // I pressed the Right arrow

    snakeSpeed.x = s;
    snakeSpeed.y = 0;
    console.log("The Right arrow is pressed");
  }

  if (keyCode == 40) {
    // I pressed the Down arrow

    snakeSpeed.x = 0;
    snakeSpeed.y = s;
    console.log("The Down arrow is pressed");
  }
}
// snake.x = snake.x + snakeSpeed.x
// snake.y = snake.y + snakeSpeed.y

function draw() {
  background(250, 218, 94);

  fill(0);
  for (let i = 0; i < snake.length; i++) {
    rect(snake[i].x, snake[i].y, s, s);
  }

  fill(255, 0, 0);
  noStroke();

  rect(food.x, food.y, s, s);

  let head = snake[0].copy();
  head.x += snakeSpeed.x;
  head.y += snakeSpeed.y;
  snake = [head, ...snake];

  if (head.x == food.x && head.y == food.y) {
    // Food got eaten
    placeFood();

    random();
  } else {
    snake.pop();
  }

  /*
  snake = [part1, part2, part3]
  head = copy of part1
  snake = [head, part1, part2, part3]
  */

  // -n to go left and up
  // n to go down and right

  if (head.x < 0 || head.y < 0 || head.x > width || head.y > height) {
    // console.log("The snake has moved off the screen")

    for (let i = 1; i < snake.length; i++) {
      let snakeBodyPart = snake[i];
      if (head.x == snake[i].x && head.y == snake[i])
        console.log("The snake hit itself");

      background(71, 39, 153);
    }
  }
}
