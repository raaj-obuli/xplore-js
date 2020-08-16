import getPromise from '../promise/getPromise.js';

// concurrent asyncs are processed but doesn't executed simultaneously
// google for concurrent and parallel programming

async function concurrent() {
    // notice no "await" here, both the promises are being processed together
    let task1 = getPromise(5000, 'task 1'); // slow
    let task2 = getPromise(2000, 'task 2'); // fast

    let data1 = await task1;
    let data2 = await task2;
    // though task2 is resolved earlier it needs to wait for task1 to execute

    console.log(data1);
    console.log(data2);
}

concurrent();
