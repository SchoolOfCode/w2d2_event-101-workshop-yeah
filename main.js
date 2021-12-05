const button = document.querySelector("#click-me");

// Task 1 - The event object:
function handleClick(event) {
  // If shift key pressed, change the inner text of the button to be NAILED IT
  if (event.shiftKey) {
    button.innerText = "NAILED IT";
  }
}

button.addEventListener("click", handleClick);

document.querySelector("#title-changer").addEventListener("keyup", (e) => {
  console.log(e.target.value);
});

// Task 2 - Adding an event listener
let flowerButton = document.querySelector(".task-2");
let title = document.querySelector("title");

function flowerButtonFunction(e) {
  title.innerText = "💐🌷🌼";
}

flowerButton.addEventListener("click", flowerButtonFunction);

// Task 3 - Different events:
let inputChange = document.querySelector("#title-changer");
let h1 = document.querySelector("h1");
function EventChange(event) {
  let inputValue = event.target.value;
  h1.innerText = inputValue;
}

inputChange.addEventListener("keyup", EventChange);

// Task 4 - Different events:
// 👉 Listen to the mouseenter event on the img element and change the color of the h1 to hotpink when the mouse cursor is over the image.
let img = document.querySelector("img");
function handleImage() {
  h1.style.color = "hotpink";
}

function handleImage2() {
  h1.style.color = "black";
}
img.addEventListener("mouseenter", handleImage);

img.addEventListener("mouseleave", handleImage2);
// 👉 Listen to the mouseleave event on the img element and change the color of the h1 back to initial when the mouse cursor is then removed from the image.
