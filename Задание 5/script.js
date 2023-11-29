const btn = document.querySelector('.main__button');
const inp = document.querySelector('.main__input');
const ul = document.querySelector('.main__ul');

btn.addEventListener('click', () => {
  fetch(`https://jsonplaceholder.typicode.com/users/${parseInt(inp.value)}/todos`)
  .then((response) => { return response.json(); })
  .then((data) => { 
    if (data != "") {
      xmlString = '';
      data.forEach((el) => {
        if (!el.completed) {
          xmlString += `<li><S>${el.title}</S></li>`
        } else {
          xmlString += `<li>${el.title}</li>`
        }
      });
      console.log(xmlString);
      ul.innerHTML = xmlString;
    } else {
      ul.textContent = 'Пользователь с указанным id не найден';
    }
  })
  .catch(() => { console.log('error') });  
})