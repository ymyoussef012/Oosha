// =========================
// كلمة السر
// =========================

function checkPassword() {
  const password = document.getElementById("password").value;
  const wrong = document.getElementById("wrong");

  if (password === "love") {
    wrong.textContent = "";
    nextPage("message");
  } else {
    wrong.textContent = "كلمة السر غلط 😜❤️";
  }
}


// =========================
// التنقل بين الصفحات
// =========================

function nextPage(pageId) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  const page = document.getElementById(pageId);

  if (page) {
    page.classList.add("active");
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}


// =========================
// العداد من 23/11/2024
// =========================

const startDate = new Date("2024-11-23T00:00:00");

function updateCounter() {
  const now = new Date();
  let difference = now - startDate;

  if (difference < 0) {
    difference = 0;
  }

  const totalSeconds = Math.floor(difference / 1000);

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

updateCounter();
setInterval(updateCounter, 1000);


// =========================
// الأغاني
// =========================

const songs = [
  "7647039718802082568.mp3",
  "7648907516901903105.mp3",
  "7671121720533568276.mp3",
  "7671348267992713991.mp3",
  "7685812748542561041.mp3"
];

let currentSong = 0;

const audio = document.getElementById("audio");
const playButton = document.getElementById("playButton");
const volume = document.getElementById("volume");

function loadSong() {
  audio.src = "music/" + songs[currentSong];
  audio.load();
}

function toggleMusic() {

  if (audio.paused) {
    audio.play()
      .then(() => {
        playButton.textContent = "⏸️";
      })
      .catch(() => {
        playButton.textContent = "▶️";
      });

  } else {
    audio.pause();
    playButton.textContent = "▶️";
  }
}

function nextSong() {

  currentSong++;

  if (currentSong >= songs.length) {
    currentSong = 0;
  }

  loadSong();

  audio.play()
    .then(() => {
      playButton.textContent = "⏸️";
    })
    .catch(() => {
      playButton.textContent = "▶️";
    });
}

function previousSong() {

  currentSong--;

  if (currentSong < 0) {
    currentSong = songs.length - 1;
  }

  loadSong();

  audio.play()
    .then(() => {
      playButton.textContent = "⏸️";
    })
    .catch(() => {
      playButton.textContent = "▶️";
    });
}


// لما الأغنية تخلص تنتقل للي بعدها
audio.addEventListener("ended", () => {
  nextSong();
});


// مستوى الصوت
audio.volume = 0.7;

volume.addEventListener("input", () => {
  audio.volume = volume.value;
});


// تحميل أول أغنية
loadSong();


// =========================
// القلوب المتحركة
// =========================

function createHeart() {

  const heart = document.createElement("div");

  heart.className = "heart";
  heart.textContent = Math.random() > 0.5 ? "💗" : "💕";

  heart.style.left = Math.random() * 100 + "vw";

  const size = Math.floor(Math.random() * 18) + 15;
  heart.style.fontSize = size + "px";

  const duration = Math.floor(Math.random() * 5) + 5;
  heart.style.animationDuration = duration + "s";

  document.getElementById("hearts").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

setInterval(createHeart, 500);
