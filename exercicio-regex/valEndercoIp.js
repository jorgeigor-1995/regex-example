// valida ip
const regex = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/

console.log(regex.test('123.0.0.1'));
console.log(regex.test("0.0.0.0"));
console.log(regex.test("192.168.0.62"));
console.log(regex.test("0.0.0"));


