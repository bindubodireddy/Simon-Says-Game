let gameSeq=[];
let userSeq = [];

let btns=["red","yellow","green","purple"];
let start=false;
let level=0;
let highscore = 0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(start == false){
        console.log("game is started");
        start = true;
        levelUp();
    }
   
});
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");        
    }, 250);

}
function levelUp(){
    userSeq = [];
    level++;
    h2.innerText=`level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn =document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
    
}
function checkAns(idx){
    
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        
        h2.innerHTML=`Game Over! Your score is <b>${level-1}</b> <br>press any key to start new game`;
        document.querySelector("body").style.backgroundColor ="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor ="white";            
        },150);
        reset();
    }
}
function btnPress(){
    let btn=this;
    btnFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    let score=level-1;       
    if(score>highscore){
        highscore =score;
        console.log(highscore);
        let h3 =document.querySelector(".score");
        h3.innerText=`High Score ${level-1}`;  
    }
    start = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
 