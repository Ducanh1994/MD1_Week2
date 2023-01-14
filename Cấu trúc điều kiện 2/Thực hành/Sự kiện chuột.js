let img = document.getElementById("photo").value;
function init() {
    img = document.getElementById("photo");
    img.style.position = "relative";
    img.style.left = "opx";
}
function moveright() {
    img.style.left = parseInt(img.style.left) + 10 + "px";
}
window.onload = init;