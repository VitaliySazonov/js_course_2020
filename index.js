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

// console.log('Start');
// console.log('Start 2');
// function timeout2sec() {
//     console.log('2 SEC');
// }
// window.setTimeout(function () {
//     console.log('Inside timeout after 1 sec');
// }, 1000);
// console.log('End');
//
// setTimeout(timeout2sec, 2000); // не вызывать функцию
//

// Promise

// console.log('Request data');

// setTimeout(() => {
//     console.log('Prepering data...');
//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     };
//     setTimeout(() => {
//         backendData.modified = true;
//         console.log('Data received', backendData)
//     }, 2000);
// }, 2000);

// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Prepering data...');
//         const backendData = {
//             server: 'aws',
//             port: 2000,
//             status: 'working'
//         };
//         resolve(backendData);
//     }, 5000);
// });
//
// p
//     .then(data => {
//     // console.log('Promise resolved', data);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true;
//             resolve(data);
//             // console.log('Data received', data)
//         }, 2000);
//     });
//     // p2.then(clientData => {
//     //     console.log('clientData', clientData);
//     // })
// })
//     .then(clientData => {
//     // console.log('clientData', clientData);
//     clientData.fromPromise = true;
//     return clientData;
// })
//     .then(data => console.log('Modified data', data))
//     .catch(err => console.log('Error', err))
//     .finally(()=> console.log('Finally'));

// const sleep = ms => new Promise(resolve => {
//     setTimeout(() => resolve(), ms)
// });
// sleep(2000).then(() => console.log('After 2 sec'));
// sleep(3000).then(() => console.log('After 3 sec'));
// sleep(1000).then(() => console.log('After 1 sec'));

// Promise
//     .all([sleep(2000), sleep(5000)]) // ждёт все данные чтоб вывести 5000мс
//     .then(() => console.log('All promises'));
//
// Promise
//     .race([sleep(3000), sleep(5000)]) // отработает первый промис в 3000мс
//     .then(() => console.log('Race promises'));

//Object.create

// const person = Object.create(
//     {
//         calculateAge() {
//             console.log('Age: ', new Date().getFullYear() - this.birthyear)
//         }
//     },
//     {
//         name: {
//             value: 'Vito',
//             enumerable: true, // false по-умолчанию. Для того чтоб его было видно в цикле for
//             writable: true, // false по-умолчанию. Разрешает писать/изменять данные
//             configurable: true, //false по-умолчанию. Манипулировать с ключами объекта
//         },
//         birthyear: {
//             value: 1993,
//             writable: false,
//             enumerable: true,
//             configurable: false
//         },
//         age: {
//             get() {
//                 return new Date().getFullYear() - this.birthyear;
//             },
//             set(value) {
//                 document.body.style.background = 'red';
//                 console.log('Set age', value);
//             }
//         }
//     });

// person.name = 'Maxim';
// hasOwnProperty(key) всегда использовать с for in циклами
// for (let key in person) {
//     if (person.hasOwnProperty(key)) console.log('Key', key, person[key]);
//
// }

// ES 6 Class


// const animal = {
//     name: 'Dog',
//     age: 5,
//     hasTail: true,
// };


// class Animal {
//
//     static type = 'ANIMAL';
//
//     constructor(options) {
//         this.name = options.name;
//         this.age = options.age;
//         this.hasTail = options.hasTail;
//     }
//
//     voice() {
//         console.log('I am animal');
//     }
// }


// const animal = new Animal({
//     name: 'Dog',
//     age: 5,
//     hasTail: true,
// });

// class Cat extends Animal {
//     static type = 'CAT';
//     constructor(options) {
//         super(options);
//         this.color = options.color;
//     }
//     voice() {
//         super.voice();
//         console.log('I am cat');
//     }
//     get ageInfo() {
//         return this.age * 7;
//     }
//     set ageInfo(newAge) {
//         this.age = newAge;
//     }
// }
//
// const cat = new Cat({
//     name: 'Cat',
//     age: 7,
//     hasTail: true,
//     color: 'black'
// });



