let tensDataobj = {
    data: [10, 20, 30, 40, 50]
}

// throws error "tensDataobj is not iterable" ince it is plain object not a iterable
/* 
for (const num of tensDataobj) {
    console.log('tensDataobj object', num);
}
 */

// below example shows how convert a plain object into iterable

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

// read iterator object using for...of loop
console.log('using for...of loop')

// for...of loop internally call the tensDataIt[Symbol.iterator]() method of to get the iterator object
for (const num of tensDataIt) {
    console.log(num);
}

console.log('\n ------------------------------ \n');

// using spread operator
console.log('using spread operator', [...tensDataIt]);

console.log('\n ------------------------------ \n');

// using destructure
let [a, b, c, d, e] = tensDataIt;
console.log('using array destructure');
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

console.log('\n ------------------------------ \n');

// using for loop
let data = tensDataIt[Symbol.iterator]();

console.log('using for loop');
for(let item = data.next(); item.done === false; item = data.next()){
    console.log(item.value);
}
// similarly while/do...while loop can be used

console.log('\n ------------------------------ \n');


/**
 * Iteration pause and play
 */
let dataPausePlay = tensDataIt[Symbol.iterator]();

console.log('pause and play iteration')
for(let itemA = dataPausePlay.next(); itemA.done === false; itemA = dataPausePlay.next()){
    console.log(itemA.value);

    // pausing the iteration by breaking out of the loop
    if(itemA.value === 20){
        console.log('iteration paused\n');
        break;
    };
}

console.log('iteration play')
// resuming the iteration from where it was left in previous iteration
for(let itemB = dataPausePlay.next(); itemB.done === false; itemB = dataPausePlay.next()){
    console.log(itemB.value);
}