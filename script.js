console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");  
let gameover = new Audio("gameover.mp3");
let turn = "X"; 
let gameoverNew = false;

//FUNCTION TO CHANGE THE TURN
const changeTurn=()=>{
    return turn ==="X"?"0": "X"
}

//FUNCTION TO CHECK FOR A WIN
const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],     
        [3, 4, 5],   
        [6, 7, 8],   
        [0, 3, 6], 
        [1, 4, 7],  
        [2, 5, 8], 
        [0, 4, 8],  
        [2, 4, 6]  
    ];
wins.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) &&
            (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) &&
            (boxtexts[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won!";
            gameoverNew = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.width="30vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        }
    });
}


//GAME LOGIC
//music.play()
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeTurn();
            audioTurn.play();
            checkWin();
            if(!gameoverNew){
            document.getElementsByClassName("info")[0].innerText="Turn for " + turn;
            }
        }
    })
})
//ADD ONCLICK LISTENER TO RESET BUTTON
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    gameoverNew = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector(".line").style.width = "0"; 
});