// class Component {
//     constructor(selector) {
//         // this.$el = $(selector);
//         this.$el = document.querySelector(selector);
//     }
//     hide() {
//         this.$el.style.display = 'none'
//     }
//     show() {
//         this.$el.style.display = 'block';
//     }
// }
// class Box extends Component {
//     constructor(options) {
//         super(options.selector);
//         this.$el.style.width = this.$el.style.height = options.size + 'px';
//         this.$el.style.background = options.background;
//     }
// }
//
// const box1 = new Box({
//     selector: '#box1',
//     size: 100,
//     background: 'red'
// });
// const box2 = new Box({
//     selector: '#box2',
//     size: 120,
//     background: 'blue'
// });
//
// class Circle extends Box {
//     constructor(options) {
//         super(options);
//         this.$el.style.borderRadius = '50%'
//     }
// }
//
// const circle = new Circle({
//     selector: '#circle',
//     size: 90,
//     background: 'green'
// });


// Async await


// const delay = ms => {
//     return new Promise((r => setTimeout(() => r(), ms)));
// };

// delay(2000).then(() => console.log('2 Seconds'));

// const url = 'https://jsonplaceholder.typicode.com/todos';

// function fetchTodos() {
//     console.log('Started...');
//     return delay(2000)
//         .then(() => fetch(url))
//         .then(response => response.json());
// }
//
// fetchTodos()
//     .then(data => console.log('Data', data))
//     .catch(e => console.log(e));
//

// async function fetchAsyncTodos() {
//     console.log('Start...');
//     try {
//         await delay(2000);
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log('Data: ', data);
//     } catch (e) {
//         console.error(e);
//     } finally {
//         console.log('Yes')
//     }
//
// }
//
//
// fetchAsyncTodos().then(() => console.log('End'));
//

// Proxy


// const person = {
//     name: 'Vito',
//     age: 25,
//     job: 'Front-end',
// };
//
// const op = new Proxy(person, {
//     get(target, prop) {
//         // console.log(`Get prop ${prop}`);
//         if (!(prop in target)) { // Класный пример op.age_name_job // 25 Vito Frontend
//             return prop
//                 .split('_')
//                 .map(p => target[p])
//                 .join(' ');
//         }
//         return target[prop];
//     },
//     set(target, prop, value) {
//         if(prop in target) {
//             target[prop] = value;
//         } else {
//             throw new Error(`No ${prop} field in target`);
//         }
//     },
//     has(target, prop) { // Должен вернуть либо true либо false
//         return ['age', 'job'].includes(prop)
//     },
//     deleteProperty(target, prop) { // Удаление поля в объекте Proxy
//         console.log('Deleting...', prop);
//         delete target[prop];
//         return true;
//     }
// });

// Proxy functions

// const log = text => `Log: ${text}`;
// const fp = new Proxy(log, {
//     apply(target, thisArg, args) {
//         console.log('Calling fn...');
//         return target.apply(thisArg, args).toUpperCase();
//
//     }
// });

// Proxy Classes

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
//
// const PersonProxy = new Proxy(Person, {
//     construct(target, args) {
//         console.log('Construct...');
//         return new Proxy(new target(...args), {
//             get(t, prop) {
//                 console.log(`Getting prop ${prop}`);
//                 return t[prop];
//             }
//         });
//     }
// });
//
// const p = new PersonProxy('Maxim', 30);

// Proxy Wrapper

// const withDefaulvalue = (target, defaulValue) => {
//     return new Proxy(target, {
//         get: (obj, prop) => (prop in obj) ? obj[prop] : defaulValue
//     })
// };
// // вернёт ключ и значени ключа, если ключ неправильный - вернёт 10.
// const position = withDefaulvalue({ x: 24, y: 42 },10);
// console.log(position);
//
// // Hidden properties
//
// const withHiddeProps = (target, prefix = '_') => {
//     return new Proxy(target, {
//         has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),
//         ownKeys: obj => Reflect.ownKeys(obj).filter(p => !p.startsWith(prefix)),
//         get: (obj, prop, receiver) => (prop in receiver)
//             ? obj[prop]
//             : void 0, // undefined
//     });
// };
// const data = withHiddeProps({
//     name: 'Vito',
//     age: 25,
//     _uid: '32412123213' // это будет приватное поле в объекте из-за void 0
// });

