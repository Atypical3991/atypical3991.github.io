const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (
    mySrc ===
    "images/humanoid_robot_in_a_frontal_view_by_cyberflora_dhoou08-fullview.jpg"
  ) {
    myImage.setAttribute(
      "src",
      "images/ai-futuristic-female-robot-artificial-intelligence-robot-in-the-future-concept-ai-generated-photo.jpeg"
    );
  } else {
    myImage.setAttribute(
      "src",
      "images/humanoid_robot_in_a_frontal_view_by_cyberflora_dhoou08-fullview.jpg"
    );
  }
});

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
