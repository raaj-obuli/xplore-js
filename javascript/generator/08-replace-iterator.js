let data = {
    [Symbol.iterator]: function* () {
        yield 1;
        yield 2;
    }
}

console.log([...data]);