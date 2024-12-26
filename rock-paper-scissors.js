let choices=document.querySelectorAll(".block");
let result=document.querySelector(".message");
let scoreuser=document.querySelector("#userScore");
let scorecomp=document.querySelector("#compScore");


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let UserChoice=choice.getAttribute("id");
        console.log("User choice: ",UserChoice);
        playGame(UserChoice);
    });
});

const compChoice=()=>{
    let options=["rock","paper","scissors"];
    let randomIndex=Math.floor(Math.random()*3);
    return options[randomIndex];
}
const drawGame=()=>{
    result.innerText="Game Draw! Try again!";
    result.style.backgroundColor="rgb(81, 17, 70)"
}

let userScore=0;
let compScore=0;
const showWinner=(userWin)=>{
    if(userWin==true){
        result.innerText="Congratulations! You have won by Computer!";
        result.style.backgroundColor="green";
        userScore++;
        scoreuser.innerText=userScore;
    }
    else{
        result.innerText="Oops! You have lost by Computer!";
        result.style.backgroundColor="red";
        compScore++;
        scorecomp.innerText=compScore;
    }
}
const playGame=(UserChoice)=>{
    let CompChoice=compChoice();
    console.log("Computer choice: ",CompChoice);
    if(UserChoice==CompChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(UserChoice=="rock"){
            userWin=CompChoice=="paper"? false:true;
        }
        else if(UserChoice=="paper"){
            userWin=CompChoice=="rock" ?true:false;
        }
        else{
            userWin=CompChoice=="rock" ? false :true;
        }
        showWinner(userWin);
    }
}