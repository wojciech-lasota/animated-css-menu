const randomColorArr = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];
let randomColor = "#";
for (let i = 0; i < randomColorArr.length; i++) {
  randomColor +=
    randomColorArr[Math.floor(Math.random() * randomColorArr.length)];
}
document.addEventListener("mousemove", (e) => {
  for (let i = 0; i < 6; i++) {
    randomColor +=
      randomColorArr[Math.floor(Math.random() * randomColorArr.length)];
  }

  let body = document.querySelector("body");
  let particles = document.createElement("span");
  let x = e.offsetX;
  let y = e.offsetY;
  particles.style.left = x + "px";
  particles.style.top = y + "px";
  let size = Math.random() * 8;
  particles.style.width = 2 + size + "px";
  particles.style.height = 2 + size + "px";
  particles.style.backgroundColor = randomColor;

  console.log(randomColor);
  let transformValue = Math.random() * 360;
  particles.style.transform = "rotate(" + transformValue + "deg";

  //   particles.firstChild.style.backgroundColor = randomColor;

  randomColor = "#";

  body.appendChild(particles);
  setTimeout(() => {
    particles.remove();
  }, 2000);
});
