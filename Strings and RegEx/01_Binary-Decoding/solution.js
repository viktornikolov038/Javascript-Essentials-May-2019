function solve() {
	const textInputField = document.getElementById('input');
	const textInput = textInputField.value;
	const textAsArray = Array.from(textInput);
	let sumOfOnes = textAsArray.reduce((a, b) => Number(a) + Number(b));

	while (sumOfOnes.toString().length > 1) {
		let sumAsArray = Array.from(sumOfOnes.toString());
		sumOfOnes = sumAsArray.reduce((x, y) => +x + +y);
	}

	const subString = textInput.substring(sumOfOnes, textAsArray.length - sumOfOnes);
	let splittedSubstring = subString.match(/.{1,8}/g);
	splittedSubstring = splittedSubstring.map(e => e = String.fromCharCode(parseInt(Number(e), 2)));
	splittedSubstring = splittedSubstring.filter(function(char){
		const pattern = new RegExp('[a-zA-Z ]', 'g');
		return pattern.test(char);
	});

	const result = splittedSubstring.join('');

	const resultParagraph = document.querySelector('div.resultBox p span#resultOutput');
	resultParagraph.textContent = result;
}
