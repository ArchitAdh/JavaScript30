//TO ADD
//add mouse key event
//change bg to drum set and associate key press with the item in image
// try removing playing class using css variables in css transition and js
//? a test code

const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  key.classList.add("playing");
  audio.currentTime = 0; // set audio time to beginning before playing again when key pressed
  audio.play();

  //   setTimeout(() => {
  //     key.classList.remove("playing");
  //   }, 70);
};

function removeTransition(e) {
  console.log(this); // to check what 'this' associates itself  with
  this.classList.remove("playing");
}

window.addEventListener("keydown", playSound);

// remove transition
const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
