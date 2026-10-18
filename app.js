let btn1 = document.getElementById("guessBtn");
let input = document.getElementById("userGuess");
let msg = document.getElementById("message");
let left = document.getElementById("attemptsLeft");
let btn2 = document.getElementById("restartBtn");
let count = 10;
let secretNum = Math.floor(Math.random()*10)+1;
btn1.addEventListener("click",()=>{
    let userNum = Number(input.value);
    if(input.value!=="" && userNum>=1 && userNum<11){
    count--;
    if(count>=0)
    left.innerText = count; 
    }
    if(userNum>10 || userNum<1){
        msg.innerText = "Please Enter a valid number!"
        input.value = "";
    }
    else if(userNum===secretNum){
        msg.innerText = `🎉 You Won! You guessed it in ${10 - count} attempts!`;
        input.value = "";
        btn2.classList.remove("hidden");

    }else if(input.value>secretNum){
        msg.innerText = "Go Lower";
        input.value = "";
    }else{
        msg.innerText = "Go Upper";
        input.value = "";
    }
   
    if(left.innerText==="0"){
        msg.innerText = "OOPS U LOST try again!";
        btn2.classList.remove("hidden");
    }    
});

btn2.addEventListener("click",()=>{
    count = 10;
    left.innerText = count;
    msg.innerText = "Good Luck !";
    btn2.classList.add("hidden");
})

    
