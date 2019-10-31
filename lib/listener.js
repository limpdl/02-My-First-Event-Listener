// TODO: React to a click on the button!
let da_btn = document.getElementById("clickme");
let audio = new Audio("sound.mp3");
da_btn.addEventListener("click", (Event) => {
  da_btn.classList.add("disabled");
  da_btn.innerText = "Bingo!";
  audio.play();
});
