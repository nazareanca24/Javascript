var startButton=document.querySelector("input");
var speed=2000;
startButton.addEventListener("click", start);
window.addEventListener("keypress",keyPressed);
function start() {
    startButton.style.display="none";
    newLetter();
}
function keyPressed() {
    let letter =event.key;
    div=document.querySelector("." + letter);
    document.querySelector("body").removeChild(div);
}
function randomLetter() {
    let letters ="abcdefghijklmnoprstuvwxyz";
    let pos=randomNumber(letters.length);
    return letters.charAt(pos);
}
function randomPosition() {
    return randomNumber(95) +"%";
}
function randomNumber(max) {
    return Math.round (Math.random () * max);
}
function start() {
    startButton.style.display="none";
    console.log(randomLetter());
}
function newLetter() {
    let letter=randomLetter();
    let x= randomPosition();
    let y= randomPosition();
    let div=document.createElement("div");
    div.innerText=letter;
    div.style.top=y;
    div.style.left=x;
    div.className="boxLetter" +letter;
    document.querySelector("body").appendChild(div);
    setTimeout(newLetter, speed);
}
function randomLetter() {
    let letters ="abcdefghijklmnoprstuvwxyz";
    let pos=randomNumber(letters.length);
    return letters.charAt(pos);
}
function randomPosition() {
    return randomNumber(95) +"%";
}
function randomNumber(max) {
    return Math.round(Math.random() * max);
}