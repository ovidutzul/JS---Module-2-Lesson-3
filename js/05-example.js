/*
	Write a script that prints to the console all the words of a string except the first and the last one.
	The resulting string must not start or end whitespace character. The script should work for any line.
*/

const string = 'Welcome to the future';
let words = string.split(" ");
console.log(words);
// words.shift();
// words.pop();
words = words.slice(1, words.length - 1);
console.log(words);
const str = words.join(" ");
console.log(str);