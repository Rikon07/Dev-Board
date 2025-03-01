// Function to generate a random color
function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

document.getElementById("colorButton").addEventListener("click", function () {
  document.body.style.backgroundColor = getRandomColor();
});

// To go to the Blog page on clicking Discover section
document.getElementById("discover").addEventListener("click", function () {
  window.location.href = "blogs.html";
});

// To show today's date
const today = new Date().toLocaleDateString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

const parts = today.split(", ");

document.getElementById(
  "date"
).innerHTML = `${parts[0]}<br>${parts[1]}, ${parts[2]}`;

// Select all complete buttons
const completeButtons = document.querySelectorAll(".complete-btn");
const taskCounter = document.getElementById("task-assigned-count");
const NavTaskCounter = document.getElementById("nav-task-count");
const activityLog = document.getElementById("activity-log");
let sum = 1;
completeButtons.forEach((button) => {
  button.addEventListener("click", function () {
    alert("Board Updated Successfully!");
    console.log(sum);
    
    if (sum === 6) {
      alert("Congrats! You've completed all the tasks. 👏🏻");
    }
    sum++;

    button.disabled = true;
    button.style.backgroundColor = "gray";
    button.innerHTML = 'Completed <i class="fa-solid fa-check text-xs"></i>';

    // Get card title
    const card = button.closest(".card"); 
    const cardTitle = card.querySelector(".card-title").innerText;

    // Getting current time in (UTC+6) in 12-hour format
    const now = new Date();
    const options = {
      timeZone: "Asia/Dhaka",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    };
    const timeString = new Intl.DateTimeFormat("en-US", options).format(now);

    // Update activity log
    const logEntry = document.createElement("p");
    logEntry.innerText = `You have completed the task "${cardTitle}" at ${timeString}`;
    logEntry.classList.add("bg-[var(--grey)]", "rounded-xl", "p-4");
    activityLog.appendChild(logEntry);

    // Decrease tasks counter
    let taskCount = parseInt(taskCounter.innerText);
    if (taskCount > 0) {
      taskCounter.innerText = taskCount - 1;
    }

    // Increase nav tasks counter
    let NavTaskCount = parseInt(NavTaskCounter.innerText);
    if (NavTaskCount > 0) {
      NavTaskCounter.innerText = NavTaskCount + 1;
    }
  });
});

// Clear activity log by clicking the Clear History button
document.getElementById("clear-history-btn").addEventListener("click", function () {
  const activityLog = document.getElementById("activity-log");
  const logEntries = activityLog.querySelectorAll("p"); 

  this.innerHTML = 'History Cleared <i class="fa-solid fa-trash-can"></i>';
  logEntries.forEach(entry => entry.remove());
  setTimeout(() => {
    this.innerHTML = 'Clear History <i class="group-hover:text-gray-400 duration-300 fa-solid fa-trash-arrow-up"></i>';
  }, 2000);
});
