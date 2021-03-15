// RART 1
// Ex1 
//

let a = 0;
let b = 10;
let result = (a + b < 10) ? 'Few' : 'Many'
console.log(result)

// Ex2
// 

let age = 15;
if (age >= 18 && age <= 90) {
    console.log('Access granted');
} else {
    console.log('Access denied');
}

// Ex3
//

let userName = prompt('What is your name?');
alert(`Hello ${userName}`);
let birthYear = prompt('What is your birthday year?');
let currYear = new Date().getFullYear();
let calcAge = currYear - birthYear;
alert(`${userName}, your age is ${calcAge} years`);

// Ex4
//


let grade = prompt('What is your grade (number)?');
if (grade < 60) {
    alert(`${grade} means F`);
} else if (grade < 70) {
    alert(`${grade} means D`);
} else if (grade < 80) {
    alert(`${grade} means C`);
} else if (grade < 90) {
    alert(`${grade} means B`);
} else if (grade < 100) {
    alert(`${grade} means A`);
} else {
    alert(`Error, you've inserted wrong value - ${grade}. Check it, please!`);
}

// PART 2
// Ex1

let a = 1;
let b = 1;

c = ++a;
d = b++;

console.log(a); // думав  1 - виводиться 2 - помилку зрозумів, думав +1 буде тільки до с та d, але a та b також +1 https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Operators/Increment
console.log(b); // думав  1 - виводиться 2
console.log(c); // думав  2 - виводиться 2
console.log(d); // думав  1 - виводиться 1

// Ex2
//

let language = prompt('What is your language?');
switch (language) {
    case 'chinese':
    case 'mandarin':
        alert('MOST number of native speakers!')
        break;
    case 'spanish':
        alert('2nd place in number of native speakers')
        break;
    case 'english':
        alert('3rd place')
        break;
    case 'hindi':
        alert('Number 4')
        break;
    case 'arabic':
        alert('5th most spoken language')
        break;
    default:
        alert('Great language too :D')
        break;
}