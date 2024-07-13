let imgs = document.querySelectorAll("img");
let h2 = document.querySelector("h2");
let btn = document.querySelector("#btn");
let yourscore = document.querySelector("#your-score");
let comscore = document.querySelector("#com-score");
let yourScore = 0;
let comScore = 0;

imgs.forEach((img)=>{
    img.addEventListener("click",(e)=>{
     let imgId = img.getAttribute("id");
     playGame(imgId);
     h2.classList.remove("hide");
     btn.classList.remove("hide");
    });
});

const drawGame = ()=>{
    h2.innerText = "Opps! The Game is Draw";
}

const showWinner = ()=>{
    if(usereWin === true){
        h2.innerHTML = "You Win the Game";
        yourScore++;
        yourscore.innerHTML = yourScore;

    }else{
        h2.innerHTML = "You Loss the Game";
        comScore++;
        comscore.innerHTML = comScore;
    }
}

const playGame = (userchoice)=>{
    let comchoice = comTurn();
    if(userchoice === comchoice){
        drawGame();
    }else {
        useerWin = true ;
        if(userchoice=== "rock"){
           usereWin = comchoice === "paper" ? false : true;
        }else if(userchoice==="paper"){
           usereWin = comchoice === "scissor" ? false : true ;
        }else{
          usereWin =  comchoice === "rock" ? false : true ;
        }
        showWinner();
    }
   
}

const  comTurn = ()=>{
    let option = ["rock","paper","scissor"]
    let ranIdx = Math.floor(Math.random() * 3);
    return(option[ranIdx]);
   
   
}

const replaygame = ()=>{
      btn.addEventListener("click",()=>{
        h2.classList.add("hide");
        btn.classList.add("hide");
      })
}
replaygame();
