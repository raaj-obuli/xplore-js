function* yieldReturn() {
    yield 'ding';
    return 'dong'; // executing return gives { value: 'dong', done: true } to the next() call
    yield 'duck'; // statement after return are unreachable as similary in function call
}

let it = yieldReturn();

console.log( it.next() );
console.log( it.next() );
console.log( it.next() );