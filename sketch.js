
ball_x = 200
ball_y = 200

ball_dx = 2
ball_dy = 4

function setup() {
    createCanvas(400, 400);
  }

  function ball() {
    circle(ball_x,ball_y,20)
  }
  
  function draw() {
    background(220);
    ball()
    ball_x = ball_x + ball_dx
    ball_y = ball_y + ball_dy
    if (ball_x < 0) or (ball_x >400) {
        ball_dx= - ball_dx
    }
        
  }
  