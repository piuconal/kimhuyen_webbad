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

const countrySlider = document.getElementById("countrySlider");
const countryLabel = document.getElementById("countryLabel");

const countries = [
  "Vietnam",
  "USA",
  "Canada",
  "UK",
  "Australia",
  "North Pole",
  "South Pole",
  "Atlantis",
  "Narnia",
  "Zebes",
  "Middle Earth",
  "Wakanda",
  "Mars Colony",
  "Jupiter Station",
  "Nowhere",
  "Somewhere Else",
  "Area 51",
  "Under the Bed",
  "Your Imagination",
  "Mushroom Kingdom",
  "Hyrule",
  "Cyberdyne",
  "Gotham",
  "Metropolis",
  "Springfield",
  "The Upside Down",
  "Ocean Floor",
  "Cloud City",
  "Tatooine",
  "Dagobah",
  "Asgard",
  "Helheim",
  "Valhalla",
  "Pandora",
  "District 12",
  "Neo Tokyo",
  "The Matrix",
  "Raccoon City",
  "Silent Hill",
  "Bikini Bottom",
  "The Shire",
  "The Void",
];

countrySlider.addEventListener("input", function () {
  const index = parseInt(this.value);
  countryLabel.textContent = countries[index];
});

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
