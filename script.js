// <!-- add active class on hoveres item -->
const list = document.querySelectorAll("li");
for (let i = 0; i < list.length; i++) {
  list[i].onmouseover = () => {
    let j = 0;
    while (j < list.length) {
      list[j++].className = "list";
    }
    list[i].className = "list active";
  };
}
// change body color
list.forEach((element) => {
  element.addEventListener("mouseenter", (event) => {
    let bg = document.querySelector("body");
    let color = event.target.getAttribute("data-color");
    bg.style.backgroundColor = color;
  });
});
