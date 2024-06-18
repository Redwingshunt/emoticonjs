const myBox = document.getElementById("myBox");

document.addEventListener("keydown", event => {
   myBox.textContent ="😀";
   myBox.style.backgroundColor ="Red";
});

document.addEventListener("keyup", event => {
   myBox.textContent ="😁";
   myBox.style.backgroundColor ="green";
});

const button1 = document.getElementById("button1");
document.addEventListener("click", event => {
   myBox.textContent ="😈";
   myBox.style.backgroundColor ="black";
});
