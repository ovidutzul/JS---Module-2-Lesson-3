/*
    1. Create an array genres with elements "Jazz" and "Blues".
    2. Add "Rock'and'Roll" to the end.
    3. Print the first element of the array to the console.
    4. Print the last element of the array to the console. The code should work for an array random length.
    5. Remove the first element and print it to the console.
    6. Insert "Country" and "Reggae" at the beginning of the array.
*/

const genres = ["Jazz", "Blues"];
console.log(genres);

genres.push("Rock'n'roll");
console.log(genres);

const firstElementIndex = 0;
const firstElement = genres[firstElementIndex];
console.log(firstElement);

const lastElementIndex = genres.length - 1;
const lastElement = genres[lastElementIndex];
console.log(lastElement);

// const deletedElement = genres.shift();
// console.log(deletedElement);
// console.log(genres);

// genres.unshift("Country", "Reggae");
// console.log(genres);

const deletedElement = genres.splice(0, 1)[0];
console.log(deletedElement);
console.log(genres);

genres.splice(0, 0, "Country", "Reggae");
console.log(genres);