const cep = /\d{5}-\d{3}/;

console.log(cep.test('84070-300'));
console.log(cep.test('84070300'));

const telefone = /\(\d{2}\)\d{4,5}-\d{4}/;

console.log(telefone.test('(42)98499-4231'));
console.log(telefone.test('(42)9849-4231'));