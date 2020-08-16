/**
 * Promise constructor takes a single function argument that in turn takes two function arguments
 * "resolve" and "reject" are two function arguments given below
 * if the arguments are not function then they are ignored
 */
let lazyBoy = new Promise(function(resolve, reject) {
    setTimeout(function() {
        if (Math.random()*10 > 5) {
            resolve('Success')
        } else {
            reject('Failed')
        }
    }, 5000);
});

/**
 * then() method takes two function arguments
 * first argument is the fullfill handler
 * secon argument is the rejection handler
 */
lazyBoy
    .then(function(data) {
        // 'data' is the value received from the resolve() call of the promise
        console.log(data);
    }, function(error) {
        // 'error' is the error message received from the reject() call of the promise
        console.error(error);
    })

// create resolved promise with the value passed as argument
Promise.resolve(10)
    .then((data) => {
        console.log('Promise.resolve(10):: ', data);
    })

// creates a rejected promise with the error message passed as argument
Promise.reject(new Error('Some Error'))
    .catch((error) => {
        console.error(error);
    })