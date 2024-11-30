let step = 0;
let point = 0;
let check = true;
let speed = 2000;
let isGameOver = false; // to increas the speed in each interval

document.onkeydown = function (e) {
  console.log(e.keyCode);
  if (e.keyCode == 38) {
    document.querySelector(".player").classList.add("animePlayer");
    setTimeout(() => {
      document.querySelector(".player").classList.remove("animePlayer");
    }, 700);
  }

  if (e.keyCode == 39) {
    if (step < 88) {
      step += 3;
    }
    document.querySelector(".player").style.left = `${step}vw`;
  }
  if (e.keyCode == 37) {
    if (step > 0) {
      step -= 3;
    }
    document.querySelector(".player").style.left = `${step}vw`;
  }
};

let id = setInterval(() => {
  let score = document.querySelector(".score");
  let player = document.querySelector(".player");
  let playerX = window.getComputedStyle(player, null).getPropertyValue("left");
  let playerY = window
    .getComputedStyle(player, null)
    .getPropertyValue("bottom");

  let oponent = document.querySelector(".oponent");
  let oponentX = window
    .getComputedStyle(oponent, null)
    .getPropertyValue("left"); // tells the value of DOM Components

  let opontnetY = window
    .getComputedStyle(oponent, null)
    .getPropertyValue("bottom");

  let oX = parseInt(oponentX);
  let pX = parseInt(playerX);
  let pY = parseInt(playerY);

  if (Math.abs(oX - pX) <= 100 && pY <= 100) {
    oponent.style.animation = "null";
    oponent.style.left = oponentX;
    player.style.left = playerX;
    player.style.bottom = playerY;
    document.querySelector(".gameOver").style.visibility = "visible";
    isGameOver = true;
    clearInterval(id);
  } else if (pX > oX && check) {
    //when oponent pass the player , players x axis will get higher
    point++;
    score.innerText = `Your Score ${point}`;
    console.log(speed);
    check = false;
    setTimeout(() => {
      check = true;
    }, 1000);
  }
  speed -= 1;
  if (!isGameOver) {
    oponent.style.animation = `oponentMove ${speed}ms linear infinite`;
  }
}, 100);
