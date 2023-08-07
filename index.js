// Your code goes heredocument.addEventListener("DOMContentLoaded", function() {
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    let input = document.getElementById('text')
    input.textContent = "This is really cool!"
});
      
console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);