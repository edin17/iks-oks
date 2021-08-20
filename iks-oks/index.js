let gameArr = [
    ["0",0,"0"],
    [0,"5",0],
    ["0",0,"0"]
]
let symbol="X";

function restartGame(){
    window.location="file:///C:/Users/PC/OneDrive/Desktop/React/iks-oks/index.html";
}
let moves=0;
function checkWinner(){
    let winnerText=document.getElementById("winner");
    let restartBtn=document.getElementById("restart");
    if(gameArr[0][0]===gameArr[0][1] && gameArr[0][1]===gameArr[0][2] || gameArr[0][0]===gameArr[1][0] && gameArr[1][0]===gameArr[2][0] ||
        gameArr[2][0]===gameArr[2][1] && gameArr[2][1]===gameArr[2][2] || gameArr[0][2]===gameArr[1][2] && gameArr[1][2]===gameArr[2][2] ||
        gameArr[0][0]===gameArr[1][1] && gameArr[1][1]===gameArr[2][2] || gameArr[0][2]===gameArr[1][1] && gameArr[1][1]===gameArr[2][0]
        || gameArr[1][0]===gameArr[1][1] && gameArr[1][1]===gameArr[1][2] || gameArr[0][1]===gameArr[1][1] && gameArr[1][1]===gameArr[2][1] ){
        winnerText.innerHTML="Winner is symbol "+symbol;
        restartBtn.style.display="block";
        return;
    }
    moves++;
    if(moves===9){
        winnerText.innerHTML="Tie";
        winnerText.style.backgroundColor="orange";
        restartBtn.style.display="block";
        
    }
}

function inputMove(i,j,id){
    let clickedField=document.getElementById(id);
    if(gameArr[i][j]===0 || gameArr[i][j]==="0" || gameArr[i][j]==="5"){
        gameArr[i][j]=symbol;
        if(symbol==="X"){
            clickedField.innerHTML=symbol;
            checkWinner();
            symbol="O";
        }else{
            clickedField.innerHTML=symbol;
            checkWinner();
            symbol="X";
        }
        console.log(gameArr)
        
    }else{
        return;
    }

}