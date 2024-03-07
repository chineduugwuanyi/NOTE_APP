const btn = document.querySelector(".btn");
const container = document.querySelector(".notecon");
const inputbox = document.querySelectorAll(".inputbox");

function show() {
  container.innerHTML = localStorage.getItem("hop");
}
show();

function instore() {
  localStorage.setItem("hop", container.innerHTML);
}

btn.addEventListener("click", () => {
  let input = document.createElement("p");
  input.className = "inputbox";
  input.setAttribute("contenteditable", "true");
  let img = document.createElement("img");
  img.src = "delete.png";
  container.appendChild(input).appendChild(img);
});

container.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    instore();
  } else if (e.target.tagName === "P") {
    hop = document.querySelectorAll(".inputbox");
    hop.forEach((nth) => {
      nth.onkeyup = function () {
        instore();
      };
    });
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertlineBreak")
    event.preventDefault();

  }
});
