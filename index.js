let compChoice;
let winCnt = 0;
let loseCnt = 0;
let drawCnt = 0;
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

function playAudio(main, other1, other2){
  if (audD.paused && audW.paused && audL.paused) {
    console.log(main);
    main.play();
  } else {
    other1.pause();
    other2.pause();
    main.currentTime = 0;
    main.play();
  }
}

function rps(draw, win, lose) {
  compChoice = Math.floor(Math.random() * (4 - 1) + 1);

  if(compChoice==1) compChoice = 'rock';
  else if(compChoice == 2) compChoice = 'paper';
  else compChoice = 'scissor';

  document.querySelector(".player").innerHTML = draw;

  if (compChoice == draw) {
    document.querySelector(".result-draw").innerHTML = ++drawCnt;
    choice.innerHTML = "Draw";
    pc.innerHTML = draw;
    playAudio(audD, audW, audL);
  } 
  else if (compChoice == win) {
    document.querySelector(".result-win").innerHTML = ++winCnt;
    choice.innerHTML = "Win!";
    pc.innerHTML = win;
    playAudio(audW, audD, audL);
  } 
  else {
    document.querySelector(".result-lose").innerHTML = ++loseCnt;
    choice.innerHTML = "Lose";
    pc.innerHTML = lose;
    playAudio(audL, audD, audW);
  }
}