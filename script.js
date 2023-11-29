// function setTime() {
//     localStorage.setItem('day', new Date().getDate());
//     localStorage.setItem('month', new Date().getMonth() + 1);
//     localStorage.setItem('year', new Date().getFullYear());
//     localStorage.setItem('hours', new Date().getHours());
//     localStorage.setItem('minutes', new Date().getMinutes());
// }

// if (!localStorage.getItem('name')) {
//     localStorage.setItem('name', prompt('Введи имя'));
//     setTime();

// } else {
//     alert(`Добрый день, ${localStorage.getItem('name')}! Давно не виделись. В последний раз вы были у нас ${localStorage.getItem('day')}.${localStorage.getItem('month')}.${localStorage.getItem('year')} в ${localStorage.getItem('hours')}:${localStorage.getItem('minutes')}`);
//     setTime();
// }

// localStorage.clear();


const num = document.querySelector('.main__number');
const lim = document.querySelector('.main__limit');
const btn = document.querySelector('.main__request');
const resp = document.querySelector('.main__response');

const diapazon = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

btn.addEventListener('click', () => {
    resp.textContent = '';
    if (!(num.value in diapazon) && !(lim.value in diapazon)) {
        resp.textContent = 'Номер страницы и лимит вне диапазона от 1 до 10';
    } else if (!(num.value in diapazon) && (lim.value in diapazon)) {
        resp.textContent = 'Номер страницы вне диапазона от 1 до 10';
    } else if ((num.value in diapazon) && !(lim.value in diapazon)) {
        resp.textContent = 'Лимит вне диапазона от 1 до 10';
    } else {
        const options = {
            method: 'GET',
            mode: 'no-cors'
        }
        fetch(`https://picsum.photos/v2/list?page=${num.value}&limit=${lim.value}`, options)
        .then((response) => { return response.json(); })
        .then((data) => { 
            resp.textContent = data;
        })
        .catch(() => { console.log('error') });
    };  
});