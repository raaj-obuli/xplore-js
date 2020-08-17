function* logGen() {
    console.log(0);
    // 1st next() call will start the generator and 2nd next() call assigns the value in place of yield
    console.log(1, yield);
    console.log(2, yield);
    console.log(3, yield);
}

let it = logGen();

it.next();
it.next('foo');
it.next('bar');
it.next('baz');