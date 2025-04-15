// console.log('Hello Boolean!');

const arguments = process.argv.slice(2);

if (arguments.length === 0) {
  console.log('No arguments provided!');
}
else{
    let string = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        string += ' ' + arguments[i];
    }
    console.log(string);
}