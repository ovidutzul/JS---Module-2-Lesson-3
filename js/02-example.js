/*
	Write a script to calculate the area of a rectangle with sides, which values values are stored in the values variable as a string.
	Values guaranteed separated by a space.
*/

const values = '8 11';
const arr = values.split(" ");
const firstValue = arr[0];
const lastValue = arr[arr.length - 1];
const area = firstValue * lastValue;

console.log(area);