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
     console.log('promiseB:: 1nd then():', data);

     return 'tic';
 })
 .then(foo => {
    // this then() is 
    console.log('promiseB:: 2nd then():', foo);

    return 'tac';
 })
 .then(bar => {
    console.log('promiseB:: 3rd then():', bar);
 })