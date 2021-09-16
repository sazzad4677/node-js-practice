const fs = require('fs');
// const book = {
//     title: 'ego is the enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data.name, data.age)

data.name = 'ego is the enemy';
data.age = 25;

const userJSON = JSON.stringify(data);
console.log(userJSON)
fs.writeFileSync('1-json.json',userJSON);



// const dataWrite = fs.writeFileSync('1-json.json', data.name, data.age)