/*
 * NIVELL 1
 */

/** Exercici 1: convertir a funcions fletxa **/

// function multiply(num1, num2) {
//     return num1*num2;
// }

const multiply = (num1, num2) => num1*num2;
console.log(multiply(2, 3));

// function toCelsius(fahrenheit) {
//     return (5/9)*(fahrenheit-32);
// }

const toCelsius = fahrenheit => (5/9)*(fahrenheit-32);
console.log(toCelsius(99));

// This function return a string padded with leading zeros
// function padZeros(num, totalLen) {
//     var numStr = num.toString();
//     var numZeros = totalLen - numStr.length;
//     for (var i = 1; i <= numZeros; i++) {
//         numStr = "0" + numStr;
//     }
//     return numStr;
// }

const padZeros = (num, totalLen) => num.toString().padStart(totalLen, '0');
console.log(padZeros(34, 5));

// function power(base, exponent) {
//     var result = 1;
//     for (var i = 0; i < exponent; i++) {
//         result *= base;
//     }
//     return result;
// }

const power = (base, exponent) => base ** exponent;
console.log(power(3,2));

// function greet(who) {
//     console.log("Hello" + who);
// }

const greet = who => `Hello ${who}`;
console.log(greet("Rubèn"));

/** Exercici 2: arregla l'error del següent bloc de codi */

// users.map(function (user) {
//     user.firstName;
// });
 
 let users = 
 [{ firstName: 'Homer', lastName: 'Simpson' },
 { firstName: 'Marge', lastName: 'Simpson' },
 { firstName: 'Bart', lastName: 'Simpson' },
 { firstName: 'Lisa', lastName: 'Simpson' },
 { firstName: 'Maggie', lastName: 'Simpson' }];

users = users.map(user => user.firstName);
console.log(users);

/** Exercici 3: donat el següent array de strings mostrar per consola la frase completa
 **             usant .reduce() **/

 let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

 console.log(epic.reduce((p, f) => `${p} ${f}`));