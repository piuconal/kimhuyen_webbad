window.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bgMusic");
  audio.play().catch((err) => {
    console.warn("Autoplay may have been blocked:", err);
  });
});

function closePopup() {
  document.getElementById("popup").style.display = "none";

  const audio = document.getElementById("bgMusic");

  audio.pause();
  audio.currentTime = 0;
}

document.getElementById("name").addEventListener("input", function () {
  alert("Are you sure this is your real name?");
});

document.getElementById("submitBtn").addEventListener("mouseover", function () {
  const btn = this;
  const offset = Math.random() > 0.5 ? 100 : -100;
  btn.style.transform = `translateX(${offset}px)`;
});

document
  .getElementById("submitBtn")
  .addEventListener("mouseleave", function () {
    this.style.transform = `translateX(0)`;
  });