// Optimization

// const userData = [
//     {id: 1, name: 'Vito', job: 'Fullstack', age: 25},
//     {id: 2, name: 'Carl', job: 'Front', age: 26},
//     {id: 3, name: 'Den', job: 'Back', age: 27},
//     {id: 4, name: 'Joe', job: 'DevOps', age: 28}
// ];

// const index = {};
// userData.forEach(i => index[i.id] = i);


// const IndexArray = new Proxy(Array, {
//     construct(target, [args]) {
//         const index = {};
//         args.forEach(item => index[item.id] = item);
//
//         return new Proxy(new target(...args), {
//             get(arr, prop) {
//                 switch (prop) {
//                     case 'push':
//                         return item => {
//                             index[item.id] = item;
//                             arr[prop].call(arr, item);
//                         };
//                     case 'findById':
//                         return id => index[id];
//                     default:
//                         return arr[prop]
//                 }
//             }
//         });
//     }
// });
// const users = new IndexArray([
//     {id: 1, name: 'Vito', job: 'Fullstack', age: 25},
//     {id: 2, name: 'Carl', job: 'Front', age: 26},
//     {id: 3, name: 'Den', job: 'Back', age: 27},
//     {id: 4, name: 'Joe', job: 'DevOps', age: 28}
// ]);

// Generators

// function* strGenerator() {
//     yield 'H';
//     yield 'e';
//     yield 'l';
//     yield 'l';
//     yield 'o';
// }
//
// const str = strGenerator();

// function* numberGen(n = 10) {
//     for (let i = 0; i < n; i++) {
//         yield i;
//     }
// }
//
// const num = numberGen(7);

// const iterator = {
//     [Symbol.iterator] (n = 10) {
//         let i = 0;
//         return {
//             next() {
//                 return i < n
//                     ? { value: ++i, done: false }
//                     : { value: undefined, done: true };
//             }
//         }
//
//     }
// };

// function* iter(n = 10) {
//     for (let i = 0; i < n; i++) yield i;
// }
//
// for (let k of iter(6)) {
//     console.log(k);
// }


// Arrays
// const people = [
//   {name: 'Vito', age: 25, budget: 40000},
//   {name: 'Carl', age: 16, budget: 3400},
//   {name: 'Den', age: 27, budget: 50000},
//   {name: 'Joe', age: 15, budget: 1800},
//   {name: 'Joe', age: 28, budget: 25000},
//   {name: 'Joe', age: 12, budget: 2300},
// ];
// forEach - типа for() или for of

// people.forEach((person, index, pArr) => {
//   console.log(person);
//   console.log(index);
//   console.log(pArr);
// });

// Map - перебирает массив и не разбивает его, а так же возвращает изменённый массив

// const newPeople = people.map(person => person.age * 3);
// console.log(newPeople);

// Filter - фильтрует массив и оставляет массив с нужным фильтром

// const adults = [];
// for (let i = 0; i < people.length; i++) {
//   if (people[i].age >= 18) {
//     adults.push(people[i]);
//   }
// }
// console.log(adults);
// const adults = people.filter(person => person.age >= 18);
// console.log(adults);

// Reduce

// let amount = 0;
// for (let i = 0; i < people.length; i++) {
//   amount += people[i].budget;
// }
// console.log(amount);
// const amount = people.reduce((total, person) => total + person.budget, 0); // 122500
// console.log(amount);

// Find - находит в массиве инфу

// const igor = people.find(person => person.name === 'Vito');
// console.log(igor);

// FindIndex - находит индекс лемента в сассиве

// const igorIndex = people.findIndex(person => person.name === 'Den'); // 2
// console.log(igorIndex);
// const amount = people
//   // filter of people
//   .filter(person => person.budget > 30000)
//   // map -> add to all persons
//   .map(person => {
//     return {
//       info: `${person.name} (${person.age})`,
//       budget: Math.sqrt(person.budget)
//     }
//   })
//   // reduce sum of their budgets
//   .reduce((total, person) => total + person.budget, 0);
// console.log(amount);

