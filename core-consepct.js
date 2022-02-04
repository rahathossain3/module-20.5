var rahat = 1;
let hossain = 2;
const imon = 3;

// Array, loop (while , for) , conditions, function
let array = [2, 5, 7, 8, 9];
var arr = ['rahat', 'hossain', 'imon'];
var fahim = arr[5];
arr.push('khan');
console.log(fahim);
console.log(arr.indexOf('kk'));
console.log(arr.length);
arr.shift();
arr.unshift('ok');
console.log(arr);
array[2] = 9;
console.log(array);


//leapyear
const year = 1822;
if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
    console.log(true);
}
else {

    console.log(false)
}



//odd even//
function oddOrEven(numbers) {
    if (numbers % 2 == 0) {
        const result = "even";
        return result;
    }
    else if (numbers % 2 != 0) {
        const result = "odd";
        return result;
    }
}
console.log(oddOrEven(15));



// factorial (while, for)
function fact(number1) {
    var fact1 = 1;
    for (let i = 1; i <= number1; i++) {
        fact1 = fact1 * i;
    }
    return fact1;
}

let num = fact(7);
console.log(num);

function factorial(num) {
    var fact2 = 1;
    var i = 1;
    while (i <= num) {
        fact2 = fact2 * i;
        i++;
    }
    return fact2;
}
let newFactorial = factorial(6);
console.log('factrorial is ', newFactorial);

// revers way 

function factorial2(num) {
    var fact2 = 1;
    var i = num;
    while (i >= 1) {
        fact2 = fact2 * i;
        i--;
    }
    return fact2;
}
let newFactorial2 = factorial2(7);
console.log('factrorial is ', newFactorial2);

// new home Work
// 1. celcius To Farenheit(celsius) {

// }

// 2. Farenheit to celcius
// 3. grade calculation
// 4. simple interst
