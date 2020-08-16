import getPromise from '../promise/getPromise.js';

// parallel asyncs executed simultaneously

async function asyncTask1() {
    let data = await getPromise(2000, '1');

    console.log('excuted first :: ', data)
}

async function asyncTask2() {
    let data = await getPromise(5000, '2');

    console.log('executed second :: ', data)
}

async function parallel() {
    await Promise.all([
                asyncTask1(),
                asyncTask2()
            ])
}

parallel();



// Below is how promise is handled using then()
// Promise.all([
//     getPromise(2000, '1'),
//     getPromise(3000, '2')
// ]).then(args => (
//     console.log(args)
// ))
