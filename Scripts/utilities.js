// Function to generate a random color
function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

document.getElementById("colorButton").addEventListener("click", function () {
  document.body.style.backgroundColor = getRandomColor();
});


document.getElementById("discover").addEventListener("click", function () {
    window.location.href = "questions.html";
} );


