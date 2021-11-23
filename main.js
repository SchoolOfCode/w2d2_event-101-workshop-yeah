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