// Map, Set, WeakMap, WeakSet
// const obj = {
//   name: 'Vito',
//   job: 'Fullstack',
//   age: 22
// };
// const entries = [
//   ['name', 'Vito'],
//   ['age', 25],
//   ['job', 'Fullstack'],
// ];

// Map -> чтоб получить ключ этого объекта нужно использовать get('')

// console.log(Object.entries(obj)); // переводит объект в массив массивов
// console.log(Object.fromEntries(entries)); // переводит массив в объект
// const map = new Map(entries); // тут могут быть любые типы ключей
// console.log(map.get('name')); // <- обязательно get('name'), чтоб получить значение ключа name
// map
//   .set('newField', 42)
//   .set(obj, 'Value of obj')
//   .set(NaN, 'NaN ??');
// console.log(map.get(NaN));
// map.delete('job');
// console.log(map.has('job')); // есть ли такой ключ в объекте map // true|false
// console.log(map.size); // узнать размер объекта // 6
// map.clear(); // очистить весь объект
// console.log(map.size); // 0

// ===================
// for (let [key, value] of map) {
//   console.log(key, value);
// }

// for(let val of map.values()) {
//   console.log(val);
// }
//Vito
// 25
// Fullstack
// 42
// Value of obj
// NaN ??

// for (let key of map.keys()) {
//   console.log(key);
// }
//name
// age
// job
// newField
// { name: 'Vito', job: 'Fullstack', age: 22 }
// NaN

// map.forEach((val, key, map) => {
//   console.log(key, val);
// });
//name Vito
// age 25
// job Fullstack
// newField 42
// { name: 'Vito', job: 'Fullstack', age: 22 } Value of obj
// NaN NaN ??

// const array = Array.from(map);
// const mapObj = Object.fromEntries(map.entries());
// console.log(mapObj);
//{
//   name: 'Vito',
//   age: 25,
//   job: 'Fullstack',
//   newField: 42,
//   '[object Object]': 'Value of obj',
//   NaN: 'NaN ??'
// }


// const users = [
//   {name: 'Vito'},
//   {name: 'Alex'},
//   {name: 'Irina'},
// ];
//
// const visits = new Map();
// visits
//   .set(users[0], new Date())
//   .set(users[1], new Date(new Date().getTime() + 1000 + 60))
//   .set(users[2], new Date(new Date().getTime() + 5000 + 60));
//
// function lastVisit (user) {
//   return visits.get(user);
// }
//
// console.log(lastVisit(users[2]));
// const set = new Set([1, 2, 3, 4, 4, 4, 5, 5, 6]); // покажет массив без повторений
// set.add(10).add(20).add(30).add(20); // добавление чисел в массив и при этом они не повторяются в массиве
// console.log(set);
// console.log(set.has(42)); // .has() проверка на то что указано в скобках
// console.log(set.size); // количество елементов в set
// console.log(set.delete(1)); // удаляет значенеи в set
// console.log(set.size); //
// console.log(set.clear()); // очищает set
// console.log(set.size); //


// for (let key of set) {
//   console.log(key);
// }
// function uniqValues (array) {
//   return [...new Set(array)];
// }
//
// console.log(uniqValues([1, 2, 3, 4, 2, 2, 3, 4, 5, 6, 4, 5, 4, 5]));

// WeakMap
// let obj = {
//   name: 'WeakMap',
// };
// const arr = [obj];
// obj = null;
// console.log(arr[0]);

// const map = new WeakMap([
//   [obj, 'obj data']
// ]);
// +get set delete has || -size
// obj = null;
// console.log(map);

// ==================
// const cache = new WeakMap();
//
// function cacheUser (user) {
//   if (!cache.has(user)) {
//     cache.set(user, Date.now());
//   }
//   return cache.get(user);
// }
//
// let lena = {name: 'Lena'};
// let alex = {name: 'Alex'};
// cacheUser(lena);
// cacheUser(alex);
// // lena = null;
// cacheUser(cache.has(lena));
// cacheUser(cache.has(alex));
//
// WeakSet

// const users = [
//   {name: 'Vito'},
//   {name: 'Alex'},
//   {name: 'Irina'},
// ];
// const visits = new WeakSet();
// visits.add(users[0]).add(users[1]);
// users.splice(1, 1);
// console.log(visits.has(users[0]));
// console.log(visits.has(users[1]));

