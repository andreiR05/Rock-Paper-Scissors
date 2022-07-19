const item = ["rock","paper","scissor"];
let string = '';
let playerItem = '';
let computerItem = '';
let k = 0;
function selectItem(){
    let intrnd = Math.floor(Math.random()*100);
    let indx = intrnd % 3;
    let result = item[indx];
    return result;
}


function playerSelection(){
    let selector = prompt("Choose your weapon! /n You will fight with a rock , a paper or a scissor?");
    let trueSelector = selector.toLowerCase() ;
    return trueSelector;
}


function game(){
playerItem = playerSelection();
computerItem = selectItem();
if((playerItem != item[0]) && (playerItem != item[1]) && (playerItem != item[2])){
    console.log("Choose one of the presented weapon ,you funny guy!");
}else{
    if(computerItem == playerItem){
        console.log("It's draw!");
        string = `The enemy has choosen ${computerItem} too.\nI would take it as a draw but it depends on your power .`;
        console.log(string);
        if(i != 0) i--;
    }else if(((computerItem == "paper") && (playerItem == "scissor")||
             ((computerItem == "rock") && (playerItem == "paper"))||
             ((computerItem == "paper") && (playerItem == "rock")))){
        console.log(`You win! \nWith your ${[playerItem]} the enemy will not have a chance with a little ${computerItem}.`);
    }else{
        console.log(`You lose! \nWith your ${[playerItem]} the enemy will masacrate you with a little ${computerItem}.`);
        k++;
    }
}
}

for(i=0;i<5;i++){
    game();
}

if(k<3){
    console.log('YOU WIN!!! The score was ' + (5-k) + ' - ' + k + ' for you.');
}else{
    console.log('YOU LOSE!!! The score was '+ k +' - ' + (5-k) +' for the enemy.');
}