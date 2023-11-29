function setTime() {
    localStorage.setItem('day', new Date().getDate());
    localStorage.setItem('month', new Date().getMonth() + 1);
    localStorage.setItem('year', new Date().getFullYear());
    localStorage.setItem('hours', new Date().getHours());
    localStorage.setItem('minutes', new Date().getMinutes());
}

if (!localStorage.getItem('name')) {
    localStorage.setItem('name', prompt('Введи имя'));
    setTime();

} else {
    alert(`Добрый день, ${localStorage.getItem('name')}! Давно не виделись. В последний раз вы были у нас ${localStorage.getItem('day')}.${localStorage.getItem('month')}.${localStorage.getItem('year')} в ${localStorage.getItem('hours')}:${localStorage.getItem('minutes')}`);
    setTime();
}
