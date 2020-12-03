let count = 0;
let counter = document.querySelector('.counter');
const addBtn = document.querySelector('#addCountBtn');
const lowerBtn = document.querySelector('#lowerCountBtn');

addBtn.addEventListener('click', addCount);
lowerBtn.addEventListener('click', lowerCount);

function addCount() {
    count++
    counter.innerHTML = count;
    if (count > 0) {
        counter.style.color = 'rgb(2, 151, 2)';
    } else if (count === 0) {
        counter.style.color = 'white';
    }
    counter.animate([{ opacity: '0.2' }, { opacity: '1.0' }], { duration: 600, fill: 'forwards' });
}
function lowerCount() {
    count--
    counter.innerHTML = count;
    if (count < 0) {
        counter.style.color = 'red';
    } else if (count === 0) {
        counter.style.color = 'white';
    }
    counter.animate([{ opacity: '0.2' }, { opacity: '1.0' }], { duration: 600, fill: 'forwards' });
}