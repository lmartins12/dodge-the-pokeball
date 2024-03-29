const pikachu = document.querySelector('.pikachu');
const pipe = document.querySelector('.pipe');
const restartButton = document.querySelector('.restart-button');

const jump = () => {
  pikachu.classList.add('jump');

  setTimeout(() => {
    pikachu.classList.remove('jump')
  }, 500)
}


const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft; 
    const pikachuPosition = +window.getComputedStyle(pikachu).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && pikachuPosition < 80) {

        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        pikachu.style.animation = 'none'
        pikachu.style.bottom = `${pikachuPosition}px`
        

        pikachu.src = './img/angry-pikachu.gif'
        pikachu.style.width = '200px'
        pikachu.style.marginLeft = '50px'
        
        restartButton.style.display = 'block';

    } else {
        restartButton.style.display = 'none';
    }

}, 10);

document.addEventListener('keydown', jump);
document.addEventListener('mousedown', jump);
document.addEventListener('touchstart', jump);