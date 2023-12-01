// Write a script that "unwraps" a string (reverse letter order) and prints it to the console.

const string = 'Welcome to the future';
// const arr = string.split("");
// arr.reverse();
// const result = arr.join("");
// console.log(result);

const words = string.split(" ");
for (let i = 0; i < words.length; i++) {
	const word = words[i];
	const arr = word.split("");
	arr.reverse();
	const result = arr.join("");
	words[i] = result;
}

const result = words.join(" ");
console.log(result);