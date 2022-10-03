/*const first = 'Nataly';
let second = 'Bos';
var age = 100;
function sayHi() {
    console.log('hi!');
} 
const age = 100;
function go()  {
    const age = 200;
    const hair = 'blonde';
    console.log(age);
    console.log(hair);
}
go();
console.log(age);
let cool;
if (1 === 1) {
cool = true;
}
console.log(cool);
function isCool(name) {
if (name === 'Nataly') {
var cool = true;
}
console.log(cool)
return cool;
}
for(var i = 0; i < 10; i++) {
    console.log(i);
}*/

const dog = 'Margo';

function logDog(dog) {
    console.log(dog);
}

function go() {
    const dog = 'sunny';
    logDog(dog);
}
go();

function sayHi(name) {
    function yell() {
        console.log(name.toUpperCase())
    }
    yell();
}
