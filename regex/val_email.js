const regex_email = /\w+@\w+\.\w+/

console.log(regex_email.test('jorgeigor.1995@gmail.com'));
console.log(regex_email.test('jorge igor'));
console.log(regex_email.test('jorgeigor.1995@gmail'));
console.log(regex_email.test('jorgeigor.1995@gmail.com.br'));

