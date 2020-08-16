import getPromise from '../promise/getPromise.js';

async function helloAsync() {
    let data1 = await getPromise(3000);
    let data2 = await getPromise(3000, ('2nd await ' + data1));

    console.log('async await 1:: ', data1);
    console.log('async await 2:: ', data2);
}

helloAsync();

// how it is done using promise.then()
//
// getPromise(3000)
//     .then((data1) => {
//         return getPromise(3000, data1);
//     })
//     .then((data2) => {
//         console.log('promise chain:: ', data2);
//     });