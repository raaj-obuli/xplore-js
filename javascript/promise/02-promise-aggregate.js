import getPromise from './getPromise.js';

/**
 * then() may be called on many times on same promise
 * all the then()'s are aggregated in this case
 */
let promiseB = getPromise(3000);

promiseB
    .then(data => console.log('promiseB:: 1st then():', data));

promiseB
    .then(data => console.log('promiseB:: 2nd then():', data));

promiseB
    .then(data => console.log('promiseB:: 3rd then():', data));