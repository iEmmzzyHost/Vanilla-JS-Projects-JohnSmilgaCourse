//det initial value
let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn')
// console.log(btns) //gives an array like node list

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        // console.log(e.currentTarget);
        const styles = e.currentTarget.classList;

        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++
        } else {
            count = 0;
        }


        if (count > 0) {
            value.style.color = "green";
        }
        if (count < 0) {
            value.style.color = "red";
        }
        if (count === 0) {
            value.style.color = "#222";
        }

        value.textContent = count;
    })
})