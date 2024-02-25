let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice ");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const drawGame=()=>{
    console.log("Game was Draw");
    msg.innerText="The Game Was Draw"
    msg.style.backgroundColor="Orange";
};
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`you win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You lose ${userChoice} beats  your ${compChoice}`;
        msg.style.backgroundColor="red";
    }
}
const playGame=(userChoice)=>{
 console.log("user choice=",userChoice);
 const compChoice=genCompChoice();
 console.log("compchoice=",compChoice);
 if(userChoice===compChoice){
    drawGame()
 }else{
    let userWin=true;
    if(userChoice==="rock"){
        userWin=compChoice==="paper"?false:true;
    }else if(userChoice==="paper"){
        userWin=compChoice==="scissor"?false:true;
    }else{
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
 }
}
const genCompChoice=()=>{
    let option=["rock","paper","scissor"];
    const randIndex=Math.floor(Math.random()*3);
    return option[randIndex];
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
       const userChoice=choice.getAttribute("id");
       playGame(userChoice);
    })
})