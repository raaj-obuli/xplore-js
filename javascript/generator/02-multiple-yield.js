console.log('multiple yield');
function* helloGenerator() {
    console.log('---- calling ----');

    // retuns 'Hellos' when 1st next() method is called
    yield 'Hello';

    console.log('---- after yield 1 ----');
    // retuns 'Generator' when 2nd next() method is called
    yield 'Generator';
    
    console.log('---- after yield 2 ----');
    // retuns '!' when 3rd next() method is called
    yield '!';

    console.log('---- after yield 3 ----');
}

let greetGenerator = helloGenerator();

// try comment out all the console.log()
// uncomment one by one and execute to see how the Generator works

console.log(greetGenerator.next().value);
console.log(greetGenerator.next().value);
console.log(greetGenerator.next().value);
console.log(greetGenerator.next().done);  // this call return { done:true } that means iteration is complete

console.log('\n----------------------------------------\n')

console.log('ID generator');
function* idGenerator() {
    let id = 1;

    while(true)
        yield id++;
}

let idObj = idGenerator();

console.log(idObj.next().value);
console.log(idObj.next().value);
console.log(idObj.next().value);
console.log(idObj.next().value);