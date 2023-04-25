const mario =document.querySelector("#mario");
const pipe =document.querySelector("#pipe");

const jump = () =>{
    mario.classList.add('jump')
    setTimeout(() => {
        mario.classList.remove('jump')
    },500)
}
const loop = setInterval(() =>{
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "")
    console.log(marioPosition)
    if(pipePosition  <= 143 & pipePosition >0 & marioPosition < 60){
        pipe.style.animation= "none"
        pipe.style.left = '15%';
        mario.style.animation= "none"
        mario.style.left = '15%';
    }
}, 10)
document.addEventListener('click', jump)
document.addEventListener('keydown', jump)