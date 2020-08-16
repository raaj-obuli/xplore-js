import getPromise from '../promise/getPromise.js';

// async function is syntactic sugar to handle promise
async function helloAsync() {
    console.log('calling Async Function')
    let data = await getPromise(3000);

    console.log('Hello Async Function:: ', data);
}

console.log('before async call');
let async1 = helloAsync();
console.log('after async call');


// Note calling async function always returns a promise which can be handled using then()
async1
    .then( () => console.log('async then()') );



// Below is how promise is handles using then() method
// getPromise(3000)
//     .then((data) => {
//         console.log('This is how it is done using promise then() ', data);
//     })