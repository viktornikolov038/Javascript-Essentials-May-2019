function uppercaseWords(userInput) {
    let pattern = new RegExp('[a-zA-Z]+', 'g');
    let matches = userInput.match(pattern);

    console.log(matches.map(m => m.toUpperCase()).join(', '))
}