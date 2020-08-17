function* simpleGenerator() {
    console.log('calling generator'); // executed when 1st next() is called

    // yield expression specifies the what value to return when the next() method is called
    yield 'Hello!!'; // executed when 1st next() is called

    console.log('execution complete'); // executed when 2st next() is called
}

// calling a generator function returns a iterator object for the function
// when the next() method on the iterator is called the function executes until it find the first "yield" expression
let it = simpleGenerator();

console.log(it.next().value);
console.log(it.next().value);


// NOTE: generator are executed for only one iteration
// further creating a iterable and calling next() will not execute another iteration
let itNew = simpleGenerator();

console.log(it.next());
console.log(it.next());