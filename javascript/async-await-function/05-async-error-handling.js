async function asyncErrorHandle1() {
    try {
        let data = await Promise.reject(new Error('Async Error'));
    } catch (error) {
        console.error('using try catch',error)
    }
}

async function asyncErrorHandle2() {
    let data = await Promise.reject(new Error('Async Error'));
}

asyncErrorHandle1();

asyncErrorHandle2()
    .catch(err => console.log('using catch()', err));