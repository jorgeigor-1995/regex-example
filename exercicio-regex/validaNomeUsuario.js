//valida nome usuario

let regex = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(regex.test('jiaros_123'));
console.log(regex.test('ji'));