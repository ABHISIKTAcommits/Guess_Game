let c=Math.floor(Math.random()*100)+1;
let attempt=0;
function checkg(){
    let userg=parseInt(document.getElementById("guess").value);
    let message = document.getElementById("message");
    attempt++;
if(isNaN(userg) || userg<1 || userg>100){
    message.innerText = "Please enter a valid number between 1 and 100. 🫠";
}
else if (userg > c) {
    message.innerText = "Too high! Try again. 😕";
} else if (userg < c) {
    message.innerText = "Too low! Try again. 🙄";
} else {
    message.innerText = `🎉 Congratulations! You guessed it in ${attempt} attempts.`;
    document.getElementById("submit").disabled = true;
}
}
