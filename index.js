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

// function hello () {
//     console.log('Hello', this);
// }
//
// const person = {
//     name: 'Vito',
//     age: 25,
//     sayHello: hello,
//     sayHelloWindow: hello.bind(document),
//     logInfo: function (job, phone) {
//         console.group(`${this.name} info:`);
//         console.log(`Name is ${this.name}`);
//         console.log(`Age is ${this.age}`);
//         console.log(`Job is ${job}`);
//         console.log(`Phone is ${phone}`);
//         console.groupEnd();
//     }
// };


// const lena = {
//     name: 'Elena',
//     age: 23
// };
// person.logInfo.bind(lena, 'front-end', '8-9998')(); // делает функцию которую можна вызвать где угодно
// person.logInfo.call(lena, 'front-end', '8-9998'); // сразу вызывает функцию
// person.logInfo.apply(lena, ['front-end', '8-9998']); // отличаются call | apply только способом передачи данных в функцию
//
//===========Задача=================
//
// let person1 = {name: 'Mixa', age: 22, job: 'Front-end'};
// let person2 = {name: 'Sasha', age: 42, job: 'Back-end'};
// let logPerson = () => console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
// function logPerson () {
//     console.log(this, `Person: ${this.name}, ${this.age}, ${this.job}`);
// }
// function bind(context, fn) {
//     return function (...args) {
//         fn.apply(context,args);
//     };
// }
// logPerson.apply(person1, console.log(`Person: ${person1.name}, ${person1.age}, ${person1.job}`));
// bind(person1, logPerson)();
// bind(person2, logPerson)();
// =================

// const array = [1, 2, 3, 4, 5];
//
// function multBy(arr, n) {
//     return arr.map(function (i) {
//         return i * n;
//     });
// }
// Array.prototype.multBy = function(n) {
//     console.log('multBy ', this);
//     return this.map(function (i) {
//         return i * n;
//     });
// };
// console.log(array.multBy(20));


// Замыкание
// function createCalcFunction(n) {
//     return () => console.log(1000 * n);
// }
//
// const calc = createCalcFunction(42);
// calc();

// const createIncrementor = n => num => n + num;

// function createIncrementor (n) {
//     return num => n + num
// }

// const addOne = createIncrementor(1);
// const addTen = createIncrementor(10);
// console.log(addOne(10));
// console.log(addOne(41));
// console.log(addTen(10));
// console.log(addTen(41));

// let urlGenerator = (domain) => url => `https://${url}.${domain}`;
//
// const comUrl = urlGenerator('com');
// let ruUrl = urlGenerator('ru');
//
// console.log(comUrl('google'));
// console.log(ruUrl('yandex'));
// console.log(ruUrl('vk'), comUrl('vk'));

// Асинхронные функции

console.log('Start');
console.log('Start 2');
function timeout2sec() {
    console.log('2 SEC');
}
window.setTimeout(function () {
    console.log('Inside timeout after 1 sec');
}, 1000);
console.log('End');

setTimeout(timeout2sec, 2000); // не вызывать функцию

