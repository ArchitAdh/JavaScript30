// TODO:  add mouse key event //COMPLETED
// TODO:  change bg to drum set and associate key press with the item in image

const playSoundHelper = (audio, key) => {
  if (!audio) return;
  key.classList.add("playing");
  audio.currentTime = 0; // set audio time to beginning before playing again when key pressed
  audio.play();
};

const playSoundOnKeyPress = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  playSoundHelper(audio, key);
};

const playSoundOnClick = (keyCode) => {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  playSoundHelper(audio, key);
};

// Play sound on keyPress
window.addEventListener("keydown", playSoundOnKeyPress);

// Play sound  on button click
const keysUi = document.querySelector(".keys");
keysUi.addEventListener("click", (e) => {
  const div = e.target.closest(".key"); // 'closest' method  gets the closest ancestor element that matches a certain selector.
  const keyCode = div.dataset.key;
  playSoundOnClick(keyCode);
});

// remove transition
const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

function removeTransition() {
  // console.log(this); // to check what 'this' associates itself  with
  this.classList.remove("playing");
}
