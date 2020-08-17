function A() {
    console.log('--- executing A() ---');
    return 1;
}
function B() {
    console.log('--- executing B() ---');
    return 2;
}
function C() {
    console.log('--- executing C() ---');
    return 3;
}

function* functionCall() {
    yield A(); // return value of A() is returned when calling next() method
    yield B();
    yield C();
}

let it = functionCall();

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);