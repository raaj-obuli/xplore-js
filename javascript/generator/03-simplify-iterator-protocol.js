// this is a custom iterator on a plain object
let tensDataIt = {
    data : [10, 20, 30, 40, 50],
    /* 
     * implementing iterable protocol
     * iterable object should have a method of key "Symbol.iterator"
     * and the method should return a iterator object
     */
    [Symbol.iterator]: function() {
        let self    = this;
        let dataLen = self.data.length;
        let count   = 0;

        /**
         * calling [Symbol.iterator]() returns a iterator object
         * iterator object is an object that has a "next()" method
         * "next()" method should return an object like this { value: [VALUE OF ANY DATA TYPE], done: [BOOLEAN]}
         * "value" indicates the current value of the iteration and "done" indicated whethere the iteration is completed or not
         */
        return {
            next: function() {
                if (count < dataLen) {
                    return {
                        value : self.data[count++], // current value of the iteration
                        done  : false               // indicates iteration is not complete
                    }
                } else {
                    return {
                        // "value" is optional on last iteration (i.e. when "done" is true)
                        done: true // iteration is complete, this property indicates the iteration should be terminated
                    }
                }
            }
        }
    }
}


// we are going to simplify the iterator implementation using the generator

let tensData = {
    data: [10, 20, 30, 40, 50]
};

// compare the generator function with the [Symbol.iterator]() method in the above implementation
// generator takes care of implementaion of iterable and iterator protocol internally
function* tensGenerator() {
    let count = 0;
    let dataLen = tensData.data.length;

    while(count < dataLen)
        yield tensData.data[count++]
}

let tensIt = tensGenerator();

for (const num of tensIt) {
    console.log(num);
}