function openIMDb() {
  window.open("https://www.imdb.com/title/tt34794166", "_blank");
}

function openWatch() {
  window.open("https://drive.proton.me/urls/JJXGFZGAJC#PAJBjCj0Vunt", "_self");
}

for (let i = 0; i < 120; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.top = `${Math.random() * 100}%`;
  star.style.left = `${Math.random() * 100}%`;
  star.style.animationDuration = `${1.5 + Math.random()}s`;
  document.body.appendChild(star);
}

document.addEventListener("keydown", function (e) {
  const key = e.key;
  const ctrl = e.ctrlKey;
  const shift = e.shiftKey;
  const meta = e.metaKey;
  const isAllowed = key === "F11" || key === "F5";
  
  if (key === "Tab") {
    e.preventDefault();
  }

  if (isAllowed) return;
  const blockedCombinations =
    key === "F12" ||
    (ctrl && shift && ["I", "J", "C"].includes(key)) ||
    (meta && shift && ["C"].includes(key)) ||
    (meta && ["I"].includes(key)) ||
    (ctrl && ["U"].includes(key.toUpperCase()));
  
  if (blockedCombinations) {
    e.preventDefault();
    e.stopPropagation();
  }
});