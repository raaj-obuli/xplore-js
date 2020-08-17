// iterator is an object that implements the a next() method
// calling next() method should returns an object with two property { value: 'any value', done: true }
// "value" is the value of current iteration and "done" is the flag indicating whether is iteration is complete or not

// below is an example that mocks iterator protocol

function createTensIterator() {
    let data    = [10, 20, 30, 40, 50];
    let dataLen = data.length;
    let count   = 0;

    return {
        next: function() {
            if (count < dataLen) {
                return {
                    value: data[count++],
                    done: false
                }
            } else {
                return {
                    value: count,
                    done: true
                }
            }
        }
    }
}

let tensIterator = createTensIterator();
let result       = tensIterator.next();

while(!result.done) {
    console.log(result.value);
    result = tensIterator.next();
}

console.log('Iterator count: ', result.value);