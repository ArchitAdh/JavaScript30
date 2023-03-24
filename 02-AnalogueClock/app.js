const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

const setDate = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  console.log("sec", seconds);
  const secondsDegree = (seconds / 60) * 360;
  //eg: if second is 15s ,15/60 = .25 => .25*360 = 90deg
  // sort of like what we do while making a pie chart
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;

  const mins = now.getMinutes();
  console.log("min", mins);
  const minsDegree = (mins / 60) * 360;
  minHand.style.transform = `rotate(${minsDegree}deg)`;

  const hour = now.getHours();
  console.log("hour", hour);
  const hourDegree = (hour / 12) * 360;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
};

setInterval(setDate, 1000);
