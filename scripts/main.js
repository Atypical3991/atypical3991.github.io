function toggleText() {
  const extraText = document.getElementById("extraText");
  const btn = document.getElementById("toggleBtn");

  if (extraText.style.display === "none") {
    extraText.style.display = "block";
    btn.textContent = "Show less";
  } else {
    extraText.style.display = "none";
    btn.textContent = "Load more";
  }
}
