// const person = {
//     name: 'Maxim',
//     age: 25,
//     greet: function () {
//         console.log('Greet!')
//     }
// };

// const person = new Object({
//     name: 'Maxim',
//     age: 25,
//     greet: function () {
//         console.log('Greet!')
//     }
// });
//
// Object.prototype.sayHello = function () { // задали новуую функцию.
//     console.log('Hello!')
// };
//
// const lena = Object.create(person);
// lena.name = 'Elena';
//
// // const str = new String('I am string');
// const str = "I am string";

function hello () {
    console.log('Hello', this);
}

const person = {
    name: 'Vito',
    age: 25,
    sayHello: hello,
    sayHelloWindow: hello.bind(document),
    logInfo: function (job, phone) {
        console.group(`${this.name} info:`);
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        console.log(`Job is ${job}`);
        console.log(`Phone is ${phone}`);
        console.groupEnd();
    }
};


const lena = {
    name: 'Elena',
    age: 23
};
// person.logInfo.bind(lena, 'front-end', '8-9998')(); // делает функцию которую можна вызвать где угодно
// person.logInfo.call(lena, 'front-end', '8-9998'); // сразу вызывает функцию
person.logInfo.apply(lena, ['front-end', '8-9998']); // отличаются call | apply только способом передачи данных в функцию
// =================

const array = [1, 2, 3, 4, 5];
//
// function multBy(arr, n) {
//     return arr.map(function (i) {
//         return i * n;
//     });
// }
Array.prototype.multBy = function(n) {
    console.log('multBy ', this);
    return this.map(function (i) {
        return i * n;
    });
};
console.log(array.multBy(20));


