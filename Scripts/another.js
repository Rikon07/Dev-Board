document.getElementById("BackToDesk").addEventListener("click", function () {
    window.location.href = "index.html";
  });

// Function of random number
  function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }


