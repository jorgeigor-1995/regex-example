const valDominio = /[?www.]\w+\.com.br|.com/

console.log(valDominio.test('www.horadecodar.com'));
console.log(valDominio.test('www.horadecodar.com.br'));
console.log(valDominio.test('horadecodar.com.br'));
console.log(valDominio.test('www.horadecodar'));



