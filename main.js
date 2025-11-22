console.log('Hello JS world!');

for(let i = 0; i < 100; i++) {
    if(i % 3 == 0) {
        console.log('Num: ' + i + ' - Fizz');
    } else if ( i % 5 == 0) {
        console.log('Num: ' + i + ' - Buzz');
    } else if ( i % 3 == 0 && i % 5 == 0) {
        console.log('Num: ' + i + ' - FizzBuzz');
    }
}