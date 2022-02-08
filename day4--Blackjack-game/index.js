let cardel=document.getElementById("cards-el")
let sumel=document.getElementById("sum-el")
let msg=document.getElementById("msg-el")
let randomnum1 =Math.floor(Math.random()*9);
let randomnum2 =Math.floor(Math.random()*9);
var s=0;
let m=0;
let sum1;
let randomnum3;
let sum=randomnum1+randomnum2;
function startgame(){
    sum1=randomnum1+randomnum2;
    if(s===0){
    cardel.textContent= "Cards: "+randomnum1+" "+randomnum2
    sumel.textContent="Sum: "+sum1
    msg.textContent="Play a new card"
    sum=sum1;
    }
    s++;

}
function newcard(){

    if(m==0){
     randomnum3=Math.floor(Math.random()*9);
     sum=sum+randomnum3;
     cardel.textContent+=" "+randomnum3;
     sumel.textContent="Sum: "+sum;
     if(sum===21){
        msg.textContent="Wooho,You got black jack";
        m++;
     }else if(sum<21){
        msg.textContent="Play a new card";
     }else{
        msg.textContent="You are out of game,next time--";
        m++;
     }
    }
}
function newgame(){
    s=0;
    m=0;
    randomnum1 =Math.floor(Math.random()*9);
    randomnum2 =Math.floor(Math.random()*9);
    sum=0;
    cardel.textContent= "Cards: "
    sumel.textContent="Sum: "
    msg.textContent="Play a new card"
}

