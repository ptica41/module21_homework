let jsonString = `{"name":"Anton","age":36,"skills":["Javascript","HTML","CSS"],"salary":80000}`;

let jsObject = JSON.parse(jsonString);

console.log(jsObject);

console.log(typeof(jsonString), typeof(jsObject));