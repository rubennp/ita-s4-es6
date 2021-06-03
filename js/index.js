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

/** Exercici 4: Crear una funció que accepti string i retorni revertit. NOTA: usar arrow function,
 *  spread operator i .reverse() **/

let rev = s => [...s].reverse().join('');
console.log(rev("Rubèn"));

/** Exercici 5: Modificar la funció a() per reemplaçar per asnyc/await **/

// function b() {
//     // tasques asíncrones , que triguen una estona..
// }
 
// function a() {
//     // Ens esperem que la funció b acabi
//     b().then() => {
//           doMoreWork();
//     }
// }

async function a() {
    let b = await new Promise((resolve, reject) => {
        setTimeout(() => {
            let expected = true;
            if (expected) resolve("Acabades tasques asíncrones!");
            else reject(new Error("Fallada en asincronia!"));
        }, 1000);
    });

    return b;
}

a().then(result => console.log(`${result} Continuem!`), error => console.log(`${error}`));

/** Exercici 6: Tenim un array de tasques i volem aconseguir un array que contingui únicament els noms de les tasques. 
 **             NOTA: - Usar .forEach() per obtenir aquest array.
 **                   - Usar .map() per obtenir aquest array.
 **/

const tasks = [
{
   'name' : 'Start React web',
   'duration' : 120
},
{
   'name' : 'Work out',
   'duration' : 60
},
{
   'name' : 'Procrastinate on facebook',
   'duration' : 240
}
];

let nameTasks = [];

// amb .forEach()
tasks.forEach(task => nameTasks.push(task.name));
console.log(nameTasks);

// amb .map()
nameTasks = tasks.map(task => task.name);
console.log(nameTasks);

/*
 * NIVELL 2
 */

/**
 *  Exercici 7
 */

let num = (o) => {
    let input;

    do {
        input = parseInt(prompt(`Introdueix un ${o} número de l'1 al 10:`));
    } while (input < 1 || input > 10);

    return input;
};

let n1 = num("1r"), n2 = num("2n");

for (let i = 1; i <= n2; i++) console.log(`${n1} X ${i} = ${n1*i}`);

