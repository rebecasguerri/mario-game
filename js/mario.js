const mario =document.querySelector("#mario")
const pipe =document.querySelector("#pipe")
const marioJS = window.matchMedia("(max-width: 430px)");
const marioDeath = document.querySelector("#mario_death")
const audioJump = document.querySelector("#audio-jump")
const textStart = document.querySelector('#text-start')
const time = document.querySelector('#data-time')

const jump = () =>{
    mario.classList.add('jump')
    audioJump.currentTime = 0.1;
    audioJump.volume = 0.1;
    audioJump.play();
    time.innerHTML= 2;
    setTimeout(() => {
        mario.classList.remove('jump')
    },500)
}
const loop = setInterval(() =>{
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "")
    if(pipePosition  <= 143 & pipePosition >0 & marioPosition < 60){
        pipe.style.animation= "none"
        pipe.style.left = `${pipePosition}px`;
        mario.style.animation= "none"
        mario.style.bottom = `${marioPosition}px`;
        mario.src ="./images/game-over.png";
        mario.style.width = "6rem";
        mario.style.left="3rem";
        marioDeath.currentTime = 0.1;
        marioDeath.volume = 0.2;
        marioDeath.play();
        document.getElementById("text-start").style.color = "red";
        document.getElementById("text-start").innerHTML = "<strong>GAME OVER</strong>";
        clearInterval(loop)
    }
}, 10)

document.addEventListener('click', jump)
document.addEventListener('keydown', jump)