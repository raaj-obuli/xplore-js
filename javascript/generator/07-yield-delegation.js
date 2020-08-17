function* generatorAlpha() {
    yield 'a';
    yield 'b';
    yield 'c';
}

function* generatorBeta() {
    yield 1;
    yield* generatorAlpha(); // delegate to generator ie. iterable
    yield* ['x', 'y'];       // delegate to array ie. iterable
    yield 3;
}

let it = generatorBeta();

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
