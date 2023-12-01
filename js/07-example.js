// Write a script to sort an array of strings alphabetically by the first letter of an element.

const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];

for (let i = 0; i < langs.length; i++) {
		let wasChanged = false;

		for (let j = 0; j < langs.length - i - 1; j++) {
			const leftElement = langs[j];
			const rightElement = langs[j + 1];

			if (leftElement[0] > rightElement[0]) {
				wasChanged = true;
				langs[j] = rightElement;
				langs[j + 1] = leftElement;
			}
		}

		if (!wasChanged) {
			break;
		}
}

console.log(langs);