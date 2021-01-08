const notab = /[^ab]/;

console.log(notab.test('ab'));
console.log(notab.test('Aqui ab'));

const notaz = /[^a-z]/;

console.log(notaz.test('Aqui ab'));
console.log(notaz.test('123Aquiab'));