// Fetch, Ajax, XHR

// const requestURL = 'https://jsonplaceholder.typicode.com/users';


// function sendRequest (method, url, body = null) {
  // return new Promise((resolve, reject) => {
  //   const xhr = new XMLHttpRequest();
  //   xhr.open(method, url);
  //   xhr.responseType = 'json';
  //   xhr.setRequestHeader('Content-Type', 'application/json');
  //   xhr.onload = () => {
  //     if (xhr.status >= 400) {
  //       reject(xhr.status, xhr.response);
  //     } else {
  //       resolve(xhr.status, xhr.response);
  //     }
  //     console.log(xhr.response); // ответ с сервера
  //   };
  //   xhr.onerror = () => {
  //     reject(xhr.response); //
  //   };
  //   xhr.send(JSON.stringify(body));
  // });
//   const headers = {
//     'Content-Type': 'application/json'
//   };
//   return fetch(url, {
//     method: method,
//     body: JSON.stringify(body),
//     headers: headers,
//   }).then(response => {
//     if (response.ok) {
//       return response.json();
//     }
//     return response.json().then(error => {
//       const e = new Error('Smth wrong');
//       e.data = error;
//       throw e;
//     });
//   })
// }
// //
// // sendRequest('GET', requestURL)
// //   .then(data => console.log(data))
// //   .catch(err => console.log(err));
// const body = {
//   name: 'Vito',
//   job: 'Fullstack',
//   age: 25
// };
// sendRequest('POST', requestURL, body)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Spread and Rest
// Spread

// const citiesRussia = ['Moscov', 'Saint-Pierre', 'Kazan', 'Novosibirsk'];
// const citiesEurope = ['Berlin', 'Prague', 'Paris'];
// const citiesRussiaWithPopulation = {
//   Moscow: 20,
//   SaintPierre: 8,
//   Kazan: 5,
//   Novosibirsk: 3
// };
// const citiesEuropeWithPopulation = {
//   Moscow: 26,
//   Berlin: 10,
//   Prague: 3,
//   Paris: 2
// };
// console.log(...citiesRussia);
// console.log(...citiesEurope);
// const allCities = [...citiesRussia, 'Washington', ...citiesEurope];
// console.log(allCities);
// console.log({...citiesRussiaWithPopulation});
// console.log({...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation});

// Practice
// const numbers = [5, 37, 42, 17];
// console.log(Math.max(5, 37, 42, 17));
// console.log(Math.max(...numbers));
// console.log(Math.max.apply(null, numbers));
// const divs = document.querySelectorAll('div');
// const nodes = [...divs];
// console.log(nodes);
// console.log(divs, Array.isArray(divs));
// console.log(nodes, Array.isArray(nodes));

// Rest
// function sum (...rest) {
//   console.log(rest);
//   return rest.reduce((a, i) => a + i, 0);
// }
//
// const numbers = [1, 2, 3, 4, 5, 7, 8, 9, 10];
// // console.log(sum(...numbers));
// // const a = numbers[0];
// // const b = numbers[1];
// // const [a, b, ...other] = numbers;
// // console.log(a, b, other);
// const person = {
//   name: 'Max',
//   age: 20,
//   city: 'Moscow',
//   country: 'Russia',
// };
// const {name, age, ...address} = person;
// console.log(name, age, address);

// Destructuration
function calcValues (a, b) {
  return [
    a + b,
    a - b,
    a * b,
    a / b,
    a + b + 32
  ]
}

const [sum, sub = 'No data', mult, ...other] = calcValues(42, 10);
// const sum = result[0];
// const sub = result[1];
// console.log(sum, mult, ...other, sub);
const person = {
  name: 'Max',
  age: 20,
  address: {
    country: 'Russia',
    city: 'Moscow'
  }
};
// const {
//   name: firstName = `The name isn't found`,
//   age,
//   car = 'Car is not found',
//   address: {city: homeTown, country}
// } = person;
// const {name, ...info} = person;


// console.log(name, info);
function logPerson({name = 'Is not very founded', age}) {
  console.log(name + ' ' + age);
}

logPerson(person);













