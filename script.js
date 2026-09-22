const sections = document.querySelectorAll(".page, .message-page");
let currentSection = 0;

function checkPassword() {
  const password = document.getElementById("password").value;
  const wrong = document.getElementById("wrongPassword");

  if (password === "love") {
    document.getElementById("welcome").classList.add("hidden");
    document.getElementById("mainContent").classList.remove("hidden");

    sections.forEach((section, index) => {
      section.style.display = index === 0 ? "flex" : "none";
    });

    createHearts();
  } else {
    wrong.textContent = "الباسورد غلط يا إيسو ❤️";
  }
}

function nextSection() {
  if (currentSection < sections.length - 1) {
    sections[currentSection].style.display = "none";
    currentSection++;
    sections[currentSection].style.display = "flex";

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}


/* العداد من 23/11/2024 */

const startDate = new Date("2024-11-23T00:00:00");

function updateCounter() {
  const now = new Date();

  let difference = now - startDate;

  if (difference < 0) {
    difference = 0;
  }

  const secondsTotal = Math.floor(difference / 1000);

  const days = Math.floor(secondsTotal / 86400);
  const hours = Math.floor((secondsTotal % 86400) / 3600);
  const minutes = Math.floor((secondsTotal % 3600) / 60);
  const seconds = secondsTotal % 60;

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

updateCounter();
setInterval(updateCounter, 1000);


/* الموسيقى */

const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");
const volume = document.getElementById("volume");

function toggleMusic() {
  if (music.paused) {
    music.play();
    musicButton.textContent = "⏸️";
  } else {
    music.pause();
    musicButton.textContent = "▶️";
  }
}

volume.addEventListener("input", () => {
  music.volume = volume.value;
});

music.volume = 0.7;


/* القلوب */

function createHeart(container) {
  const heart = document.createElement("div");

  heart.className = "heart";
  heart.textContent = "❤️";

  heart.style.left = Math.random() * 100 + "%";
  heart.style.fontSize = 12 + Math.random() * 25 + "px";
  heart.style.animationDuration = 5 + Math.random() * 7 + "s";

  container.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 12000);
}

function createHearts() {
  const containers = document.querySelectorAll(".hearts");

  containers.forEach(container => {
    setInterval(() => {
      createHeart(container);
    }, 700);
  });
}
