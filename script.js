function openPopup(img) {
  document.getElementById("popup").style.display = "flex";
  document.getElementById("popup-img").src = img.src;
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
