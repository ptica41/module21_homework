const xmlParser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

const jsParse = xmlParser.parseFromString(xmlString, 'text/xml');

const student = jsParse.querySelectorAll('student');

let mass = [];

student.forEach((el) => {
  let name1 = el.querySelector('name').querySelector('first').textContent;
  let name2 = el.querySelector('name').querySelector('second').textContent;
  let obj = {
    name: name1 + ' ' + name2,
    age: parseInt(el.querySelector('age').textContent),
    prof: el.querySelector('prof').textContent,
    lang: el.querySelector('name').getAttribute('lang')   
  };
  mass.push(obj);
})

let result = {
  list: mass
}

console.log(result);