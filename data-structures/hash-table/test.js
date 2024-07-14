import Hashmap from './hashtable.js';

// TESTING
const table = new Hashmap();

// SET TESTS
table.set('apple', 'red');
table.set('apple', 'red');
table.set('banana', 'yellow');
table.set('carrot', 'orange');
table.set('dog', 'brown');
table.set('elephant', 'gray');
table.set('frog', 'green');
table.set('grape', 'purple');
table.set('hat', 'black');
table.set('ice cream', 'white');
table.set('jacket', 'blue');
table.set('kite', 'pink');
table.set('lion', 'golden');
table.set('moon', 'silver');
table.set('moon', 'silver');

// GET TEST
console.log(table.get('lion'));
console.log(table.get('banana'));
console.log(table.get('moon'));
console.log(table.get('apple'));
console.log(table.get('nope'));
console.log(table.get("this doesn't exist"));
console.log(table.get('carrot'));

// HAS TEST
console.log(table.has('lion'));
console.log(table.has('banana'));
console.log(table.has('moon'));
console.log(table.has('apple'));
console.log(table.has('nopzze'));
console.log(table.has('wtf'));
console.log(table.has('ice cream'));

// REMOVE TEST
console.log(table.remove('jacket'));
console.log(table.remove('elephant'));
console.log(table.remove('carrot'));
console.log(table.remove('carrot'));
console.log(table.remove('doesnt exist'));

table.set('fausufas', 'askrkaks');
table.set('igdsignids', 'omgg');
table.set('saroasroo', 'fdsoo');
table.set('asdasida', 'oksksk');
table.set('omgg', 'yess');
table.set('testing askdasi', 'opups');
table.set('calisthenics', 'cool af');
table.set('lets goo bro', 'oguggugu');
table.set('asdlasodasodasiodasisaidas', 'oguggugu');
table.set('zxzxifiw', 'oguggugu');

console.log(table);

// LENGTH TEST
console.log(table.length());

console.log(table.keys());
console.log(table.values());
console.log(table.entries());

// CLEAR TEST
// table.clear();
// console.log(table);
