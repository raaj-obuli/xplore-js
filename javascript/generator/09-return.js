
// return() method returns the given value and finishes the generator
function* gen() { 
    yield 1;
    yield 2;
    yield 3;
  }
  
  const g = gen();
  
  g.next();        // { value: 1, done: false }
  g.return('foo'); // { value: "foo", done: true }
  g.next();        // { value: undefined, done: true }