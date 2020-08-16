import getPromise from './getPromise.js';

let promiseA = getPromise(2000);

// then() will always return a promise
let promiseAThen = promiseA
                .then(data => console.log('promiseAThen', data));
console.log('then() returns a promise', promiseAThen);

/**
 * since then() always returns a Promise it can be chained
 * the promise returned by then() is resolved with the value of return statement of the then()'s fullfill handler
 */
let promiseB = getPromise(4000);

promiseB
 .then(data => {
     console.log('promiseB::then() stage: 1 ', data);

     return 'tic';
     // then() returns a Promise that is resolve with the return value of this function
     // promise object is constructed internally
     // ex. Promise.resolve('tic')
 })
 .then((foo) => {
   console.log('promiseB::then() stage: 2 ', foo);

   return Promise.resolve('tac');
   // then() returns a Promise, unlike previous one the promise is created explicitly
 })
 .then(bar => {
    console.log('promiseB::then() stage: 3 ', bar);

    return getPromise(2000, 'Hulk');
    // this then() returns a "new Promise()" created by the getPromise()
 })
 .then(bla => {
    console.log('promiseB::then() stage: 4 ', bla);
 })