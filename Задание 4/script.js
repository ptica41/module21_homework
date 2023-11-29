const myPromise = new Promise((resolve, reject) => {
    let num = Math.trunc(Math.random() * 100);
    if (num % 2 === 0) {
      setTimeout(()=>{ resolve(num) }, 3000);
      //resolve(num);
    } else {
      setTimeout(()=>{ reject(num) }, 3000);
    }
  });
  
myPromise
    .then((result) => {
    console.log(`Завершено успешно. Сгенерированное число — ${result}`);
  })
    .catch((error) => {
    console.log(`Завершено с ошибкой. Сгенерированное число — ${error}`);
  })