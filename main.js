alert();

console.log("Hello" + " JS");
console.log("Hello".length);
console.log("Hello".charAt(1));
console.log("Hello JS".replace("Hello", "Goodbye"));
console.log("Hello world".toUpperCase());

var name = "foo";
console.log(name);

let number = 1;
console.log(number);

const PI = 3.14;

// PI = 3.1415926
// console.log(PI)

let x = ++number;
console.log(number === x);
let y = number++;
console.log(number === y);

// automatic conversation
console.log(1 + "2" + 3); // "1" + "2" + "3"
console.log(1 + 2 + "3");
console.log(1 == "1");
console.log(1 === "1");

if (PI === 3.1415) {
    console.log(3.1415);
} else if (PI === 3.141) {
    console.log(3.141);
} else {
    console.log(PI);
}

let i = 0;
while (i <= 5) {
    console.log("i = " + i);
    ++i;
}

do {
    console.log("i = " + i);
} while (i <= 5);

if (true) {
    var age1 = 14;
}
console.log("age1=" + age1);

if (true) {
    let age2 = 15;
}
// console.log("age2=" + age2);

let age = 0;
for (let j = 0; j < 5; ++j) {
    console.log("j = " + j);
    ++age;
}

let allowed = (age >= 18 ? true : false);
console.log(allowed)

name = "joe";
switch (name) {
    case "weddy":
        console.log("weddy");
        break;
    case "joe":
        console.log("joe");
        break;
    default:
        console.log("default");
}

let person = new Object();
let student = {};

person = { name: "Jason", age: 20, email: "jason@example.com", contact: { phone: "1234567", rednote: "momo" } };

person.contact.wechat = "wx123";
console.log(person);
console.log(person.contact.phone);
console.log(person["contact"]["phone"]);

let arr = new Array();
let nums = [];

nums[0] = 0;
nums[1] = 1;
nums[5] = 5;
console.log(nums);

for (let i = 0; i < nums.length; ++i) {
    console.log(nums[i]);
}

arr[0] = "a";
arr[1] = "b";
arr[2] = "c";
for (let index in arr) {
    console.log("letter = " + arr[index]);
}
arr.push("d");
arr.push("e");
arr.pop();
console.log(arr);
arr.reverse();
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift("d");
console.log(arr);

number = 0;
function add(x) {
    number += x;
}
add(10);
console.log(`number = ${number}`);

function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; ++i) {
        total += arguments[i];
    }
    return total;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

function makeAdder(value1) {
    return function (value2) {
        return value1 + value2;
    };
}
let adder = makeAdder(1);
number = 0;
number = adder(number);
console.log(`number = ${number}`);