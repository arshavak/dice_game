const playbtn = document.querySelector("#btn");
const resetbtn = document.querySelector("#resetbtn");
const wonetext = document.querySelector("#woneText");
const player1 = document.querySelector("#die1");
const player2 = document.querySelector("#die2");
const clickSound = new Audio("click_sound.mp3")
let player1Run= document.querySelector("#p1c");
let player2Run = document.querySelector("#p2c");
let pari = document.querySelector("#pariset");
let ccSpan = document.querySelector("#cc");
let clickCount = 1;
ccSpan.value = 0;
playbtn.addEventListener("click", ()=>{
    ccSpan.value = clickCount;
    if(pari.value==clickCount){
        playbtn.disabled = true;
        playbtn.style.backgroundColor = "darkred"
        playbtn.style.transform = "translateY(1px)";
        playbtn.style.boxShadow = "0 4px 4px #d3d3d3"
        playbtn.style.cursor =  "no-drop";
    }
const random1 = Math.floor(Math.random()*5)+1;
const random2 =Math.floor(Math.random()*5)+1;
    player1.src = `images/dice${random1}.png`
    player2.src = `images/dice${random2}.png`
    clickSound.play();
  
    const NumberCounting =() =>{
        if (player1Run && player2Run) {
            // Extract the current value, convert it to a number, and then add the random number
            const current1 = parseInt(player1Run.innerText) || 0;
            const current2 = parseInt(player2Run.innerText) || 0;
    
            // Update the inner text with the sum of the current value and the random number
            player1Run.innerText = `${current1 + random1}`;
            player2Run.innerText = `${current2 + random2}`;

            if (player1Run.innerText===player2Run.innerText){
                wonetext.innerHTML="Game is Draw!"
            }else if(player1Run.innerText < player2Run.innerText){
                wonetext.innerHTML=`Player 2 wins!`
            }else{
                wonetext.innerHTML=`Player 1 wins!`
            }

        } else {
            console.error("Could not find player1Run or player2Run elements");
        } 
    }
NumberCounting();
clickCount++
});

resetbtn.style.backgroundColor = "red";

resetbtn.addEventListener("click", () => {
    player1Run.innerText = '0';
    player2Run.innerText = '0';
    wonetext.innerHTML = 'Who is winner?';
    player1.src = `images/dice${1}.png`
    player2.src = `images/dice${1}.png`
    playbtn.disabled = false;
    clickCount = 1;
    ccSpan.value = 0;
    playbtn.style.backgroundColor = ""
    playbtn.style.transform = "";
    playbtn.style.boxShadow = ""
    playbtn.style.cursor =  "";
    
});