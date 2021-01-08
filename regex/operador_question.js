const opcional = /abacax?i/;

console.log(opcional.test('abacaxi'))
console.log(opcional.test('abacai'))

const padrao2 = /\d+\w?/;

console.log(padrao2.test('123'))
console.log(padrao2.test('123asd'))
console.log(padrao2.test('123asd '))