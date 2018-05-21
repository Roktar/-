var d = { "name" : "asd", "age" : 123 };
var dtj = JSON.stringify(d);
console.log(dtj + ", " + typeof(dtj));
var jtd = JSON.parse(dtj);
console.log(jtd + ", " + typeof(jtd));