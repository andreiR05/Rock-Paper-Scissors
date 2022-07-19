const item = ["rock","paper","scissor"];
let string = '';
let playerItem = '';
let computerItem = '';
let k = 0;
let m=0;
const res = document.querySelector("#newtext");
let scoreRight= document.querySelector(".box:last-child");
let scoreLeft = document.querySelector(".box:first-child");
let selectors = document.getElementsByClassName("selector");
let retry = document.querySelector(".retry");
console.log(retry);

retry.addEventListener("click",reloadScore,false);

for (i = 0; i < selectors.length; i++) {
    selectors[i].addEventListener("click", playRound,false);
    }


function selectItem(){
    let intrnd = Math.floor(Math.random()*100);
    let indx = intrnd % 3;
    let result = item[indx];
    return result;
}

function playgame(a){

    playerItem = a;
    computerItem = selectItem();
    res.innerHTML = "";
    // finalGame(m,k);
    if(computerItem == playerItem){
        res.append(`Draw...`);
    }else if(((computerItem == "paper") && (playerItem == "scissor")||
             ((computerItem == "rock") && (playerItem == "paper"))||
             ((computerItem == "paper") && (playerItem == "rock")))){
                res.append(`You win this one! .`);
                k++;
    }else{
        res.append(`You lose this one! .`);
        m++;
    }
    scoreLeft.innerHTML="";
    scoreRight.innerHTML="";
    scoreLeft.append(k);
    scoreRight.append(m);
    finalGame(m.k);
}

function playRound(e){
    let value = '';
    if(this.classList.contains('rock')){
        value='rock';
    }
    if(this.classList.contains('paper')){
        value='paper';
    }
    if(this.classList.contains('scissor')){
        value='scissor';
    }
    playgame(value);
}

function finalGame(a,b){
a=m;b=k;
if(a>2){
    console.log("aici");
    res.innerHTML = "You lose!";
    for (i = 0; i < selectors.length; i++) {
    selectors[i].removeEventListener("click", playRound,false);
    }
}else if(b>2){
    res.innerHTML = "You win!";
    for (i = 0; i < selectors.length; i++) {
    selectors[i].removeEventListener("click", playRound,false);
    }
}
}

function reloadScore(e){
    res.innerHTML="";
    m=0;scoreRight.innerHTML="0";
    k=0;scoreLeft.innerHTML="0";
    for (i = 0; i < selectors.length; i++) {
        selectors[i].addEventListener("click", playRound,false);
        }
}


