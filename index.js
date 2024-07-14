let compChoice;
let win = 0;
let lose = 0;
let draw = 0;
let audD = document.querySelector("#draw-aud");
let audW = document.querySelector("#win-aud");
let audL = document.querySelector("#lose-aud");
let choice = document.querySelector(".choice");
let pc = document.querySelector(".pc");
let muteBtn = document.querySelector(".mute");

function muteAud() {
  if (audD.volume == 0) {
    audD.volume = 1;
    audW.volume = 1;
    audL.volume = 1;
    muteBtn.innerHTML = "Mute";
} else {
    audD.volume = 0;
    audW.volume = 0;
    audL.volume = 0;
    muteBtn.innerHTML = "UnMute";
  }
}

function rockPress() {
  compChoice = Math.floor(Math.random() * (4 - 1) + 1);
  document.querySelector(".player").innerHTML = "Rock";
  if (compChoice == 1) {
    console.log("Draw");
    document.querySelector(".result-draw").innerHTML = ++draw;
    choice.innerHTML = "Draw";
    pc.innerHTML = "Rock";
    if (audD.paused && audW.paused && audL.paused) {
      audD.play();
    } else {
      audW.pause();
      audL.pause();
      audD.currentTime = 0;
      audD.play();
    }
  } else if (compChoice == 2) {
    console.log("Win");
    document.querySelector(".result-win").innerHTML = ++win;
    choice.innerHTML = "Win!";
    pc.innerHTML = "Scissor";
    if (audD.paused && audW.paused && audL.paused) {
      audW.play();
    } else {
      audD.pause();
      audL.pause();
      audW.currentTime = 0;
      audW.play();
    }
  } else {
    console.log("Loose");
    document.querySelector(".result-lose").innerHTML = ++lose;
    choice.innerHTML = "Lose";
    pc.innerHTML = "Paper";
    if (audD.paused && audW.paused && audL.paused) {
      audL.play();
    } else {
      audD.pause();
      audW.pause();
      audL.currentTime = 0;
      audL.play();
    }
  }
}
function paperPress() {
  compChoice = Math.floor(Math.random() * (4 - 1) + 1);
  document.querySelector(".player").innerHTML = "Paper";
  if (compChoice == 2) {
    document.querySelector(".result-draw").innerHTML = ++draw;
    choice.innerHTML = "Draw";
    pc.innerHTML = "Paper";
    if (audD.paused && audW.paused && audL.paused) {
      audD.play();
    } else {
      audW.pause();
      audL.pause();
      audD.currentTime = 0;
      audD.play();
    }
  } else if (compChoice == 1) {
    console.log("Win");
    document.querySelector(".result-win").innerHTML = ++win;
    choice.innerHTML = "Win!";
    pc.innerHTML = "Rock";
    if (audD.paused && audW.paused && audL.paused) {
      audW.play();
    } else {
      audD.pause();
      audL.pause();
      audW.currentTime = 0;
      audW.play();
    }
  } else {
    console.log("Loose");
    document.querySelector(".result-lose").innerHTML = ++lose;
    choice.innerHTML = "Lose";
    pc.innerHTML = "Scissor";
    if (audD.paused && audW.paused && audL.paused) {
      audL.play();
    } else {
      audD.pause();
      audW.pause();
      audL.currentTime = 0;
      audL.play();
    }
  }
}
function scissorPress() {
  compChoice = Math.floor(Math.random() * (4 - 1) + 1);
  document.querySelector(".player").innerHTML = "Scissor";
  if (compChoice == 3) {
    console.log("Draw");
    document.querySelector(".result-draw").innerHTML = ++draw;
    choice.innerHTML = "Draw";
    pc.innerHTML = "Scissor";
    if (audD.paused && audW.paused && audL.paused) {
      audD.play();
    } else {
      audW.pause();
      audL.pause();
      audD.currentTime = 0;
      audD.play();
    }
  } else if (compChoice == 2) {
    console.log("Win");
    document.querySelector(".result-win").innerHTML = ++win;
    choice.innerHTML = "Win!";
    pc.innerHTML = "Paper";
    if (audD.paused && audW.paused && audL.paused) {
      audW.play();
    } else {
      audD.pause();
      audL.pause();
      audW.currentTime = 0;
      audW.play();
    }
  } else {
    console.log("Loose");
    document.querySelector(".result-lose").innerHTML = ++lose;
    choice.innerHTML = "Lose";
    pc.innerHTML = "Rock";
    if (audD.paused && audW.paused && audL.paused) {
      audL.play();
    } else {
      audD.pause();
      audW.pause();
      audL.currentTime = 0;
      audL.play();
    }
  }
}
