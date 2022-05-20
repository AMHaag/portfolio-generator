const fs =require('fs');
const http = require('http')
var inquirer = require('inquirer')
const generatePage = require('./src/page-template.js')
const profileDataArgs = process.argv.slice(2);
console.log(profileDataArgs);

const [user,github] = profileDataArgs;

console.log(user);
console.log(github);







fs.writeFile('./index.html',generatePage(user,github), ohFuck=>{
if(ohFuck) throw ohFuck;
console.log('Filesaved!');
});