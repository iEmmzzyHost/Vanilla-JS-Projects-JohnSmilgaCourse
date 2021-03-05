//https://www.youtube.com/watch?v=3PHXvlpOkf4&t=3528s

const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() { 
    let min = 0;
    let max = colors.length - 1;
    return Math.floor(Math.random() * (max - min + 1) + min);
}